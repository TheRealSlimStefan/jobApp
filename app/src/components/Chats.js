import "../styles/Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="Chats">
            <h1>Wiadomości</h1>
            <ul className="chatList">
                <Chat />

            </ul>
        </div>
    );
}

export default Chats;
