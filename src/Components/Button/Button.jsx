import './Button.css'
const Button = ({textButton, Color}) => {
    function mouseEnter(event) {
        event.target.style.color = 'white'
    }
    function mouseLeave(event) {
        event.target.style.color = Color
    }

    return (
        <button className="button" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={{color: Color}}>{textButton}</button>
    )
}
export default Button