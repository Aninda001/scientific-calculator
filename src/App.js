import { useState } from 'react';
import style from './App.css';
import Keypad from "./components/keypad";
import Screen from './components/screen';


function App() {
  const [ques , setQues ] = useState('')
  const question = ( event ) => {
    setQues( ques + event );
  }

  return (
    <main className={style.position}>
      <Screen question = {ques}/>
      <Keypad  question = {question} />
    </main>
  );
}

export default App;
