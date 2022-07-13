import './button.css'

const alertLabel = (props) => {
    alert(props.label)
}

const Button = (props) => {
    return (
        <button className="btn" onClick={() => alertLabel(props)}>Text transform</button>
    )
}
export default Button