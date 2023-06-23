import style from './keypad.module.css';
import Button from './button'

const normalKeys = [
    [{ ques: <>7</>, evalue: '7' }, { ques: <>4</>, evalue: '4' }, { ques: <>1</>, evalue: '1' }, { ques: <>0</>, evalue: '0' }],
    [{ ques: <>8</>, evalue: '8' }, { ques: <>5</>, evalue: '5' }, { ques: <>2</>, evalue: '2' }, { ques: <>.</>, evalue: '.' }],
    [{ ques: <>9</>, evalue: '9' }, { ques: <>6</>, evalue: '6' }, { ques: <>3</>, evalue: '3' }, { ques: <>=</>, evalue: '=' }],
    [{ ques: <>&times;</>, evalue: '*' }, { ques: <>+</>, evalue: '+' }, { ques: <>&divide;</>, evalue: '/' }, { ques: <>-</>, evalue: '-' }]
]

const specialKeys = [
    [{ ques :<>&#40;</> , evalue : '('}, { ques : <>&#41;</>, evalue : ')' }, { ques : <>e</>, evalue : '(e)'}, { ques : <>&pi;</>, evalue : '(pi)' }],
    [{ ques : <>sin&#40;</>, evalue : 'sin(' }, { ques : <>cos&#40;</>, evalue : 'cos('}, { ques : <>tan&#40;</>, evalue : 'tan(' }, { ques: <>Ans</>, evalue: 'Ans' }],
    [{ ques :<>^&#40;</> , evalue : '^('}, { ques : <>log</>, evalue : 'log' }, { ques : <>log10&#40;</>, evalue : 'log10('}, { ques: <>DEL</>, evalue: 'DEL' }],
    [{ ques :<>abs&#40;</> , evalue : 'abs('}, { ques: <>Exp&#40;</>, evalue: '*e^(' }, { ques : <>&times;10&#40;</>, evalue : '*10^(' }, { ques: <>AC</>, evalue: 'AC' }]
]

const Keypad = (props) => {
    const screenShow = (e) => {
        props.question(e);
    }

    const Pad = ( keypad ) => keypad.map((col, ind) => {
        return (
            <div className={style.column} key={ind}>
                {col.map(({ ques, evalue }) => {
                    return <Button key={evalue} value={{q : ques , val : evalue}} screenShow={screenShow}>
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