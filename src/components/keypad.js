import { Fragment } from 'react';
import style from './keypad.module.css';
import Button from './button'

const Keypad = (props) => {
    const screenShow = ( event ) =>{
        props.question(event);
    }
    return (
        <Fragment >
            <div>
                <Button className={style.ordinary} screenShow = {screenShow}>7</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >8</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >9</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >DEL</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >AC</Button>
            </div>
            <div>
                <Button className={style.ordinary} screenShow = {screenShow} >4</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >5</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >6</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >&times;</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >&divide;</Button>
            </div>
            <div>
                <Button className={style.ordinary} screenShow = {screenShow} >1</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >2</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >3</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >+</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >-</Button>
            </div>
            <div>
                <Button className={style.ordinary} screenShow = {screenShow} >0</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >.</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >Exp</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >Ans</Button>
                <Button className={style.ordinary} screenShow = {screenShow} >=</Button>
            </div>
        </Fragment>
    )
}

export default Keypad;