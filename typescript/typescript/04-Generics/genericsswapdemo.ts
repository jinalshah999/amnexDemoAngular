function identity<T>(arg: T): T {
    return arg;
}
function swap<T>(a:T,b:T):void{
    let temp:T;
    temp=a;
    a=b;
    b=temp;
    console.log("value of a "+a);
    console.log("value of b "+b);
}
/*function swap(a:number,b:number):void{
    let temp:number=a;
    a=b;
    b=temp;
    console.log("value of a "+a);
    console.log("value of a "+b);
}*/
swap(10,20);
swap('a','b');
swap<number>(10,20);


