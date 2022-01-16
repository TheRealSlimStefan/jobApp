import "../styles/Chats.css";
import ChatLabel from "./ChatLabel";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import "../styles/Chat.css";
import { useAuth } from "../contexts/AuthContext";

function Chats() {
    const [chats, setChats] = useState([]);
    const { currentUser, currentUserData } = useAuth();

    useEffect(() => {
        setChats([]);

        let unsubscribe;

        async function getChats() {
            let databaseQuery;

            if (currentUser && currentUserData.accoutType === "employee") {
                databaseQuery = query(
                    collection(db, "chats"),
                    where("employeeId", "==", currentUser.uid)
                );
            } else {
                databaseQuery = query(
                    collection(db, "chats"),
                    where("employerId", "==", currentUser.uid)
                );
            }

            unsubscribe = onSnapshot(databaseQuery, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().employeeId === currentUser.uid) {
                        setChats((oldArray) => [
                            ...oldArray,
                            {
                                chatId: doc.id,
                                chatPartner: doc.data().employerId,
                                ...doc.data(),
                            },
                        ]);
                    } else {
                        setChats((oldArray) => [
                            ...oldArray,
                            {
                                chatId: doc.id,
                                chatPartner: doc.data().employeeId,
                                ...doc.data(),
                            },
                        ]);
                    }
                });
            });

            // const querySnapshot = await getDocs(databaseQuery);
            // querySnapshot.forEach((doc) => {
            //     setChats((oldArray) => [
            //         ...oldArray,
            //         { chatId: doc.id, ...doc.data() },
            //     ]);
            // });
        }

        getChats();

        return unsubscribe;

        //const messagesCollection = collection(db, "messages");

        // await getDocs(messagesCollection).then((snapshot) => {
        //     snapshot.docs.forEach((doc) => {
        //         console.log(doc.data());
        //         setMessages((oldArray) => [...oldArray, doc.data()]);
        //     });

        // console.log(
        //     snapshot.docs.forEach((doc) => {
        //         setMessages(...messages, { id: doc.id, ...doc.data() });
        //     })
        //     //_document.data.value.map.value.fields.text.stringValue
        // );
        //});
    }, []);

    return (
        <div className="Chats">
            <div className="chatsPanel">
                <h2>Wiadomości</h2>
                <div className="chatLabelsContainer">
                    {chats.length &&
                        chats.map((chat) => (
                            <ChatLabel
                                key={chat.chatId}
                                employeeId={chat.employeeId}
                                employerId={chat.employerId}
                                chatPartner={chat.chatPartner}
                                chatId={chat.chatId}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Chats;
