import React from 'react';
import '../styles/EditProfile.css';
import Select from 'react-select';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export default function EditProfile() {
    const workingHoursOptions = [
        { value: '1/1', label: 'Pełen etat' },
        { value: '3/4', label: '3/4 Etatu' },
        { value: '1/2', label: '1/2 Etatu' },
    ];
    const localiztionOptions = [
        { value: 'Podlaskie', label: 'Podlaskie' },
        { value: 'Białystok', label: 'Białystok' },
        { value: 'Warszawa', label: 'Warszawa' },
    ];
    const expirienceOptions = [
        { value: 'intern', label: 'Stażysta' },
        { value: 'junior', label: 'Junior' },
        { value: 'mid', label: 'Mid' },
        { value: 'senior', label: 'Senior' },
    ];
    const technologiesOptions = [
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'JS', label: 'JS' },
        { value: 'Java', label: 'Java' },
        { value: 'C#', label: 'C#' },
        { value: 'C++', label: 'C++' },
        { value: 'Git', label: 'Git' },
    ];
    const positionsOptions = [
        { value: 'programmer ', label: 'Programista' },
        { value: 'webDeveloper', label: 'Web Developer' },
        { value: 'devops', label: 'DevOps' },
        { value: 'frontendDeveloper', label: 'Front-end Developer' },
        { value: 'backendDeveloper', label: 'Back-end Developer' },
        { value: 'fullStackDeveloper', label: 'Full Stack Developer' },
    ];

    return (
        <div className="editProfile">
            <div className="container">
                <Link className="backBtn" to="/profile">
                    <AiOutlineArrowLeft />
                </Link>
                <form>
                    <div className="field">
                        <label for="aboutMe">O mnie:</label>
                        <textarea
                            type="text"
                            name="peas"
                            id="aboutMe"
                        ></textarea>
                    </div>
                    <div className="field">
                        <label for="aboutMe">Stanowisko</label>
                        <Select options={positionsOptions} isMulti />
                    </div>
                    <div className="field">
                        <label for="aboutMe">Technologie</label>
                        <Select options={technologiesOptions} isMulti />
                    </div>
                    <div className="field">
                        <label for="aboutMe">Doświadczenie</label>
                        <Select options={expirienceOptions} />
                    </div>
                    <div className="field">
                        <label for="aboutMe">Lokalizacja</label>
                        <Select options={localiztionOptions} />
                    </div>
                    <div className="field">
                        <label for="">Wymiar pracy</label>
                        <Select options={workingHoursOptions} />
                    </div>
                </form>
            </div>
        </div>
    );
}
