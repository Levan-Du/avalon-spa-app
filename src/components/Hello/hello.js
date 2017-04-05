import avalon, { component } from 'avalon2';
import style from './hello.css';

component('ms-hello', {
    template: require('./hello.html'),
    defaults: {
        word: 'China',
        change: function(e) {
            this.word = this.word === "China" ? 'world' : "China";
        }
    }
});
