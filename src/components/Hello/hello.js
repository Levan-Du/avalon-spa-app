import avalon, { component } from 'avalon2';
import style from './hello.css';

component('ms-hello', {
    template: `
	<h2 class=${style.redHello} ms-click="@change">Hello {{@word}}</h2>
	`,
    defaults: {
        word: 'China',
        change: function(e) {
            this.word = this.word === "China" ? 'world' : "China";
        }
    }
});
