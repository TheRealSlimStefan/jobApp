import "../styles/Error.css";

function Error({ error, info }) {
    return <div>{error ? <p className="Error">{info}</p> : null}</div>;
}

export default Error;
