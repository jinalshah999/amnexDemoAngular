var xyz = /** @class */ (function () {
    function xyz(x) {
        this.x = x;
    }
    xyz.prototype.printdata = function () {
        console.log(this.x);
    };
    return xyz;
}());
var obj = new xyz(10);
obj.printdata();
