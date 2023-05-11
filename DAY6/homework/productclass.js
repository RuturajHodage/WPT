class Product{

    constructor(pName,pCost,pDesc){
        this.ProductName=pName
        this.ProductCost=pCost
        this.ProductDesc=pDesc
    }
    showProdDetails(){
        console.log("PRoduct name=",this.ProductName)
        console.log("product cost=",this.ProductCost)
        console.log("product description=",this.ProductDesc)

    }
}

let obj = new Product("water bottle",150,"best quality")
obj.showProdDetails();


