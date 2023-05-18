
export default function ChildComponent({f1,num1,num2})
{
    function compute(e)
    {
        switch(e.target.value)
        {
            case "add":let res=num1+num2;
                       f1(res);
                       break;
            case "sub":let res1=num1-num2;
                       f1(res1);
                       break;
            case "mul":let res2=num1*num2;
                       f1(res2);
                       break;                      
            case "div":let res3=num1/num2;
                       f1(res3);
                       break;
            case "pow":let res4=Math.pow(num1,num2)
                       f1(res4);
                       break;
            default : break;           
          
        }
       
    }
    return<div>
        <center>
         
               <h5>child component</h5>
               <select onChange={compute}>
                <option >SELECT OPERATION</option>
                <option value="add">ADDITION</option>
                <option value="sub">SUBSTRACTION</option>
                <option value="mul">MULTIPLICATION</option>
                <option value="div">DIVISION</option>
                <option value="pow">POWER</option>
               </select>
        </center>       
         </div>

}