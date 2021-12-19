import "../styles/Profile.css";
import { useNavigate, Navigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

function Profile({ logged, user, setUser, setLogged }) {
    let navigate = useNavigate();
    if (!logged) return <Navigate to="/login" />;

    return (
        <>
            <div className="Profile">
                <button
                    onClick={() => {
                        setUser({});
                        navigate("/");
                        setLogged(false);
                    }}
                >
                    <BiLogOut />
                </button>
            </div>
        </>
    );
}

export default Profile;
