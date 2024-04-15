import './Card.css'
const Card = ({children, backgroundColor}) => {
    return (
        <div style={{backgroundColor: backgroundColor}} className="card-container">
            {children}
        </div>
    )
}
export default Card