import './styles.css';

type Props = {
    text: string
};

const Button = ({ text } : Props) => {
    return (
        <div className="btn-container">
            <button className="btn btn-primary btn-icon">
                <h6>{ text }</h6>
            </button>
        </div>
    )
};

export default Button;