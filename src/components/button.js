import style from "./button.module.css";

const Button = ( props ) => {
    const onClickHandler = ( event ) => {
        props.screenShow(props.children);
    }

    return (
        <button className = {`${style.buttons} ${props.className}` } onClick = {onClickHandler}>{props.children}</button>
    )
}

export default Button;