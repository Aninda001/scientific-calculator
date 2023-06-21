import style from './keypad.module.css';
import Button from './button'

const normalKeys = [
    [{ ques: <>7</>, evalue: '7' }, { ques: <>4</>, evalue: '4' }, { ques: <>1</>, evalue: '1' }, { ques: <>0</>, evalue: '0' }],

    [{ ques: <>8</>, evalue: '8' }, { ques: <>5</>, evalue: '5' }, { ques: <>2</>, evalue: '2' }, { ques: <>.</>, evalue: '.' }],

    [{ ques: <>9</>, evalue: '9' }, { ques: <>6</>, evalue: '6' }, { ques: <>3</>, evalue: '3' }, { ques: <>Exp</>, evalue: '^' }],

    [{ ques: <>DEL</>, evalue: 'DEL' }, { ques: <>&times;</>, evalue: '*' }, { ques: <>+</>, evalue: '+' }, { ques: <>Ans</>, evalue: 'Ans' }],

    [{ ques: <>AC</>, evalue: 'AC' }, { ques: <>&divide;</>, evalue: '/' }, { ques: <>-</>, evalue: '-' }, { ques: <>=</>, evalue: '=' }]
]

const Keypad = (props) => {
    const screenShow = (e) => {
        props.question(e);
    }

    const normalPad = normalKeys.map((col, ind) => {
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
        <div className={style.keypad} >
            {normalPad}
        </div>
    )
}

export default Keypad;