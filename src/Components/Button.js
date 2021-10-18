import "./Button.css"

const Button = ({ classButton, text, actionOnClick }) => {
    return <button className={classButton} onClick={actionOnClick} >{text}</button>
}

export default Button;