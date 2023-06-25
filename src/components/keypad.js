import style from './keypad.module.css';
import Button from './button'

const normalKeys = [
    [{ ques: <>7</>, view : <>7</>, evalue: '7' }, { ques: <>4</>, view : <>4</>, evalue: '4' }, { ques: <>1</>, view : <>1</>, evalue: '1' }, { ques: <>0</>, view : <>0</>, evalue: '0' }],
    [{ ques: <>8</>, view : <>8</>, evalue: '8' }, { ques: <>5</>, view : <>5</>, evalue: '5' }, { ques: <>2</>, view : <>2</>, evalue: '2' }, { ques: <>.</>, view : <>.</>, evalue: '.' }],
    [{ ques: <>9</>, vieew : <>9</>, evalue: '9' }, { ques: <>6</>, view : <>6</>, evalue: '6' }, { ques: <>3</>, view : <>3</>, evalue: '3' }, { ques: <>Exp&#40;</>, view : <>&times;e^&#40;</>, evalue: '*e^(' }],
    [{ ques: <>DEL</>, view : <></>, evalue: 'DEL' }, { ques: <>&times;</>, view : <>&times</>, evalue: '*' }, { ques: <>+</>, view : <>+</>, evalue: '+' }, { ques: <>Ans</>, view : <>Ans</>, evalue: 'Ans' }],
    [{ ques: <>AC</>, view : <></>, evalue: 'AC' }, { ques: <>&divide;</>, view : <>&divide;</>, evalue: '/' }, { ques: <>-</>, view : <>-</>, evalue: '-' }, { ques: <>=</>, view : <>=</>, evalue: '=' }]
]

const specialKeys = [
    [{ ques :<>&#40;</> , evalue : '('}, { ques : <>&#41;</>, evalue : ')' }, { ques : <>e</>, evalue : '(e)'}, { ques : <>&pi;</>, evalue : '(pi)' }],
    [{ ques :<>abs&#40;</> , evalue : 'abs('}, { ques : <>sin&#40;</>, evalue : 'sin(' }, { ques : <>cos&#40;</>, evalue : 'cos('}, { ques : <>tan&#40;</>, evalue : 'tan(' }],
    [{ ques :<>^&#40;</> , evalue : '^('}, { ques : <>log10&#40;</>, evalue : 'log10(' }, { ques : <>ln&#40;</>, evalue : 'log('}, { ques : <>&times;10&#40;</>, evalue : '*10^(' }]
]

const Keypad = (props) => {
    const screenShow = (e) => {
        props.question(e);
    }

    const Pad = ( keypad ) => keypad.map((col, ind) => {
        return (
            <div className={style.column} key={ind}>
                {col.map(({ ques, view, evalue }) => {
                    return <Button key={evalue} value={{q : view , val : evalue}} screenShow={screenShow}>
                        {ques}
                    </Button>
                })}
            </div>
        )
    });
    return (
        <>
        <div className={style.keypad}>
            {Pad(specialKeys)}
        </div>
        <div className={style.keypad} >
            {Pad(normalKeys)}
        </div>
        </>
    )
}

export default Keypad;