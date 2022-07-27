import './Absatz.css';

const Absatz = props =>
    <div className="container Absatz">
        {props.content}
        <p className="count">{String(props.content).length} Zeichen</p>
    </div>

export default Absatz;