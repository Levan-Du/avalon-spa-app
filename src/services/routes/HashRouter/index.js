import avalon, { component } from 'avalon2';
import Router from '../router';


component('ms-hashrouter', {
    template: '<div ms-css="styles"><slot name="component" /></div>',
    defaults: {
        styles: {
            width: '100%',
            height: '100%'
        },
        component: '',
        visiblePath: '',
        routes: {},
        onInit(e) {
            Router.routerComponent = e.vmodel;
        },
        onReady(e) {

        },
        onViewChange(e) {}
    },
    soleSlot: 'component'
})
