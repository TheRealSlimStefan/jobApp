import "../styles/Search.css";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Search({ logged, user }) {
    // if (!logged) return <Navigate to="/login" />;

    const { currentUser } = useAuth();

    return (
        <>
            <div className="Search">
                <p>{`Witaj ${currentUser.email}`}</p>
            </div>
        </>
    );
}

export default Search;
