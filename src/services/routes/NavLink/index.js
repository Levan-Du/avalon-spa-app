import avalon, { component } from 'avalon2';
import Router from '../router';
import './index.css';


component('ms-navlink', {
    template: `
        <a ms-class="['nav-link',@class]" ms-attr="{href:getHref(to)}" ms-click="onClick" ms-css="style">
            <span><slot /></span>
            <i ms-visible="iconVisible" class="glyphicon glyphicon-remove-circle" ms-click="onIconClick"></i> 
        </a>
        `,
    defaults: {
        style: {},
        class: '',
        to: '',
        label: '',
        data: {},
        iconVisible:false,
        click(e) {},
        iconClick(e) {},
        getHref(to) {
            return '#' + to;
        },
        onClick(e) {
            e.to = this.to;
            this.click(e);
        },
        onIconClick(e) {
            e.to = this.to;
            this.iconClick(e);
        },
        onInit(e) {
            // console.log(this.class);
        }
    },
    soleSlot: 'text'
});
