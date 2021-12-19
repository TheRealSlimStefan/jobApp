import "../styles/Search.css";
import { Navigate } from "react-router-dom";

function Search({ logged, user }) {
    if (!logged) return <Navigate to="/login" />;

    return (
        <>
            {logged ? (
                <div className="Search">
                    <p>{`Witaj ${user.name}`}</p>
                </div>
            ) : null}
        </>
    );
}

export default Search;
