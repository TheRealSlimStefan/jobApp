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
        { value: "1/1 Etatu", label: "Pełen etat" },
        { value: "1/2 Etatu", label: "1/2 Etatu" },
        { value: "3/4 Etatu", label: "3/4 Etatu" },
    ];
    const localiztionOptions = [
        { value: "Białystok", label: "Białystok" },
        { value: "Bydgoszcz", label: "Bydgoszcz" },
        { value: "Gdańsk", label: "Gdańsk" },
        { value: "Kraków", label: "Kraków" },
        { value: "Lublin", label: "Lublin" },
        { value: "Łódź", label: "Łódź" },
        { value: "Poznań", label: "Poznań" },
        { value: "Szczecin", label: "Szczecin" },
        { value: "Wrocław", label: "Wrocław" },
        { value: "Warszawa", label: "Warszawa" },
    ];
    const expirienceOptions = [
        { value: "Intern", label: "Stażysta" },
        { value: "Junior", label: "Junior" },
        { value: "Mid", label: "Mid" },
        { value: "Senior", label: "Senior" },
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
    const occupationOptions = [
        { value: "Programista", label: "Programista" },
        { value: "Software Developer", label: "Software Developer" },
        { value: "Software Engineer", label: "Software Engineer" },
        { value: "Web Developer", label: "Web Developer" },
        { value: "DevOps Developer", label: "DevOps Developer" },
        { value: "Front-end Developer", label: "Front-end Developer" },
        { value: "Back-end Developer", label: "Back-end Developer" },
        { value: "Full Stack Developer", label: "Full Stack Developer" },
        { value: "Software Architect", label: "Software Architect" },
    ];

    const { currentUser } = useAuth();

    // const [profileData, setProfileData] = useState({});
    const [description, setDescription] = useState("");
    const [localization, setLocalization] = useState("");
    const [workingHours, setWorkingHours] = useState("");
    const [experience, setExperience] = useState("");
    const [occupation, setOccupation] = useState([]);
    const [technologies, setTechnologies] = useState([]);

    // Invoking all update functions on click ApplyBnt
    const updateProfile = (id) => {
        updateTechnologies(id, technologies);
        updateOccupation(id, occupation);
        updateLocation(id, localization);
        updateWorkingHours(id, workingHours);
        updateExperience(id, experience);
        updateDescription(id, description);
    };

    const updateOccupation = async (id, occupation) => {
        if (occupation !== "") {
            const profileDoc = doc(db, "users", id);
            const newFields = { occupation: occupation };
            await updateDoc(profileDoc, newFields);
        }
    };

    const updateTechnologies = async (id, technologies) => {
        if (technologies.length !== 0) {
            const technologiesValues = technologies.map((el) => el.value);
            const profileDoc = doc(db, "users", id);
            const newFields = { technologies: technologiesValues };
            await updateDoc(profileDoc, newFields);
        }
    };

    const updateDescription = async (id, description) => {
        if (description !== "") {
            const profileDoc = doc(db, "users", id);
            const newFields = { description: description };
            await updateDoc(profileDoc, newFields);
        }
    };

    const updateExperience = async (id, experience) => {
        if (experience !== "") {
            const profileDoc = doc(db, "users", id);
            const newFields = { experience: experience };
            await updateDoc(profileDoc, newFields);
        }
    };

    const updateLocation = async (id, localization) => {
        if (localization !== "") {
            const profileDoc = doc(db, "users", id);
            const newFields = { localization: localization };
            await updateDoc(profileDoc, newFields);
        }
    };
    const updateWorkingHours = async (id, workingHours) => {
        if (workingHours !== "") {
            const profileDoc = doc(db, "users", id);
            const newFields = { workingHours: workingHours };
            await updateDoc(profileDoc, newFields);
        }
    };

    // useEffect(() => {
    //     async function getProfileData() {
    //         const queryResponse = await getDoc(
    //             doc(db, "users", currentUser.uid)
    //         );
    //         setProfileData(queryResponse.data());
    //         console.log(queryResponse.data());
    //     }

    //     getProfileData();
    // }, []);

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
                            options={occupationOptions}
                            onChange={(e) => setOccupation(e.value)}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="aboutMe">TECHNOLOGIE</label>
                        <Select
                            options={technologiesOptions}
                            isMulti
                            onChange={(e) => setTechnologies([...e])}
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
