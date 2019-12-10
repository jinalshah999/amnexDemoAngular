export class Products {
  public constructor(
    public Product_Id: number,
    public Product_Title: string,
    public Product_Price: number,
    public Product_MFG: string,
    public Product_MFG_Data: Date,
    public Product_Color: string,
    public Product_Available: boolean) {}
}
