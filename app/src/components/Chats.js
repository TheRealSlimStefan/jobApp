import "../styles/Chats.css";
import { Navigate } from "react-router-dom";

function Chats({ logged }) {
    if (!logged) return <Navigate to="/login" />;

    return <div className="Chats"></div>;
}

export default Chats;
