import "../styles/Profile.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai"
import { AiFillEdit } from "react-icons/ai";
import { useAuth } from "../contexts/AuthContext";
import profileImg from "../images/default_image.png";

function Profile() {
    let navigate = useNavigate();
    const { logOut } = useAuth();

    async function logOutUser() {
        await logOut();
        navigate("/login");
    }

    return (
        <>
            <div className="profile">
                <button
                    className="logoutBtn"
                    onClick={() => {
                        // setUser({});
                        // navigate("/");
                        // setLogged(false);
                        logOutUser();
                    }}
                >
                    <BiLogOut />
                </button>
                <button className="settingsBtn">
                    <AiFillSetting/>
                </button>
                <img
                    src={profileImg}
                    className="profileImg"
                    alt="profile"
                ></img>
                <Link to="/editprofile" className="edit_profile_btn" onClick={() => {}} href="#">
                    <AiFillEdit />
                    <p>Edutuj profil</p>
                </Link>

                <div className="profileInfo">
                    <div className="info">
                        <p className="label">O mnie</p>
                        <p className="content">
                        Strasznie wczoraj zachlałem. Paliłem blanty do piątej rano. Film mi się urwał jak leżałem w rurze. Teraz mnie krzyż napierdala. Trochę się przespałem, ale musiałem wstać rano bo mam obowiązki. Mam dziecko. Niektórzy mówią, że nie można chlać jak się ma dzieci, ale to nie prawda. Można, tylko trzeba wstawać rano. Na tym polega odpowiedzialność.
                        </p>
                    </div>
                    <div className="info">
                        <p className="label">Stanowisko</p>
                        <p className="content">React Native specialist</p>
                    </div>
                    <div className="info">
                        <p className="label">Technologie</p>
                        <p className="content">HTML CSS</p>
                    </div>
                    <div className="info">
                        <p className="label">Doświadczenie</p>
                        <p className="content">Junior</p>
                    </div>
                    <div className="info">
                        <p className="label">Lokalizacja</p>
                        <p className="content">Bialystok</p>
                    </div>
                    <div className="info">
                        <p className="label">Wymiar pracy</p>
                        <p className="content">3/5 etatu</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
