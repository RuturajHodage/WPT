import { useState } from "react";

import Graduate from "./Graduate";
import Undergraduate from "./Undergraduate";
import Postgraduate from "./Postgraduate";
export default function Parentgraduate()
{
    let [choice,setchoice]=useState("")

    return <div>
        <pre>
            <center>
        <br></br>
        <br></br>
        USERNAME:<input type="text"></input>
        EMAIL:<input type="text"></input>
        <br></br>
        <br></br>
        
        
        <select onChange={(e)=>{setchoice(e.target.value)}}>
            <option>SELECT</option>
            <option value="GRAD">GRADUATE</option>
            <option value="PG">POST GRADUATE</option>
            <option value="UG">UNDER GRADUATE</option>
        </select>
        </center>
        </pre>
        
        {choice==="GRAD"?<Graduate></Graduate>:""}
        {choice==="PG"?<Postgraduate></Postgraduate>:""}
        {choice==="UG"?<Undergraduate></Undergraduate>:""}
    </div>
}