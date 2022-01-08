import "../styles/ChatLabel.css";
import profileImg from "../images/default_image.png";
import { useNavigate } from "react-router-dom";

function ChatLabel() {
    let navigate = useNavigate();

    return (
        <div className="ChatLabel" onClick={() => navigate("/chats/chat/1")}>
            <div className="imageContainer">
                <img src={profileImg} className="profile_img" alt="profile" />
            </div>
            <div className="descriptionContainer">
                <p className="contact_name">IT.Corp</p>
                <p className="last_message">Dzień Dobry</p>
            </div>
        </div>
    );
}

export default ChatLabel;
