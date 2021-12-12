import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState({});

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            logged={logged}
                            user={user}
                            setLogged={setLogged}
                            setUser={setUser}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={<Login setLogged={setLogged} setUser={setUser} />}
                />
                <Route path="/register" element={<Register />} />
                {/*<Route path="/teams" element={<Teams />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/highlight/:id" element={<Highlight />} /> */}
                {/* <Route path="*" element={<ErrorPage />} />*/}
            </Routes>
        </Router>
    );
}

export default App;
