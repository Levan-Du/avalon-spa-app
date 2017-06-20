import avalon, { component } from 'avalon2';
import Router from '../router';


component('ms-navlink', {
    template: `
        <a class="nav-link" ms-attr="{href:getHref(to)}" ms-click="click" ms-css="styles">
            <span><slot /></span>
        </a>
        `,
    defaults: {
        styles: {
        },
        to: '',
        getHref(to) {
            return '#' + to;
        },
        click(e) {

        },
        onInit(e) {
            // console.log(this.text);
        }
    },
    soleSlot: 'text'
});
