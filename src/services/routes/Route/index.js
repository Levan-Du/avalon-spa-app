import avalon, { component } from 'avalon2';
import Router from '../router';


component('ms-route', {
    template: `
        <div ms-attr="{id:$id}" ms-css="styles" ms-html="visibleComponent" ms-visible="visible">
        </div>
        `,
    defaults: {
        styles: {
            width: '100%',
            height: '100%'
        },
        path: '',
        component: '',
        visible: false,
        visibleComponent: '',
        query: {},
        queryString: '',
        onInit(e) {
            var _this = this;

            var routeComp = Router.routerComponent;
            routeComp.routes[_this.path] = e.vmodel;

            Router.route(_this.path, () => {
                _this.queryString = Router.query;
                _this.query = Router.getQuery() || {};

                _this.visible = true;
                _this.visibleComponent = '<' + _this.component + ' ms-widget="{id:\'' + _this.component + _this.$id.replace('ms-route', '') + '\',query:query,queryString:queryString}" />';

                var currCompVmodel = routeComp.routes[routeComp.visiblePath];
                if (currCompVmodel) {
                    currCompVmodel.visibleComponent = '';
                    currCompVmodel.visible = false;
                }

                routeComp.visiblePath = _this.path;
            });
        },
        onReady(e) {

        }
    }
})
