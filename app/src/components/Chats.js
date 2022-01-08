import "../styles/Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="Chats">
            <h1>Wiadomości</h1>
            <ul className="chat_list">
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </ul>
        </div>
    );
}

export default Chats;
