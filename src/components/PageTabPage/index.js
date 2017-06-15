import avalon, { component } from 'avalon2';
import './index.css';

component('ms-pagetabpage', {
    template: require('./index.html'),
    defaults: {
        tmpl: '',
        checked: false
    }
})
