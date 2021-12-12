import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ setLogged, setUser }) {
    let navigate = useNavigate();

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function login() {
        axios
            .post("http://localhost:3001/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
                setLogged(true);
                navigate("/");
            });
    }

    return (
        <div className="Login">
            <div className="loginPanel">
                <div className="inputContainer">
                    <input
                        placeholder="email..."
                        value={email}
                        onChange={(e) => handleEmailChange(e)}
                        type="text"
                    />
                </div>
                <div className="inputContainer">
                    <input
                        placeholder="password..."
                        value={password}
                        onChange={(e) => handlePasswordChange(e)}
                        type="password"
                    />
                </div>
                <div className="buttonsContainer">
                    <button onClick={() => login()}>Zaloguj się</button>
                    <button
                        className="registerButton"
                        onClick={() => {
                            navigate("/register");
                        }}
                    >
                        Zarejestruj się
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
