import "../styles/Chat.css";
import profileImg from "../images/default_image.png";

function Chats() {
    return (
        <li className="Chat">
            <img src={profileImg} className="profile_img" alt="profile"></img>
            <div>
                <p className="contact_name">IT.Corp</p>
                <p className="last_message">Dzień Dobry</p>
            </div>
        </li>
    );
}

export default Chats;
