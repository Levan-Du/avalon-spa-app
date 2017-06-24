if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback) {
        var arr = this;
        for (var i in arr) {
            callback(arr[i], parseInt(i), arr);
        }
    }
}

if (!Array.prototype.map) {
    Array.prototype.map = function(callback) {
        var _arr = [];
        this.forEach(function(el, i, arr) {
            _arr.push(callback(el, i, arr));
        });
        return _arr;
    }
}

if (!Array.prototype.filter) {
    Array.prototype.filter = function(callback) {
        var _arr = [];
        this.forEach(function(el, i, arr) {
            if (callback(el, i, arr)) {
                _arr.push(el);
            }
        });
        return _arr;
    }
}

if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        var _arr = this;
        for (var i in _arr) {
            if (callback(_arr[i], parseInt(i), _arr)) {
                return _arr[i];
            }
        }
        return null;
    }
}


if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(callback) {
        var _arr = this;
        for (var i in _arr) {
            var j = parseInt(i)
            if (callback(_arr[i], j, _arr)) {
                return j;
            }
        }
        return -1;
    }
}

if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callback) {
        var _arr = this,
            r = callback(_arr[0], _arr[1], 0, _arr);
        for (var i = 1; i < _arr.length - 2; i++) {
            r = callback(r, _arr[i + 1], i, _arr);
        }
        return r;
    }
}

if (!Array.prototype.some) {
    Array.prototype.some = function(callback) {
        var _arr = this;
        for (var i in _arr) {
            if (callback(_arr[i], parseInt(i), _arr)) {
                return true;
            }
        }
        return false;
    }
}

if (!Array.prototype.every) {
    Array.prototype.every = function(callback) {
        var _arr = this;
        for (var i in _arr) {
            if (!callback(_arr[i], parseInt(i), _arr)) {
                return false;
            }
        }
        return true;
    }
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(el) {
        var _arr = this;
        for (var i in _arr) {
            if (arr[i] === el) {
                return parseInt(i);
            }
        }
        return -1;
    }
}

! function() {
    var DONT_ENUM = "propertyIsEnumerable,isPrototypeOf,hasOwnProperty,toLocaleString,toString,valueOf,constructor".split(","),
        hasOwn = ({}).hasOwnProperty;
    for (var i in {
            toString: 1
        }) {
        DONT_ENUM = false;
    }


    Object.keys = Object.keys || function(obj) { //ecma262v5 15.2.3.14
        var result = [];
        for (var key in obj)
            if (hasOwn.call(obj, key)) {
                result.push(key);
            }
        if (DONT_ENUM && obj) {
            for (var i = 0; key = DONT_ENUM[i++];) {
                if (hasOwn.call(obj, key)) {
                    result.push(key);
                }
            }
        }
        return result;
    };
}();

if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }
        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function() {},
            fBound = function() {
                return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    };
}
