import "../styles/Profile.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useAuth } from "../contexts/AuthContext";
import profileImg from "../images/corpo_worker.png";
import { IoLocationSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";

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
                <div className="profileUp">
                    <button
                        className="logoutBtn"
                        onClick={() => {
                            logOutUser();
                        }}
                    >
                        <BiLogOut />
                    </button>
                    <button
                        className="settingsBtn"
                        onClick={() => navigate("/editprofile")}
                    >
                        <AiFillSetting />
                    </button>
                    <img
                        src={profileImg}
                        className="profileImg"
                        alt="profile"
                    ></img>
                </div>

                <div className="moreInfoContainer">
                    <div className="moreInfoElement">
                        <h2>O MNIE</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="moreInfoElement">
                        <h2>TECHNOLOGIE</h2>
                        <div className="technologiesContainer">
                            <div className="technology">React</div>
                            <div className="technology">Javascript</div>
                            <div className="technology">CSS</div>
                            <div className="technology">HTML</div>
                            <div className="technology">Java</div>
                            <div className="technology">Python</div>
                        </div>
                    </div>
                    <div className="moreInfoElement">
                        <h2>DOŚWIADCZENIE</h2>
                        <div className="skillLevelContainer">
                            <GiSkills /> <p>Junior</p>
                        </div>
                    </div>
                    <div className="moreInfoElement">
                        <h2>LOKALIZACJA</h2>
                        <div className="locationContainer">
                            <IoLocationSharp /> <p>Białystok</p>
                        </div>
                    </div>
                    <div className="moreInfoElement">
                        <h2>WYMIAR PRACY</h2>
                        <div className="hoursOfWorkContainer">
                            <MdWork /> <p>3/5 etatu</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
