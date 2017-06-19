class Router {
    constructor() {
        this.routes = {};
        this.currentUrl = '';
        this.query = '';
        this.routerComponent = {};
    }

    route(path, callback) {
        this.routes[path] = callback || function() {};
    }

    refresh() {
        var url = location.hash.slice(1) || '/';
        var index = url.indexOf('?');
        index = index < 0 ? url.length : index;
        this.currentUrl = url.substr(0, index);
        this.query = url.substr(index + 1, url.length) || '';


        var urlsplits = this.currentUrl.match(/\/\w+/g),
            visiblePath = '',
            path = '';
        urlsplits.forEach(el => {
            path += el;
            var cb = this.routes[path];
            cb && cb();
        });
    }

    describe(listener) {

    }

    redirect(path) {
        location.hash = path;
    }

    init() {
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    }

    getQuery() {
        if (!this.query) {
            return {}
        };
        var oo = {},
            ss = this.query.split('=');
        oo[ss[0]] = ss[1];
        return oo;
    }
}


var router = new Router();
export default router;

router.init();
