import './TextContent.css'
const TextContent = ({ title, textContent }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{textContent}</p>
        </>
    )
}
export default TextContent