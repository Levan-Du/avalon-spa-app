import avalon, { component } from 'avalon2';
import './index.css';

component('ms-navlink', {
    template: require('./index.html'),
    defaults: {
        title: '',
        to: ''
    }
})
