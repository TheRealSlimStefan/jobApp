import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { useAuth } from "../contexts/AuthContext";
import profileImg from "../images/default_image.png";
import { db } from "../firebase";

function Profile() {
    let navigate = useNavigate();
    const { logOut } = useAuth();

    const [messages, setMessages] = useState();

    async function logOutUser() {
        await logOut();
        navigate("/login");
    }

    useEffect(() => {
        db.collection("messages")
            .orderBy("createdAt")
            .limit(50)
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()));
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
                    {messages.map(({ id, text, photoUrl }) => {
                        <div key={id}>
                            <img src={photoUrl} />
                            <p>{text}</p>
                        </div>;
                    })}
                </div>
            </div>
        </>
    );
}

export default Profile;
