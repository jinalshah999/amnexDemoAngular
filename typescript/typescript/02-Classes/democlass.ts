class democlass{

   public xyz:number;

    constructor(xyz:number){

            this.xyz=xyz;
    }
    printdata():number{
        return this.xyz;
    }
}
let x=new democlass(10);
console.log(x.printdata()+"");