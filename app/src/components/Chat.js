import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'

import SendMessage from './SendMessage';

import "../styles/Chat.css";
import profileImg from "../images/default_image.png";

function Chat() {
    const scroll = useRef();
    const [messages, setMessages] = useState([])
    // useEffect(() => {
    //     db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
    //         setMessages(snapshot.docs.map(doc => doc.data()))
    //     })
    // }, []);



    return (
        <>
            <div className="msgs">
                        {/* <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div> */}
                        <div key={2} className={`msg sent`}>
                            <img src={'https://static.wikia.nocookie.net/trailerparkboys/images/6/63/Bubbles.jpg/revision/latest?cb=20111017154207'} alt="" />
                            <p>{'Zrob mi kurwa louuuda'}</p>
                        </div>
                        <div key={3} className={`msg received`}>
                            <img src={'https://static.wikia.nocookie.net/trailerpark/images/9/9e/Rickys.shirts.16.jpg/revision/latest/top-crop/width/360/height/450?cb=20101222153211'} alt="" />
                            <p>{'kurde faja buubles co ty gadasz'}</p>
                        </div>

            
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </>
    )
}

export default Chat;