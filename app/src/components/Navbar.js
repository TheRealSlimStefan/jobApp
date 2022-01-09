import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../contexts/AuthContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
    const { currentUser } = useAuth();
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
    }, []);

    return location.pathname !== "/chats/chat" && currentUser ? (
        <div className="Navbar">
            <NavLink to="profile">
                <CgProfile />
            </NavLink>
            <NavLink to="search">
                <AiOutlineSearch />
            </NavLink>
            <NavLink to="chats">
                <BsChatDots />
            </NavLink>
        </div>
    ) : null;
}

export default Navbar;
