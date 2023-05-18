import "./ex2.css"
import { Component } from "react";

export default class Fruit extends Component
{
    constructor()
    {
        super()
        this.state={arr:[]};
    } 

    handler=(e)=>{
          
        let fruitName=e.target.value
        let temp=[...this.state.arr]
        temp.push(fruitName)
        this.setState({arr:temp})
    }
    
    getList=()=>
    {
        let fruitlist=[]
        for(let i=0;i<this.state.arr.length;i++)
        {
            let a=<li>{this.state.arr[i]}</li>
            fruitlist.push(a)
        }
        return fruitlist
    }


    render()
    { 
        return<div className="outline">
            <center>
             ADD:FRUIT<input type="text" onBlur={this.handler}/>

            <ol>
                {this.getList()}
            </ol>
            </center>
    </div>
    }
}