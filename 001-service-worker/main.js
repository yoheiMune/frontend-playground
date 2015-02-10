(function () {

    /*
        ログ出力
    */
    function log () {
      var $area = document.querySelector('#log');
      $area.appendChild(document.createTextNode(Array.prototype.join.call(arguments, ", ") + '\n'));
      console.log.apply(console, arguments);
    }

    window.onerror = function(err) {
      log("Error", err);
    };


    /*
        テスト対象機能
    */
    function getFullName (id) {
        return new Promise(function (done, fail) {
            $.getJSON('./api/users/' + id).then(function (user) {
                var fullName;
                if (user.firstName && user.lastName) {
                    fullName = user.firstName + ' ' + user.lastName;
                } else if (user.firstName) {
                    fullName = user.firstName;
                } else if (user.lastName) {
                    fullName = user.lastName;
                }
                done(fullName);
            }).fail(fail);
        });
    }


    /*
        テスト開始
    */
    var messageChannel;
    var testData = {
        '/001-service-worker/api/users/1': {firstName: 'Yohei',   lastName: 'Munesada'},
        '/001-service-worker/api/users/2': {firstName: 'Tomoko',  lastName: undefined},
        '/001-service-worker/api/users/3': {firstName: undefined, lastName: 'Yamada'}
    };
    describe('test - getFullName', function () {

        beforeEach(function (done) {
            navigator.serviceWorker.register('./sw.js').then(function (aRegistration) {
                registration = aRegistration;
                // Activationしていない場合は、強制リロード
                if (navigator.serviceWorker.controller === null) {
                    return location.reload();
                }
                var messageChannel = new MessageChannel();
                messageChannel.port1.onmessage = messageChannel.port2.onmessage = function(event) {
                  log("[worker]", event.data);
                  done();
                };
                var testDataString = JSON.stringify(testData);
                navigator.serviceWorker.controller.postMessage(testDataString, [messageChannel.port1]);
                log("[host]", testDataString);

            }).catch(function (err) {
                console.error('error', err);
                done(false);
            });
        });

        afterEach(function (done) {
            navigator.serviceWorker.getRegistration().then(function (registration) {
                registration.unregister().then(function () {
                    done();
                });
            });
        });

        it('both firstName and lastName', function (done) {
            getFullName(1).then(function (fullName) {
                expect('Yohei Munesada').toBe(fullName);
                done();
            })
        });

        it('only firstName', function (done) {
            getFullName(2).then(function (fullName) {
                expect('Tomoko').toBe(fullName);
                done();
            })
        });

        it('only lastName', function (done) {
            getFullName(3).then(function (fullName) {
                expect('Yamada').toBe(fullName);
                done();
            })
        });

    });






































})();