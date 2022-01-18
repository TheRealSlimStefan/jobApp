import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

import "../styles/EditProfile.css";
import Select from "react-select";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function EditProfile() {
    // Selector options
    const workingHoursOptions = [
        { value: "1/1", label: "Pełen etat" },
        { value: "1/2", label: "1/2 Etatu" },
        { value: "3/4", label: "3/4 Etatu" },
    ];
    const localiztionOptions = [
        { value: "Podlaskie", label: "Podlaskie" },
        { value: "Białystok", label: "Białystok" },
        { value: "Warszawa", label: "Warszawa" },
    ];
    const expirienceOptions = [
        { value: "intern", label: "Stażysta" },
        { value: "junior", label: "Junior" },
        { value: "mid", label: "Mid" },
        { value: "senior", label: "Senior" },
    ];
    const technologiesOptions = [
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "JS", label: "JS" },
        { value: "Java", label: "Java" },
        { value: "C#", label: "C#" },
        { value: "C++", label: "C++" },
        { value: "Git", label: "Git" },
    ];
    const positionsOptions = [
        { value: "programmer ", label: "Programista" },
        { value: "webDeveloper", label: "Web Developer" },
        { value: "devops", label: "DevOps" },
        { value: "frontendDeveloper", label: "Front-end Developer" },
        { value: "backendDeveloper", label: "Back-end Developer" },
        { value: "fullStackDeveloper", label: "Full Stack Developer" },
    ];

    const { currentUser } = useAuth();

    const [profileData, setProfileData] = useState({});
    const [description, setDescription] = useState("");
    const [localization, setLocalization] = useState("");
    const [workingHours, setWorkingHours] = useState("");
    const [experience, setExperience] = useState("");
    const [occupation, setOccupation] = useState([]);
    const [technology, setTechnology] = useState([]);

    // Invoking all update functions on click ApplyBnt
    const updateProfile = (id) => {
        updateTechnology(id, technology);
        updateOccupation(id, occupation);
        updateLocation(id, localization);
        updateWorkingHours(id, workingHours);
        updateExperience(id, experience);
        updateDescription(id, description);
    };

    const updateOccupation = async (id, occupation) => {
        const occupationValues = occupation.map((el) => el.value);
        const profileDoc = doc(db, "users", id);
        const newFields = { occupation: occupationValues };
        await updateDoc(profileDoc, newFields);
    };

    const updateTechnology = async (id, technology) => {
        const technologyValues = technology.map((el) => el.value);
        const profileDoc = doc(db, "users", id);
        const newFields = { technology: technologyValues };
        await updateDoc(profileDoc, newFields);
    };

    const updateDescription = async (id, description) => {
        const profileDoc = doc(db, "users", id);
        const newFields = { description: description };
        await updateDoc(profileDoc, newFields);
    };

    const updateExperience = async (id, experience) => {
        const profileDoc = doc(db, "users", id);
        const newFields = { experience: experience };
        await updateDoc(profileDoc, newFields);
    };

    const updateLocation = async (id, localization) => {
        const profileDoc = doc(db, "users", id);
        const newFields = { localization: localization };
        await updateDoc(profileDoc, newFields);
    };
    const updateWorkingHours = async (id, workingHours) => {
        const profileDoc = doc(db, "users", id);
        const newFields = { workingHours: workingHours };
        await updateDoc(profileDoc, newFields);
    };

    useEffect(() => {
        async function getProfileData() {
            const queryResponse = await getDoc(
                doc(db, "users", currentUser.uid)
            );
            setProfileData(queryResponse.data());
        }

        getProfileData();
        // console.log(profileData);
    }, []);

    return (
        <div className="editProfile">
            <div className="container">
                <div className="buttonContainer">
                    <Link className="backBtn" to="/profile">
                        <AiOutlineArrowLeft />
                    </Link>
                </div>
                <form>
                    <div className="field">
                        <label htmlFor="aboutMe">O MNIE</label>
                        <textarea
                            type="text"
                            name="peas"
                            id="aboutMe"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        ></textarea>
                    </div>
                    <div className="field">
                        <label htmlFor="aboutMe">STANOWISKO</label>
                        <Select
                            options={positionsOptions}
                            isMulti
                            onChange={(e) => setOccupation([...e])}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="aboutMe">TECHNOLOGIE</label>
                        <Select
                            options={technologiesOptions}
                            isMulti
                            onChange={(e) => setTechnology([...e])}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="aboutMe">DOŚWIADCZENIE</label>
                        <Select
                            options={expirienceOptions}
                            onChange={(e) => {
                                setExperience(e.value);
                            }}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="aboutMe">LOKALIZACJA</label>
                        <Select
                            options={localiztionOptions}
                            onChange={(e) => {
                                setLocalization(e.value);
                            }}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="">WYMIAR PRACY</label>
                        <Select
                            options={workingHoursOptions}
                            onChange={(e) => {
                                setWorkingHours(e.value);
                            }}
                        />
                    </div>
                </form>
                <div className="applyBtnContainer">
                    <button
                        className="applyBtn"
                        onClick={() => {
                            updateProfile(currentUser.uid);
                        }}
                    >
                        Zapisz zmiany
                    </button>
                </div>
            </div>
        </div>
    );
}
