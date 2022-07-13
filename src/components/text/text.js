import './text.css'

const Text = (props) => {
    return <h1 className="text" style={{color: props.color}}>{props.title.toUpperCase()}</h1>
}

export default Text