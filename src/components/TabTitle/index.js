import avalon, { component } from 'avalon2';
import './index.css';

component('ms-tabtitle', {
    template: require('./index.html'),
    defaults: {
        el: {},
        click() {},
        onClick() {
        	this.click();
            this.el.checked = true;
        }
    }
})
