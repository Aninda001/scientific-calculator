import style from './keypad.module.css';
import Button from './button'

const normalKeys = [
    [{ ques: <>7</>, view : <>7</>, evalue: '7' }, { ques: <>4</>, view : <>4</>, evalue: '4' }, { ques: <>1</>, view : <>1</>, evalue: '1' }, { ques: <>0</>, view : <>0</>, evalue: '0' }],
    [{ ques: <>8</>, view : <>8</>, evalue: '8' }, { ques: <>5</>, view : <>5</>, evalue: '5' }, { ques: <>2</>, view : <>2</>, evalue: '2' }, { ques: <>.</>, view : <>.</>, evalue: '.' }],
    [{ ques: <>9</>, view : <>9</>, evalue: '9' }, { ques: <>6</>, view : <>6</>, evalue: '6' }, { ques: <>3</>, view : <>3</>, evalue: '3' }, { ques: <>Exp&#40;</>, view : <>&times;e^&#40;</>, evalue: '*e^(' }],
    [{ ques: <>DEL</>, view : <></>, evalue: 'DEL' }, { ques: <>&times;</>, view : <>&times;</>, evalue: '*' }, { ques: <>+</>, view : <>+</>, evalue: '+' }, { ques: <>Ans</>, view : <>Ans</>, evalue: 'Ans' }],
    [{ ques: <>AC</>, view : <></>, evalue: 'AC' }, { ques: <>&divide;</>, view : <>&divide;</>, evalue: '/' }, { ques: <>-</>, view : <>-</>, evalue: '-' }, { ques: <>=</>, view : <>=</>, evalue: '=' }]
]

const specialKeys = [
    [{ ques :<>&#40;</>, view : <>&#40;</>, evalue : '('}, { ques : <>&#41;</>, view : <>&#41;</>, evalue : ')' }, { ques : <>e</>, view : <>e</>, evalue : '(e)'}, { ques : <>&pi;</>, view :<>&pi;</>, evalue : '(pi)' }],
    [{ ques :<>abs&#40;</>, view : <>abs&#40;</>, evalue : 'abs('}, { ques : <>sin&#40;</>, view : <>sin&#40;</>, evalue : 'sin(' }, { ques : <>cos&#40;</>, view : <>cos&#40;</>, evalue : 'cos('}, { ques : <>tan&#40;</>, view : <>tan&#40;</>, evalue : 'tan(' }],
    [{ ques :<>^&#40;</>, view : <>^&#40;</>, evalue : '^('}, { ques : <>log10&#40;</>, view : <>log<sub>10</sub>&#40;</>, evalue : 'log10(' }, { ques : <>ln&#40;</>, view : <>ln&#40;</>, evalue : 'log('}, { ques : <>&times;10&#40;</>, view : <>&times;10&#40;</>, evalue : '*10^(' }],
    [{ ques :<>&#44;</>, view : <>&#44;</>, evalue : ','}, { ques : <>log&#40;x&#44;base&#41;</>, view : <>log&#40;</>, evalue : 'log(' }, { ques : <><sup>n</sup>C<sub>r</sub>&#40;n&#44;r&#41;</>, view : <>C&#40;</>, evalue : 'combinations('}, { ques : <><sup>n</sup>P<sub>r</sub>&#40;n&#44;r&#41;</>, view : <>P&#40;</>, evalue : 'permutations(' }],
    [{ ques :<>x&#33;</>, view : <>&Pi;&#40;</>, evalue : 'factorial('}, { ques : <>sinh&#40;</>, view : <>sinh&#40;</>, evalue : 'sinh(' }, { ques : <>cosh&#40;</>, view : <>cosh&#40;</>, evalue : 'cosh('}, { ques : <>tanh&#40;</>, view : <>tanh&#40;</>, evalue : 'tanh(' }]
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