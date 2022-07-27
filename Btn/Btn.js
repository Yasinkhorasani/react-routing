import './Btn.css';

const Btn = props => {

    return (

        <button
            onClick={props.callback}
            className="Btn"
        >
            {props.content}
        </button>

    )

}

export default Btn;