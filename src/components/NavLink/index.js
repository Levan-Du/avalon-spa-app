import avalon, { component } from 'avalon2';
import './index.css';

component('ms-navlink', {
    template: require('./index.html'),
    defaults: {
        item: {},
        glyphicon: '',
        parseHref(path) {
            if (!path)
                return '';
            else if (path === '/') {
                return '';
            } else {
                return '#' + path;
            }
        },
        iconvisible: false,
        click(e, el) {

        }
    }
})
