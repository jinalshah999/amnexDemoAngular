/*function g(input:boolean){
    var a=100;
    if(input){
        var b=a+1;
        return b;
    }
    return b;
}
console.log(g(false));*/
function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}

console.log(f(true));




