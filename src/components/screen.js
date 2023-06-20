import style from './screen.module.css';

const Screen = ( props ) => {
    return (
        <div className={style.wrapper}>
        <div className= {style.ques}>{props.question}</div>
        <div className={style.ans}>{props.ans}</div>
        </div>
    )
}

export default Screen;