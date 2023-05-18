import { useState } from "react"

export default function Ult2()
{
    let[textvalue,setText]=useState("")
    let[r,setres]=useState()

    function textreceiver(e)
    {
         setText(e.target.value)
    }
    
    function casehandler(e)
    {
        let val=e.target.value
        switch(val)
        {
            case 'uc': setres(textvalue.toUpperCase());break;
            case 'lc': setres(textvalue.toLowerCase());break;
            case 'tl': setres(textvalue.charAt(0).toUpperCase()+textvalue.substring(1).toLowerCase());break;
            default  :break;    
        }
    }

    
    return <div>
        <center>
        Enter Text:<input type="text" onBlur={textreceiver}/>
         
         

         UPPERCASE:<input type="Radio" name="casechoice" value="uc" onClick={casehandler}/> 
         lowerCASE:<input type="Radio" name="casechoice" value="lc" onClick={casehandler}/> 
         TitleCASE:<input type="Radio" name="casechoice" value="tl" onClick={casehandler}/> 
                    
         <p>RESULT={r}</p>
         </center>
    </div>
}