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
                var names = [];
                user.firstName & names.push(user.firstName);
                user.lastName & names.push(user.lastName);
                var fullName = names.join(' ').trim();
                done(fullName);
            }).fail(fail);
        });
    }


    /*
        テスト開始
    */
    var testData = {
        '/001-service-worker/api/users/1': {firstName: 'Yohei',   lastName: 'Munesada'},
        '/001-service-worker/api/users/2': {firstName: 'Tomoko',  lastName: null},
        '/001-service-worker/api/users/3': {firstName: null, lastName: 'Yamada'},
        '/001-service-worker/api/users/4': {firstName: null, lastName: null},
    };
    describe('test - getFullName', function () {

        beforeEach(function (done) {
            navigator.serviceWorker.register('./sw.js').then(function (aRegistration) {
                // Activationしていない場合は、強制リロード
                if (navigator.serviceWorker.controller === null) {
                    return location.reload();
                }
                var messageChannel = new MessageChannel();
                // messageChannel.port2.onmessage = function(event) {
                //   log("[worker]", event.data);
                //   done();
                // };
                messageChannel.port2.onmessage = done;
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
                registration.unregister().then(done);
            });
        });

        it('both firstName and lastName', function (done) {
            getFullName(1).then(function (fullName) {
                expect('Yohei Munesada').toBe(fullName);
                done();
            });
        });

        it('only firstName', function (done) {
            getFullName(2).then(function (fullName) {
                expect('Tomoko').toBe(fullName);
                done();
            });
        });

        it('only lastName', function (done) {
            getFullName(3).then(function (fullName) {
                expect('Yamada').toBe(fullName);
                done();
            });
        });

        it('neither firstName or lastName', function (done) {
            getFullName(4).then(function (fullName) {
                expect('').toBe(fullName);
                done();
            });
        });

    });






































})();