import "../styles/ChatLabel.css";
import profileImg from "../images/default_image.png";
import { db } from "../firebase";
import React, { useState, useEffect } from "react";
import {
    collection,
    getDocs,
    query,
    where,
    onSnapshot,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function ChatLabel({ employeeId, employerId, chatId, chatPartner }) {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [messages, setMessages] = useState([]);

    function firstMessage() {
        let max = 0;
        let firstMessage;

        messages.forEach((message) => {
            if (message.date > max) {
                max = message.date;
                firstMessage = message.text;
            }
        });

        if (firstMessage.length > 25) {
            firstMessage = firstMessage.substring(0, 25) + "...";
        }

        return firstMessage;
    }

    useEffect(() => {
        let unsubscribe;
        setName("");
        setSurname("");
        setMessages([]);

        async function getName() {
            let databaseQuery = query(
                collection(db, "users"),
                where("userId", "==", chatPartner)
            );

            const queryResponse = await getDocs(databaseQuery);

            queryResponse.forEach((doc) => {
                setName(doc.data().name);
            });
        }

        async function getSurname() {
            let databaseQuery = query(
                collection(db, "users"),
                where("userId", "==", chatPartner)
            );

            const queryResponse = await getDocs(databaseQuery);

            queryResponse.forEach((doc) => {
                setSurname(doc.data().surname);
            });
        }

        async function getMessages() {
            let databaseQuery = query(
                collection(db, "messages"),
                where("chatId", "==", chatId)
            );

            unsubscribe = onSnapshot(databaseQuery, (queryResponse) => {
                setMessages([]);
                queryResponse.forEach((doc) => {
                    setMessages((oldArray) => [
                        ...oldArray,
                        {
                            ...doc.data(),
                        },
                    ]);
                });
            });
        }

        getName();
        getSurname();
        getMessages();
        return unsubscribe;
    }, []);

    return (
        <div
            className="ChatLabel"
            onClick={() =>
                navigate(`/chats/chat/${chatId}`, {
                    state: { chatId, chatPartner },
                })
            }
        >
            <div className="imageContainer">
                <img src={profileImg} className="profileImg" alt="profile" />
            </div>
            <div className="descriptionContainer">
                <p className="contactName">
                    {name} {surname}
                </p>
                <p className="lastMessage">
                    {messages.length > 0
                        ? firstMessage()
                        : "Przywitaj się z nową osobą!"}
                </p>
            </div>
        </div>
    );
}

export default ChatLabel;
