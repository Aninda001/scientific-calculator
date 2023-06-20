import { useState } from 'react';
import style from './App.css';
import Keypad from "./components/keypad";
import Screen from './components/screen';
import calc from './logic/logic';

function App() {
  const [ques , setQues ] = useState('');
  const [evaluation , setEval ] = useState('');
  const [answer , setAnswer ] = useState('');
  const question = ( event ) => {
    if(answer){
      setQues('');
      setEval('');
      setAnswer('');
    }

    if ( event === '×'){
      setEval(prev => prev + '*' );
    }
    else if(event === '÷'){
      setEval( prev => prev + '/' );
    }
    else if(event === 'Exp'){
      setEval(prev => prev + '^' );
    }
    else if( event === 'Ans' || event === '=' ){
      setAnswer(calc(evaluation));
      return ;
    }
    else{
      setEval( prev => prev + event );
    }
    setQues(prev => prev + event);
  }

  return (
    <main className={style.position}>
      <Screen question = {ques} ans = {answer} />
      <Keypad  question = {question} />
    </main>
  );
}

export default App;