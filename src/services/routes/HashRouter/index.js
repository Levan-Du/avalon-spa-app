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
            var urlsplits = Router.currentUrl.match(/\/\w+/g),
                visiblePath = '',
                path = '';

            urlsplits.forEach(el => {
                path += el;
                var routeVmodel = this.routes[path];
                if (routeVmodel) {
                    visiblePath = path;
                    routeVmodel.queryString = Router.query;
                    routeVmodel.query = Router.getQuery() || {};
                    routeVmodel.visible = true;
                    routeVmodel.visibleComponent = '<' + routeVmodel.component + ' ms-widget="{id:\'' + routeVmodel.component + this.$id.replace('ms-route', '') + '\',query:query,queryString:queryString}" />';
                }
            });
            this.visiblePath = visiblePath;
        },
        onViewChange(e) {}
    },
    soleSlot: 'component'
})
