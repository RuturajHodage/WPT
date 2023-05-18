import { useState } from "react"

export default function Ult3()
{   
   let[textvalue,setText]=useState("")
   let[r,setres]=useState()

   function textreceiver(e)
   {
      setText(e.target.value)
   }
   
   function casehandler(val)
   {
          
     switch(val)
     {
        case 'uc':setres(textvalue.toUpperCase());break;
        case 'lc':setres(textvalue.toLowerCase());break;
        case 'tl':setres(textvalue.charAt(0).toUpperCase()+textvalue.substring(1).toLowerCase());break;
        default:break;            
     }
   }
    
    return <div>
    <center>
    Enter Text:<input type="text" onBlur={textreceiver}/> 
    
     UPPERCASE:<input type="Radio" name="casechoice" value="uc" onClick={(e)=>{casehandler(e.target.value)}}/> 
     lowerCASE:<input type="Radio" name="casechoice" value="lc" onClick={(e)=>{casehandler(e.target.value)}}/> 
     TitleCASE:<input type="Radio" name="casechoice" value="tl" onClick={(e)=>{casehandler(e.target.value)}}/> 
                
     <p>RESULT={r}</p>
     </center>
    </div>
}