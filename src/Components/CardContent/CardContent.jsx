import Button from "../Button/Button"
import TextContent from "../TextContent/TextContent"
import './CardContent.css'

const Card = ({ src, title, textContent}) => {
    return (
        <div className="card-content">
            <img src={'../../images/' + src} alt="" />
            <TextContent title={title} textContent={textContent} />
        </div>
    )
}
export default Card