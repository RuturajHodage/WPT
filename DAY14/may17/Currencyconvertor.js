import {Component} from "react";

export default class Currencyconvertor extends Component
{
    constructor()
    {
       super()
       this.amt=""
       this.from=""
       this.to=""
       this.state={res:""}  
    } 
    amtreceiver=(e)=>
    {
      this.amt=e.target.value
      console.log(this.amt)
    }
    amtfrom=(e)=>
    {
     this.from=e.target.value
     console.log(this.from)
    }
    amtto=(e)=>
    {
        this.to=e.target.value
        console.log(this.to)
    }

    convert=(e)=>
    {
        switch(this.from)
            {    
                case "Rupees":
                    if(this.to==="doller")
                    {
                        let x = this.amt/81.74
                        this.setState({res:x +"$"})
                        console.log(x  +"heyyyy")
                        // num.concat("&#8377","=",num/81.74,"$")
                    }    
                    else if(this.to==="Rupees")
                    {
                         let x=this.amt
                         this.setState({res:x+"₹"})
                        //element.innerHTML=num.concat("&#8377","=",num,"&#8377")
                    }
                    else if(this.to=="Euro")
                    {
                        let x=this.amt*0.011
                        this.setState({res:x+"€"})
                        //element.innerHTML=num.concat("&#8377","=",num*0.011,"&#8364")
                    }
                    break;

                case "doller" :
                    if(this.to=="doller")
                    {
                        let x=this.amt
                        this.setState({res:x+"$"})
                        //element.innerHTML=num.concat("$","=",num,"$")
                    }
                    else if(this.to=="Rupees")
                    {
                        let x=this.amt*81.74
                        this.setState({res:x+"₹"})
                        //element.innerHTML=num.concat("$","=",num*81.74,"&#8377")
                    }
                    else if(this.to=="Euro")
                    {
                        let x =this.amt*(0.91)
                        this.setState({res:x+"€"})
                        //element.innerHTML=num.concat("$","=",num*(0.91),"&#8364")
                    }
                    break;
                case "Euro" :
                    if(this.to=="doller")
                    {
                        let x= this.amt*(1.10)
                        this.setState({res:x+"$"})
                        //element.innerHTML=num.concat("&#8364","=",num*1.10,"$")
                    }
                    else if(this.to=="Rupees")
                    {
                        let x=this.amt*(90.13)
                        this.setState({res:x+"₹"})
                        //element.innerHTML=num.concat("&#8364","=",num*90.13,"&#8377")
                    }
                    else if(this.to=="Euro")
                    {
                        let x=this.amt
                        this.setState({res:x+"€"})
                        //element.innerHTML=num.concat("&#8364","=",num,"&#8364")
                    }
                    break;
                    
            }
    }

    render()
    {
        return<div>

                 <body>
        <lable>Amount:</lable>   
        <input type="text" id="id1" placeholder="Enter Amount" onBlur={this.amtreceiver}/>
    <pre>
        FROM:<select onChange={this.amtfrom}>
            <option>SELECT</option>
            <option value="Rupees">Rupees</option>
            <option value="doller">dollar</option>
            <option value="Euro">Euro</option>
            </select>
          
        TO: <select onChange={this.amtto}>
            <option>SELECT</option>
            <option value="Rupees">Rupees</option>
            <option value="doller">dollar</option>
            <option value="Euro">Euro</option>
            </select>  

        
        <button onClick={this.convert}>Convert</button>

        <p>CONVERTED AMOUNT={this.state.res}</p>
         
        </pre>

        
   </body>  
        </div>
    }
}