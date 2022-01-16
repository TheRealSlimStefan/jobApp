import React, { useContext, useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [currentUserData, setCurrentUserData] = useState({});
    const [loading, setLoading] = useState(true);

    function register(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logOut() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                async function getUserData() {
                    const databaseQuery = query(
                        collection(db, "users"),
                        where("userId", "==", user.uid)
                    );
                    const querySnapshot = await getDocs(databaseQuery);
                    querySnapshot.forEach((doc) => {
                        setCurrentUserData(doc.data());
                    });
                }
                getUserData();
            } else {
                //jesli wyloguje sie to wyczyscic, możliwe że nie trzeba tego robić
            }

            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        currentUserData,
        login,
        register,
        logOut,
        resetPassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
