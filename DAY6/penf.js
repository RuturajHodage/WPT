function Pen(pencolor,pencost){
    this.pcolor=pencolor;
    this.pcost=pencost

    this.showInfo=function(){
        console.log(this.pcolor,this.pcost)
    }
}

 let obj=new Pen("blue",20)
 console.log(obj.pcolor,obj.pcost)

obj.showInfo();
console.log(obj)


let arr=[]
arr.push(new Pen("blue",20))
arr.push(new Pen("white",30))
arr.push(new Pen("red",30))

// let arr2=[]
// arr2.push("blue",20)
// arr2.push("white",30)
// arr2.push("red",30)

// console.log(arr2)

// for(b of arr2)
// {
//     console.log(arr2)
// }

for(let i=0;i<arr2.length;i++){
         console.log(arr2[i])
     }

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],i)
// }

// console.log(obj["pcolor"] ,obj.pcolor)
