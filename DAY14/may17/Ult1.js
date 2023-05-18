import { useState } from "react"

export default function Ult1()
{
    let[textvalue,setvalue]=useState(" ")
    
    let[result,setres]=useState() 

    function textreceiver(e)
    {
       setvalue(e.target.value)
    }

    function ucase(e)
    {
       if(e.target.checked)
            setres(textvalue.toUpperCase())
       else
           setres(textvalue)     
    }
    function lcase(e)
    {
        if(e.target.checked)
           setres(textvalue.toLowerCase())
        else
          setres(textvalue)
    }
    function tcase(e)
    {
        if(e.target.checked)
           setres(textvalue.charAt(0).toUpperCase()+textvalue.substring(1).toLowerCase())
        else
           setres(textvalue)
    }
    
    return <div>
        <center>
        Enter Text:<input type="text" onBlur={textreceiver}/>
         
         {/* UPPERCASE:<input type="Radio" name="casechoice" value="uc" onClick={ucase}/> 
         lowerCASE:<input type="Radio" name="casechoice" value="lc" onClick={lcase}/> 
         TitleCASE:<input type="Radio" name="casechoice" value="tl" onClick={tcase}/>  */}

         UPPERCASE:<input type="checkbox" name="casechoice" value="uc" onClick={ucase}/> 
         lowerCASE:<input type="checkbox" name="casechoice" value="lc" onClick={lcase}/> 
         TitleCASE:<input type="checkbox" name="casechoice" value="tl" onClick={tcase}/> 
                    
         <p>RESULT={result}</p>
         </center>
    </div>
}