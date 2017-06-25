import avalon, { component } from 'avalon2';
import Router from '../router';

component('ms-route', {
    template: `
        <div ms-attr="{id:$id}" ms-css="styles" ms-html="visibleComponent"
            ms-effect="{is:animation,action:aniAction,onEnterDone:aniActionEnter,onLeaveDone:aniActionLeave}">
        </div>
        `,
    defaults: {
        styles: {
            width: '100%',
            height: '100%',
            display: 'none'
        },
        path: '',
        component: '',
        visible: false,
        visibleComponent: '',
        cached: true,
        query: {},
        queryString: '',
        childRoute: '',
        animation: 'fade',
        aniAction: 'leave',
        aniActionEnter() {

        },
        aniActionLeave() {},
        onInit(e) {
            var _this = this;

            var routerComp = Router.routerComponent;
            routerComp.routes[_this.path] = e.vmodel;

            Router.route(_this.path, () => {
                var urlsplits1 = routerComp.visiblePath.match(/\/[\w-]+/g),
                    path1 = '';
                if (urlsplits1) {
                    urlsplits1.forEach(el => {
                        path1 += el;
                        var routeVmodel = routerComp.routes[path1];
                        if (routeVmodel) {
                            if (!routeVmodel.cached) {
                                routeVmodel.visibleComponent = '';
                            }
                            routeVmodel.visible = false;
                            routeVmodel.styles.display = 'none';
                            routeVmodel.aniAction = 'leave';
                        }
                    });
                }

                this.routeCallback(routerComp);
            });
        },
        routeCallback(routerComponent) {
            var routerComp = routerComponent || Router.routerComponent;
            var urlsplits = Router.currentUrl.match(/\/[\w-]+/g),
                visiblePath = '',
                path = '';
            if (!urlsplits) return;
            urlsplits.forEach(el => {
                path += el;
                var routeVmodel = routerComp.routes[path];
                if (routeVmodel) {
                    visiblePath = path;
                    routeVmodel.queryString = Router.query;
                    routeVmodel.query = Router.getQuery() || {};
                    routeVmodel.visible = true;
                    routeVmodel.aniAction = 'enter';
                    var vc = '<' + routeVmodel.component + ' ms-widget="{query:query,queryString:queryString}" />';
                    if (!routeVmodel.cached) {
                        routeVmodel.visibleComponent = vc;
                    } else if (!routeVmodel.visibleComponent) {
                        routeVmodel.visibleComponent = vc;
                    }
                }
            });
            routerComp.visiblePath = visiblePath;
        },
        onReady(e) {
            this.routeCallback();
        },
        onDispose(e) {}
    }
})
