import './text.css'

const Text = (props) => {
    return (
        <h1 className="text" style={{ color: props.color }}>Texto to be transformed</h1>
    )
}

Text.defaultProps = {
    color: 'red'  
}

export default Text