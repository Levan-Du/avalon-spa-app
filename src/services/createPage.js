export default (id, pid, page, title) => {
    var o = {
        id,
        name: page,
        title: title,
        path: '/' + page,
        tmpl: `<ms-${page} slot="page" />`,
        checked: page === 'home' ? true : false,
        pid
    };
    return o;
};
