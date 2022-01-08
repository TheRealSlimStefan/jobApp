import "../styles/Search.css";
import { useAuth } from "../contexts/AuthContext";

function Search() {
    const { currentUser } = useAuth();

    return (
        <div className="Search">
            <p>{`Witaj ${currentUser.email}`}</p>
        </div>
    );
}

export default Search;
