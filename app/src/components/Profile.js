import "../styles/Profile.css";
import { useNavigate, Navigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import profileImg from '../images/default_image.png'

function Profile({ logged, setUser, setLogged }) {
    let navigate = useNavigate();
    if (!logged) return <Navigate to="/login" />;

    return (
        <>

            <div className="Profile">
                <button 
                    className='logout_btn'
                    onClick={() => {
                        setUser({});
                        navigate("/");
                        setLogged(false);
                    }}
                    >
                    <BiLogOut/>
                </button>

                <img src={profileImg} className='profile_img' alt='profile'></img>
                <a className='edit_profile_btn' onClick={() => {}} href='#'>
                    <AiFillEdit/>
                    <p>Edutuj profil</p>
                </a>
                <div>

                </div>
            </div>
        </>
    );
}

export default Profile;
