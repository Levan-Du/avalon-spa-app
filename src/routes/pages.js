var pages = [];
var createPage = (id, pid, page) => {
    var o = {
        id,
        name: page,
        title: page,
        path: '/' + page,
        tmpl: `<ms-${page} slot="page" />`,
        checked: id === 1 ? true : false,
        pid
    };
    return o;
};


[1, 2, 3].forEach(i => {
    pages.push(createPage(i, 0, 'page' + i));
    [1, 2, 3, 4, 5].forEach(j => {
        var i2 = i * 100 + j;
        pages.push(createPage(i2, i, 'page' + i2));
    })
});


export var menus = pages.filter(el => el.pid === 0);
export var submenus = pages.filter(el => el.pid !== 0);

export default { pages, menus, submenus };
