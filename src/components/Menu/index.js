import avalon, { component } from 'avalon2';
import './index.css';

component('ms-menu', {
    template: require('./index.html'),
    defaults: {
        menus:[]
    }
})
