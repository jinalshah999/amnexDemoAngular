function identity(arg) {
    return arg;
}
function swap(a, b) {
    var temp;
    temp = a;
    a = b;
    b = temp;
    console.log("value of a " + a);
    console.log("value of b " + b);
}
/*function swap(a:number,b:number):void{
    let temp:number=a;
    a=b;
    b=temp;
    console.log("value of a "+a);
    console.log("value of a "+b);
}*/
swap(10, 20);
