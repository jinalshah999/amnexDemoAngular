var democlass = /** @class */ (function () {
    function democlass(xyz) {
        this.xyz = xyz;
    }
    democlass.prototype.printdata = function () {
        return this.xyz;
    };
    return democlass;
}());
var x = new democlass(10);
console.log(x.printdata() + "");
