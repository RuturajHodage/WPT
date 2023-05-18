import React from "react"

export default class SquareC extends React.Component
{
    constructor()
    {
        super()
        this.num=0;
        this.state={sqr:0}
    }
    textreceiver=(e)=>{
         this.num=e.target.value
         let s=this.num*this.num
         this.setState({sqr:s})
    }
    render()
    {
        return <div>
               <input type="text" onBlur={this.textreceiver}/>
               <p>Square={this.state.sqr}</p>
               </div>
    }
}