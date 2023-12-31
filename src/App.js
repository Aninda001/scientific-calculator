import { useState } from 'react';
import style from './App.css';
import Keypad from "./components/keypad";
import Screen from './components/screen';
import calc from './logic/logic';
import {string, complex} from 'mathjs'

let ans = '';
function App() {
  const [quest , setQues ] = useState([]);
  const [evaluation , setEval ] = useState('');
  const [answer , setAnswer ] = useState('');

  const question = ( {q,val} ) => {
    if(val !== 'DEL' && answer){
      ans = answer;
      setQues([]);
      setEval('');
      setAnswer('');
    }
    
    if( val === '=' ){
      try{
        const output = calc(evaluation);
        if(typeof(output) === 'object'){
          setAnswer(string(complex(output)));
        }
        else{
          setAnswer(output);
        }
      }catch(e){
        setAnswer(e.message);
      }
      return ;
    }
    else if( val === 'AC' ){
      setQues([]);
      setEval('');
      setAnswer('');
      return ;
    }
    else if( val === 'DEL' ){
      setQues( prev => prev.slice(0,-1));
      setEval( prev => prev.slice(0,-1));
      setAnswer('');
      return ;
    }
    else{
      if( val === 'Ans' ){
        val = `(${ans})`;
      }
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