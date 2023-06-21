import { useState } from 'react';
import style from './App.css';
import Keypad from "./components/keypad";
import Screen from './components/screen';
import calc from './logic/logic';

function App() {
  const [quest , setQues ] = useState([]);
  const [evaluation , setEval ] = useState('');
  const [answer , setAnswer ] = useState('');
  const question = ( {q,val} ) => {
    if(answer){
      setQues('');
      setEval('');
      setAnswer('');
    }

    if( val === 'Ans' || val === '=' ){
      setAnswer(calc(evaluation));
      return ;
    }
    else{
      setEval( prev => prev + val );
    }
    setQues(prev => [...prev,q] );
  }

  return (
    <main className={style.position}>
      <Screen question = {quest} ans = {answer} />
      <Keypad  question = {question} />
    </main>
  );
}

export default App;