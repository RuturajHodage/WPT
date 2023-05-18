import react from "react"

export default class Loginclass extends react.Component
{
    constructor()
    {
       super()
       this.users = [
        { uname: "xxx" ,password :"123"},
        { uname: "rrr" ,password :"13"},
        { uname: "xeex" ,password :"23"},
       ]

       this.uname=""
       this.pwd=""
       this.state={res:""}

    }
    unamereceiver=(e)=>
    {
        this.uname=e.target.value
        console.log(this.uname)
               
    }
    pwdreceiver=(e)=>
    {
        this.pwd=e.target.value
        console.log(this.pwd)
    }
    checkinfo=(e)=>
    {
        let found=false
        this.users.forEach((user)=>{
            if(user.uname==this.uname && user.password==this.pwd)
            {
                found=true
            }
        })
           if(found)
           {
            this.setState({res:"success....."})
           }
           else
           {
              this.setState({res:"fail.."})
           }
           
    }
    render()
    {
        return<div>
            <center>
            USERNAME:<input type="text" onBlur={this.unamereceiver}></input>
            PASSWORD:<input type="text" onBlur={this.pwdreceiver}></input>

            <br></br>
            <br></br>
            <input type="submit" onClick={this.checkinfo}/>
            <p>RESULT={this.state.res}</p>
            </center>
        </div>
    }
}
