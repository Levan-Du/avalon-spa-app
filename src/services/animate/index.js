import avalon from 'avalon2';


avalon.effect('fade', {
    enter: function(el, done) {
        $(el).fadeIn('fast', done);
    },
    leave: function(el, done) {
        $(el).hide();
    }
});

avalon.effect('slide', {
    enter: function(el, done) {
        $(el).show();
        var _height = $(el).children().length * 32 + 10;
        $(el).animate({ height: _height + 'px' }, 200, 'swing', done);
    },
    leave: function(el, done) {
        $(el).animate({ height: 0 }, 200, 'swing', () => {
            $(el).hide();
        });
    }
});
