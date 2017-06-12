import avalon, { component } from 'avalon2';
import './index.css';

component('ms-tabpage', {
    template: require('./index.html'),
    defaults: {
        tmpl: '',
        checked: false
    }
})
