var app = new Vue({
    el: '#app',
    data: {
        text: 'Do you want to see the components?',
        title: 'I like this color of background, and you?'
    },
    components: {
        'hello': {
            template:$template['hello'],
            data: function(){
                return {
                    ask: 'can you see me?'
                }
            }
        }
    },
    created: function () {
        console.log('i am created')
    }
})