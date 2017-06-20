export default (id, pid, page) => {
    var o = {
        id,
        name: page,
        title: page,
        path: '/' + page,
        tmpl: `<ms-${page} slot="page" />`,
        checked: page === 'home' ? true : false,
        pid
    };
    return o;
};
