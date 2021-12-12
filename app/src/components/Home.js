import "../styles/Home.css";
import { useNavigate, Navigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

function Home({ logged, user, setUser, setLogged }) {
    let navigate = useNavigate();
    if (!logged) return <Navigate to="/login" />;

    return (
        <div>
            {logged ? (
                <div className="Home">
                    <p>{`Witaj ${user.name}`}</p>
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
            ) : null}
        </div>
    );
}

export default Home;
