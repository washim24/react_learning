import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15);
  const addValue = () =>{
    counter = counter + 1;
    if(counter>20){
      counter = 20;
    } 
    // console.log(counter);
    // console.log("Value added ",Math.random());
      setCounter(counter);
  }


  const removevalue = () =>{
    counter = counter - 1;
    if(counter<0){
      counter = 0;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Washim aur react</h1>
      <h1>Counter :{counter}</h1>
      <button  onClick={addValue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
