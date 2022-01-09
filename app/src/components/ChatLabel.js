import "../styles/ChatLabel.css";
import profileImg from "../images/default_image.png";
import { useNavigate } from "react-router-dom";

function ChatLabel() {
    let navigate = useNavigate();

    return (
        <div className="ChatLabel" onClick={() => navigate("/chats/chat")}>
            <div className="imageContainer">
                <img src={profileImg} className="profileImg" alt="profile" />
            </div>
            <div className="descriptionContainer">
                <p className="contactName">Krystian Bagiński</p>
                <p className="lastMessage">Dzień Dobry. Piszę w sprawie...</p>
            </div>
        </div>
    );
}

export default ChatLabel;
