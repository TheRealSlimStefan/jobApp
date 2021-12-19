import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import { useState } from "react";

function App() {
    const [logged, setLogged] = useState(true);
    const [user, setUser] = useState({
        id: 87660,
        name: "Michał",
        surname: "Golonka",
        email: "19smarcins98@gmail.com",
        password: "12345",
        accountType: "employer",
        photos: [],
    });

    return (
        <div className="App">
            <Router>
                {logged && <Navbar />}
                <Routes>
                    <Route
                        path="/search"
                        element={<Search logged={logged} user={user} />}
                    />
                    <Route
                        path="/chats"
                        element={<Chats logged={logged} user={user} />}
                    />
                    <Route
                        path="/profile"
                        element={
                            <Profile
                                logged={logged}
                                user={user}
                                setUser={setUser}
                                setLogged={setLogged}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Login
                                logged={logged}
                                setLogged={setLogged}
                                setUser={setUser}
                            />
                        }
                    />
                    <Route
                        path="/register"
                        element={<Register logged={logged} />}
                    />
                    {/*<Route path="/teams" element={<Teams />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/highlight/:id" element={<Highlight />} /> */}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
