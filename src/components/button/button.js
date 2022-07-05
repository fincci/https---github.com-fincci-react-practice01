import './button.css'
import Text from '../text/text';

const changeCase = (Text) => {
    console.log(Text);
}

const Button = () => {
    return (
        <button className="btn" onClick={() => changeCase(Text)}>Text transform</button>
    )
}
export default Button