import { useState } from "react"

export default function Ult()
{
    let[upper,setupper]=useState()
    let[lower,setlower]=useState()
    let[title,settitle]=useState()

    let v=""
    
    function textreceiver(event)
    { 
        v=event.target.value;
    }

    function toUpper()
    {
         let s =v.toUpperCase()
         setupper(s)
         
    }

    function toLower()
    {
    
        let s=v.toLowerCase()
        setlower(s)
        
    }
    
    function totitle()
    {
        let s=v.charAt(0).toUpperCase()+v.substring(1).toLowerCase()
        settitle(s)
    }


    
    return <div>

        Enter Text:<input type="text" onBlur={textreceiver}/>

         UPPERCASE:<input type="checkbox" onChange={toUpper}/> 
         lowerCASE:<input type="checkbox" onChange={toLower}/> 
         TitleCASE:<input type="checkbox" onChange={totitle}/> 
         
         <p>UPPERCASE={upper}</p>
         <p>lowercase={lower}</p>
         <p>TitleCase={title}</p>
    </div>
}


