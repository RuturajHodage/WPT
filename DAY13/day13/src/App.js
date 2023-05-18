import logo from './logo.svg';
import './App.css';
import Trialprops from './Trialprops';
import Currencyconvertor from './Currencyconvertor';

function App() {

        // let obj = {xcoordinate:12,ycoordinate:20}
        // let arr=[12,3,55]

        // function alpha()
        // {
        //   console.log("alpha Is called")
        // }

  return (
    <div className="App">
        {/* <Trialprops func1={alpha} flag={true} point={obj} num1={45} str={"PPP"} arr={[10,20,30]} ></Trialprops>
        <Trialprops point={obj} num1="45" arr={arr}></Trialprops>   */}
        <Currencyconvertor></Currencyconvertor>
    </div>
  );
}

export default App;
