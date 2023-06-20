import style from './keypad.module.css';
import Button from './button'

const Keypad = (props) => {
    const screenShow = ( event ) =>{
        props.question(event);
    }
    return (
        <div className = {style.keypad} >
            <div className = {style.column} >
                <Button screenShow = {screenShow}>7</Button>
                <Button screenShow = {screenShow} >4</Button>
                <Button screenShow = {screenShow} >1</Button>
                <Button screenShow = {screenShow} >0</Button>
            </div>
            <div className = {style.column} >
                <Button screenShow = {screenShow} >8</Button>
                <Button screenShow = {screenShow} >5</Button>
                <Button screenShow = {screenShow} >2</Button>
                <Button screenShow = {screenShow} >.</Button>
            </div>
            <div className = {style.column} >
                <Button screenShow = {screenShow} >9</Button>
                <Button screenShow = {screenShow} >6</Button>
                <Button screenShow = {screenShow} >3</Button>
                <Button screenShow = {screenShow} >Exp</Button>
            </div>
            <div className = {style.column} >
                <Button screenShow = {screenShow} >DEL</Button>
                <Button screenShow = {screenShow} >&times;</Button>
                <Button screenShow = {screenShow} >+</Button>
                <Button screenShow = {screenShow} >Ans</Button>
            </div>
            <div className = {style.column} >
                <Button screenShow = {screenShow} >AC</Button>
                <Button screenShow = {screenShow} >&divide;</Button>
                <Button screenShow = {screenShow} >-</Button>
                <Button screenShow = {screenShow} >=</Button>
            </div>
        </div>
    )
}

export default Keypad;