import { useState } from 'react';
import './App.css';
import Keypad from "./components/keypad";
import Screen from './components/screen';


function App() {
  const [ques , setQues ] = useState('')
  const question = ( event ) => {
    setQues( ques + event );
  }
  
  return (
    <>
      <Screen question = {ques}/>
      <Keypad question = {question} />
    </>
  );
}

export default App;
