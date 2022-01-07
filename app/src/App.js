import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState({});

    // id: 87660,
    //     name: "Michał",
    //     surname: "Golonka",
    //     email: "19smarcins98@gmail.com",
    //     password: "12345",
    //     accountType: "employer",
    //     photos: [],

    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route
                            path="/search"
                            element={
                                <PrivateRoute>
                                    <Search logged={logged} user={user} />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/chats"
                            element={
                                <PrivateRoute>
                                    <Chats logged={logged} user={user} />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute>
                                    <Profile
                                        logged={logged}
                                        user={user}
                                        setUser={setUser}
                                        setLogged={setLogged}
                                    />
                                </PrivateRoute>
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
                        <Route
                            path="/forgot-password"
                            element={<ForgotPassword />}
                        />
                        {/*<Route path="/statistics" element={<Statistics />} />
                <Route path="/highlight/:id" element={<Highlight />} /> */}
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                    <Navbar />
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
