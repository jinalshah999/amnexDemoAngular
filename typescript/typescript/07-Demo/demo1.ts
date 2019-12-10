class xyz
{
    x:number;
    constructor(x:number){
        this.x=x;
    }
    printdata():void{
        console.log(this.x);
    }
}
let obj=new xyz(10);
obj.printdata();