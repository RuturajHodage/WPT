class Book
{
    constructor(bn,cost)
    {
        this.bookName=bn
        this.bookCost=cost
    }
    showDetails()    
    {
        console.log("THIS BOOK IS ",this.bookName)
        console.log("this book cost is",this.bookCost)
    }
}

let obj=new Book("java blackbook",400)
console.log(obj.bookName,obj.bookCost)
obj.showDetails()

let Books=[]
Books.push(new Book("B1",200))
Books.push(new Book("B2",300))

let total=0;

for(a of Books)
{
    total=total+a.bookCost
}
console.log("total cost of all books",total)

for(b of Books)
{
    console.log(b.bookName)
    console.log(b.bookCost)
}

for(c in obj)
{
    console.log(c,"=",obj[c])
}

