
for(let n=2;n<=200;n++)
{

    for(let a=2;a<n;a++)
    {
        var flag=true;
            if(n%a==0)
            {
                flag=false;
                 break;
            }
    }
        if(flag==true)
        {
            console.log(`${n} is prime number`);
        }
        
}   
 
