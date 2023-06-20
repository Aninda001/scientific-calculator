import style from "./button.module.css";

const Button = ( props ) => {
    return (
        <button className = {`${style.buttons} ${props.className}` }>{props.children}</button>
    )
}

export default Button;