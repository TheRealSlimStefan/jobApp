import "../styles/Register.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Error from "./Error";

function Register({ logged }) {
    let navigate = useNavigate();

    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [repeatedPassword, setRepeatedPassword] = useState("");
    let [accountType, setAccountType] = useState("employee");

    let [emptyNameField, setEmptyNameField] = useState(false);
    let [emptySurnameField, setEmptySurnameField] = useState(false);
    let [emptyEmailField, setEmptyEmailField] = useState(false);
    let [emptyPasswordField, setEmptyPasswordField] = useState(false);
    let [differentPasswords, setDifferentPasswords] = useState(false);

    function handleNameInput(e) {
        setEmptyNameField(false);
        setName(e.target.value);
    }

    function handleSurnameInput(e) {
        setEmptySurnameField(false);
        setSurname(e.target.value);
    }

    function handleEmailInput(e) {
        setEmail(e.target.value);
        setEmptyEmailField(false);
    }

    function handlePasswordInput(e) {
        setPassword(e.target.value);
        setEmptyPasswordField(false);
    }

    function handleRepeatedPasswordInput(e) {
        setRepeatedPassword(e.target.value);
        setDifferentPasswords(false);
    }

    function handleRadioButtonInput(e) {
        console.log(e.target.value);
        setAccountType(e.target.value);
    }

    function register() {
        setEmptyNameField(false);
        setEmptySurnameField(false);
        setEmptyEmailField(false);
        setEmptyPasswordField(false);
        setDifferentPasswords(false);

        if (name.length === 0) setEmptyNameField(true);
        else if (surname.length === 0) setEmptySurnameField(true);
        else if (email.length === 0) setEmptyEmailField(true);
        else if (password.length === 0) setEmptyPasswordField(true);
        else if (password !== repeatedPassword) setDifferentPasswords(true);
        else {
            axios
                .post("http://localhost:3001/register", {
                    name: name,
                    surname: surname,
                    email: email,
                    password: password,
                    accountType: "employee",
                })
                .then((response) => {
                    // console.log(response);
                    navigate("/");
                });
        }
    }

    console.log(logged);
    if (logged) return <Navigate to="/search" />;

    return (
        <div className="Register">
            <div className="registerPanel">
                <div className="inputContainer">
                    <input
                        placeholder="imie..."
                        value={name}
                        onChange={(e) => handleNameInput(e)}
                        type="text"
                    />
                </div>
                <div className="inputContainer">
                    <input
                        placeholder="nazwisko..."
                        value={surname}
                        onChange={(e) => handleSurnameInput(e)}
                        type="text"
                    />
                </div>
                <div className="inputContainer">
                    <input
                        placeholder="email..."
                        value={email}
                        onChange={(e) => handleEmailInput(e)}
                        type="email"
                    />
                </div>
                <div className="inputContainer">
                    <input
                        placeholder="hasło..."
                        value={password}
                        onChange={(e) => handlePasswordInput(e)}
                        type="password"
                    />
                </div>
                <div className="inputContainer">
                    <input
                        placeholder="powtórz hasło..."
                        value={repeatedPassword}
                        onChange={(e) => handleRepeatedPasswordInput(e)}
                        type="password"
                    />
                </div>
                <div className="checkboxesContainer">
                    <label htmlFor="employee">
                        <input
                            type="radio"
                            checked={accountType === "employee"}
                            value="employee"
                            onChange={handleRadioButtonInput}
                        />
                        Szukam pracy
                    </label>
                    <label htmlFor="employer">
                        <input
                            type="radio"
                            checked={accountType === "employer"}
                            value="employer"
                            onChange={handleRadioButtonInput}
                        />
                        Szukam pracownika
                    </label>
                </div>
                <Error
                    error={emptyNameField}
                    info={"Pole imie nie może być puste!"}
                />
                <Error
                    error={emptySurnameField}
                    info={"Pole nazwisko nie może być puste!"}
                />
                <Error
                    error={emptyEmailField}
                    info={"Pole email nie może być puste!"}
                />
                <Error
                    error={emptyPasswordField}
                    info={"Pole hasło nie może być puste!"}
                />
                <Error
                    error={differentPasswords}
                    info={"Hasła nie są takie same!"}
                />
                <div className="buttonsContainer">
                    <button
                        className="registerButton"
                        onClick={() => register()}
                    >
                        Zarejestruj się
                    </button>
                    <button
                        className="backButton"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Wróć
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
