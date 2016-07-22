var app = new Vue({
    el: '#app',
    data: {
        books: [],
        MySearch: ''
    },
    methods: {

    },
    ready: function() {
        var self = this;
        self.$http.get('dataServer.json').then(function(response) {
            self.books = response.data;
        });
    }
});
