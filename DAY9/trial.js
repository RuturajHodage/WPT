class Trial
{
    static data =1;
    data2=2;
    #data3=3;

    show()
    {
        console.log(Trial.data,this.data2,this.#data3)
    }

    static show2()
    {
        console.log(Trial.data)
    }
}
    let obj = new Trial()
    obj.show()
    Trial.show2()

    // Trial.data=10;
    // Trial.show2()

    // let obj2=new Trial()
    // obj.data2=20
    // obj2.show()

    let obj3=new Trial()
    console.log(obj3.data3=30)
    obj3.show()
    obj.show()

    
    




