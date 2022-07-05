import './button.css'

const event = (props) => {
    alert(props.label)
}

const Button = (props) => {
    return (
        <button className="btn" onClick={() => event(props)}>Text transform</button>
    )
}
export default Button