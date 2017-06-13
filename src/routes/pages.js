var pages = [];
var createPage = (id, pid) => {
    var o = {
        id,
        name: 'page' + id,
        title: 'page' + id,
        path: '/page' + id,
        tmpl: `<ms-page${id} slot="page" />`,
        checked: id === 1 ? true : false,
        pid
    };
    return o;
};
[1, 2, 3].forEach(i => {
    pages.push(createPage(i, 0));
    [1, 2, 3, 4, 5].forEach(j => {
        pages.push(createPage(i * 100 + j, i));
    })
});

export default pages;
