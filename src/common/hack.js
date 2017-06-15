if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback) {
        var arr = this;
        for (var i in arr) {
            callback(arr[i], parseInt(i));
        }
    }
}

if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        var arr = [];
        this.forEach(function(el, i) {
            if (callback(el, i)) {
                arr.push(el);
            }
        });
        return arr;
    }
}

if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(callback) {
        var arr = this;
        for (var i in arr) {
            var j = parseInt(i)
            if (callback(arr[i], j)) {
                return j;
            }
        }
        return -1;
    }
}
