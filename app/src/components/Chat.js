import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import SendMessage from "./SendMessage";
import "../styles/Chat.css";
import { BsArrowLeftShort } from "react-icons/bs";

function Chat() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([]);

        const messagesCollection = collection(db, "messages");

        getDocs(messagesCollection).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                console.log(doc.data());
                setMessages((oldArray) => [...oldArray, doc.data()]);
            });

            // console.log(
            //     snapshot.docs.forEach((doc) => {
            //         setMessages(...messages, { id: doc.id, ...doc.data() });
            //     })
            //     //_document.data.value.map.value.fields.text.stringValue
            // );
        });
    }, []);

    return (
        <div className="Chat">
            <div className="chatNavigation">
                <div className="backButtonContainer">
                    <BsArrowLeftShort />
                </div>
                <div className="chatDescription">Krzysztof Bagiński</div>
            </div>

            <div className="messages">
                <div key={2} className={`msg sent`}>
                    <img
                        src={
                            "https://static.wikia.nocookie.net/trailerparkboys/images/6/63/Bubbles.jpg/revision/latest?cb=20111017154207"
                        }
                        alt=""
                    />
                    <p>{"Zrob mi kurwa louuuda"}</p>
                </div>
                <div key={3} className={`msg received`}>
                    <img
                        src={
                            "https://static.wikia.nocookie.net/trailerpark/images/9/9e/Rickys.shirts.16.jpg/revision/latest/top-crop/width/360/height/450?cb=20101222153211"
                        }
                        alt=""
                    />
                    <p>{"kurde faja buubles co ty gadasz"}</p>
                </div>
                <div key={2342} className={`msg sent`}>
                    <img
                        src={
                            "https://static.wikia.nocookie.net/trailerparkboys/images/6/63/Bubbles.jpg/revision/latest?cb=20111017154207"
                        }
                        alt=""
                    />
                    <p>{"Zrob mi kurwa louuuda"}</p>
                </div>
                <div key={3} className={`msg received`}>
                    <img
                        src={
                            "https://static.wikia.nocookie.net/trailerpark/images/9/9e/Rickys.shirts.16.jpg/revision/latest/top-crop/width/360/height/450?cb=20101222153211"
                        }
                        alt=""
                    />
                    <p>{"kurde faja buubles co ty gadasz"}</p>
                </div>
                <div key={324342} className={`msg sent`}>
                    <img
                        src={
                            "https://static.wikia.nocookie.net/trailerparkboys/images/6/63/Bubbles.jpg/revision/latest?cb=20111017154207"
                        }
                        alt=""
                    />
                    <p>{"Zrob mi kurwa louuuda"}</p>
                </div>
                <div key={34534} className={`msg received`}>
                    <img
                        src={
                            "https://static.wikia.nocookie.net/trailerpark/images/9/9e/Rickys.shirts.16.jpg/revision/latest/top-crop/width/360/height/450?cb=20101222153211"
                        }
                        alt=""
                    />
                    <p>{"kurde faja buubles co ty gadasz"}</p>
                </div>
                <div key={454352} className={`msg sent`}>
                    <img
                        src={
                            "https://static.wikia.nocookie.net/trailerparkboys/images/6/63/Bubbles.jpg/revision/latest?cb=20111017154207"
                        }
                        alt=""
                    />
                    <p>{"Zrob mi kurwa louuuda"}</p>
                </div>
                <div key={33545} className={`msg received`}>
                    <img
                        src={
                            "https://static.wikia.nocookie.net/trailerpark/images/9/9e/Rickys.shirts.16.jpg/revision/latest/top-crop/width/360/height/450?cb=20101222153211"
                        }
                        alt=""
                    />
                    <p>{"kurde faja buubles co ty gadasz"}</p>
                </div>
                <div key={221323} className={`msg sent`}>
                    <img
                        src={
                            "https://static.wikia.nocookie.net/trailerparkboys/images/6/63/Bubbles.jpg/revision/latest?cb=20111017154207"
                        }
                        alt=""
                    />
                    <p>{"Zrob mi kurwa louuuda"}</p>
                </div>
                <div key={123213} className={`msg received`}>
                    <img
                        src={
                            "https://static.wikia.nocookie.net/trailerpark/images/9/9e/Rickys.shirts.16.jpg/revision/latest/top-crop/width/360/height/450?cb=20101222153211"
                        }
                        alt=""
                    />
                    <p>{"kurde faja buubles co ty gadasz"}</p>
                </div>
                {/* <div>
                    {messages.length &&
                        messages.map((message) => (
                            <div>
                                <p>{message.text}</p>
                            </div>
                        ))}
                </div> */}
            </div>
            <SendMessage />
        </div>
    );
}

export default Chat;
