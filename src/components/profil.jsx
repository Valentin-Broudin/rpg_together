import { useState } from 'react';
import "./profil.css";
import arrowLeft from "../assets/icons8-left-arrow-100.png";


const Profil = () => {

    const [activeProfile, setActiveProfile] = useState(true);
    const [activePerso, setActivePerso] = useState(false);
    const [activeAmi, setActiveAmi] = useState(false);
    const [activeParameter, setActiveParameter] = useState(false);

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
        </section>
    )
}



export default Profil;