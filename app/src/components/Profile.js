import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { useAuth } from "../contexts/AuthContext";
import profileImg from "../images/default_image.png";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Profile() {
    let navigate = useNavigate();
    const { logOut } = useAuth();

    const [messages, setMessages] = useState([]);

    async function logOutUser() {
        //await logOut();
        //navigate("/login");
        console.log(messages);
    }

    useEffect(() => {
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
        <>
            <div className="Profile">
                <button
                    className="logout_btn"
                    onClick={() => {
                        // setUser({});
                        // navigate("/");
                        // setLogged(false);
                        logOutUser();
                    }}
                >
                    <BiLogOut />
                </button>

                <img
                    src={profileImg}
                    className="profile_img"
                    alt="profile"
                ></img>
                <a className="edit_profile_btn" onClick={() => {}} href="#">
                    <AiFillEdit />
                    <p>Edutuj profil</p>
                </a>
                <div>
                    {messages.length &&
                        messages.map((message) => (
                            <div>
                                <p>{message.text}</p>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Profile;
