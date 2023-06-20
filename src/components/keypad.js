import { Fragment } from 'react';
import style from './keypad.module.css';
import Button from './button'

const Keypad = (props) => {
    return (
        <Fragment >
            <div>
                <Button className = {style.ordinary}>7</Button>
                <Button className = {style.ordinary}>8</Button>
                <Button className = {style.ordinary}>9</Button>
                <Button className = {style.ordinary}>DEL</Button>
                <Button className = {style.ordinary}>AC</Button>
            </div>
            <div>
                <Button className = {style.ordinary}>4</Button>
                <Button className = {style.ordinary}>5</Button>
                <Button className = {style.ordinary}>6</Button>
                <Button className = {style.ordinary}>&times;</Button>
                <Button className = {style.ordinary}>&divide;</Button>
            </div>
            <div>
                <Button className = {style.ordinary}>1</Button>
                <Button className = {style.ordinary}>2</Button>
                <Button className = {style.ordinary}>3</Button>
                <Button className = {style.ordinary}>+</Button>
                <Button className = {style.ordinary}>-</Button>
            </div>
            <div>
                <Button className = {style.ordinary}>0</Button>
                <Button className = {style.ordinary}>.</Button>
                <Button className = {style.ordinary}>Exp</Button>
                <Button className = {style.ordinary}>Ans</Button>
                <Button className = {style.ordinary}>=</Button>
            </div>
        </Fragment>
    )
}

export default Keypad;