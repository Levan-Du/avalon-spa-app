export var parseCssModule = (styles, tmpl) => {
    var div = document.createElement('div');
    div.innerHTML = tmpl;

    var eles = div.getElementsByTagName('*');
    for (var l = eles.length; l--;) {
        var ele = eles[l],
            cla = ele.getAttribute('class'),
            newCla = cla;

        if (cla) {
            var clas = cla.split(' ');
            clas.forEach(c => {
                if (styles[c]) {
                    newCla = newCla.replace(c, styles[c]);
                }
            });

            ele.setAttribute('class', newCla);
        }
    };

    return div.innerHTML;
}
