import "../styles/Chats.css";
import { Navigate } from "react-router-dom";
import Chat from './Chat'

function Chats({ logged }) {
    if (!logged) return <Navigate to="/login" />;

    return (
        <div className="Chats">
            <h1>Wiadomości</h1>
            <ul className='chat_list'>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>

            </ul>
        </div>
    );
}

export default Chats;
