

new Vue({
    el : '#app',
    data : {
        message : 'Hello from Vue.js'
    }
});

new Vue({
    el : '#app2',
    data : {
        message : 'You loaded this page on ' + new Date()
    }
});

new Vue({
    el : '#app3',
    data : {
        seen : true
    }
});

new Vue({
    el : '#app4',
    data : {
        todos : [
            { text : 'Apple' },
            { text : 'Orange' },
            { text : 'Strawberry' }
        ]
    }
});

new Vue({
    el : '#app5',
    data : {
        message : 'Hello from Vue.js!'
    },
    methods : {
        reverseMessage : function(e) {
            console.log('reverseMessage:', e, this);
            this.message = this.message.split('').reverse().join('');
        }
    }
});

new Vue({
    el : "#app6",
    data : {
        message : "Hello Vue!"
    }
});


Vue.component('my-item', {
    props    : [ 'item' ],
    template : '<li>{{ item.text }}</li>'
});

new Vue({
    el : "#app7",
    data : {
        skills : [
            { text : 'Javascript' },
            { text : 'Python' },
            { text : 'Swift3.0' }
        ]
    }
});

//=========== 以上、「はじめに」でした ============