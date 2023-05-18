import { useState } from "react"
import ChildComponent from "./ChildComponent"


export default function ParentComponet()
{
    let[n1,setn1]=useState(0)
    let[n2,setn2]=useState(0)
    let[res,setres]=useState(0)

     function changeResult(r)
     {
         setres(r)
     }
    return<div>
        <center>
           <input type="number" placeholder="num1" onBlur={(e)=>{setn1(e.target.value)}}/>
           <input type="number"  placeholder="num2"onBlur={(e)=>{setn2(e.target.value)}}/>
           <p>RESULT:{res}</p> 

           <ChildComponent f1={changeResult} num1={parseInt(n1)} num2={parseInt(n2)}></ChildComponent>  
        </center>         
         </div>
}


