import React, { useState } from "react";
import "../styles/SendMessage.css";
import { GrSend } from "react-icons/gr";

function SendMessage() {
    const [message, setMessage] = useState("");

    function sendMessage() {
        console.log(message);
    }

    return (
        <div className="SendMessage">
            <div className="textAreaContainer">
                <textarea
                    placeholder="Message..."
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button onClick={sendMessage}>
                <GrSend />
            </button>
        </div>
    );
}

export default SendMessage;
