import "../styles/Chats.css";
import ChatLabel from "./ChatLabel";

function Chats() {
    return (
        <div className="Chats">
            <div className="chatsPanel">
                <h2>Wiadomości</h2>
                <div className="chatLabelsContainer">
                    <ChatLabel />
                    {/* <ChatLabel />
                    <ChatLabel />
                    <ChatLabel />
                    <ChatLabel />
                    <ChatLabel />
                    <ChatLabel />
                    <ChatLabel />
                    <ChatLabel />
                    <ChatLabel />
                    <ChatLabel />
                    <ChatLabel />
                    <ChatLabel />
                    <ChatLabel />
                    <ChatLabel /> */}
                </div>
            </div>
        </div>
    );
}

export default Chats;
