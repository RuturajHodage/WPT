function Product(pName,pCost,pDesc){
    this.productName=pName
    this.productCost=pCost
    this.productDesc=pDesc

    this.showProdDetails=function(){
        console.log("PRoduct name=",this.productName)
        console.log("product cost=",this.productCost)
        console.log("product description=",this.productDesc)

    }
}

let obj = new Product("water bottle",150,"best quality")
obj.showProdDetails();