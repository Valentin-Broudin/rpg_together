import { useState } from 'react';
import "./Profil.css";
import arrowLeft from "../assets/icons8-left-arrow-100.png";



const Profil = () => {

    const [activeProfile, setActiveProfile] = useState(true);
    const [activePerso, setActivePerso] = useState(false);
    const [activeAmi, setActiveAmi] = useState(false);
    const [activeParameter, setActiveParameter] = useState(false);
    const [sliderValue, setSliderValue] = useState(50);
    const [backgroundColor, setBackgroundColor] = useState("");

    const updateActiveProfile = () => {
        setActiveProfile(!activeProfile);
        setActivePerso();
        setActiveAmi();
        setActiveParameter();
    }

    const updateActivePerso = () => {
        setActivePerso(!activePerso);
        setActiveProfile();
        setActiveAmi();
        setActiveParameter();
    }

    const updateActiveAmi = () => {
        setActiveAmi(!activeAmi);
        setActiveProfile();
        setActivePerso();
        setActiveParameter();
    }

    const updateActiveParameter = () => {
        setActiveParameter(!activeParameter);
        setActiveProfile();
        setActiveAmi();
        setActivePerso();
    }

    const updateSliderValue = (event) => {
        setSliderValue(event.target.value);
    }

    const updapteBackgroundColor = (event) => {
        setBackgroundColor(event.target.id);
    }

    return (
        <section className="allProfil">
            <div className="left-menu">
                {activeProfile ? <div className="btn-left-menu active" onClick={() => updateActiveProfile()}>Informations Personnelles</div> : <div className="btn-left-menu not-active" onClick={() => updateActiveProfile()}>Informations Personnelles</div>}
                {activePerso ? <div className="btn-left-menu active" onClick={() => updateActivePerso()}>Personnages</div> : <div className="btn-left-menu not-active" onClick={() => updateActivePerso()}>Personnages</div>}
                {activeAmi ? <div className="btn-left-menu active" onClick={() => updateActiveAmi()}>Amis</div> : <div className="btn-left-menu not-active" onClick={() => updateActiveAmi()}>Amis</div>}
                {activeParameter ? <div className="btn-left-menu active" onClick={() => updateActiveParameter()}>Paramètres</div> : <div className="btn-left-menu not-active" onClick={() => updateActiveParameter()}>Paramètres</div>}
                <img src={arrowLeft} alt="macouille" className="arrowLeft" />
            </div>
            {activeProfile ? 
                <section className="profile-active">
                    <div className="profile-top">
                        <img src="ok" alt="profile" className="profile-img" />
                        <div className="profile-header">
                            <div>Pseudo</div>
                            <div>Date d'inscription</div>
                        </div>
                    </div>
                    <div className="profile-bio">
                        <div className="profile-bio-numbers">
                            <div>Total de personnages:</div>
                            <div>Personnages vivants:</div>
                            <div>Personnages morts:</div>
                            <div>Sessions finies:</div>
                        </div>
                        <div className="profile-bio-text">Bio</div>
                    </div>
                </section> 
            : <></>}
            {activePerso ? 
                <section className="perso-active">
                    <div className="perso-title">Liste de mes personnages</div>
                    <div className="perso-cards">
                        {/* composant pour afficher les cartes de personnages (to do) */}
                    </div>
                </section> 
            : <></>}
            {activeAmi ? 
                <section className="ami-active">
                    <div className="ami-searchbar">
                        {/* à remplacer avec un composant searchbar */}
                        <p>Rechercher quelqu'un:</p>
                    </div>
                    <div className="ami-list">
                        {/* composant pour afficher les amis de l'utilisateur (to do) */}
                    </div>
                </section> 
            : <></>}
            {activeParameter ? 
                <section className="param-active">
                    <div className="param-option">
                        <div className="param-label">Volume musique:</div>
                        <input type="range" min="0" max="100" value={sliderValue} className="param-slider" onChange={(event) => updateSliderValue(event)} />
                    </div>
                    <div className="param-option">
                        <div className="param-label">Thème:</div>
                        <div className="param-colors">
                            <div className="param-color-choice red" id="red" onClick={(event) => updapteBackgroundColor(event)} />
                            <div className="param-color-choice light-blue" id="light-blue" onClick={(event) => updapteBackgroundColor(event)} />
                            <div className="param-color-choice lime" id="lime" onClick={(event) => updapteBackgroundColor(event)} />
                            <div className="param-color-choice purple" id="purple" onClick={(event) => updapteBackgroundColor(event)} />
                            <div className="param-color-choice yellow" id="yellow" onClick={(event) => updapteBackgroundColor(event)} />
                            <div className="param-color-choice turquoize" id="turquoize" onClick={(event) => updapteBackgroundColor(event)} />
                        </div>
                    </div>
                </section> 
            : <></>}
        </section>
    )
}



export default Profil;