import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
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
                <div></div>
            </div>
        </>
    );
}

export default Profile;
