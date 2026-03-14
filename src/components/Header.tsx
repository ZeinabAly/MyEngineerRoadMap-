import { useState, useEffect } from 'react';
import {skillsData} from "../data/skills"


type HeaderProps = {
  checked: Record<string, boolean>
}

const Header = ({checked}: HeaderProps) => {
    const [data] = useState(skillsData);

    // flatMap fusionne tous les tableaux de skills en un seul
    // Là on souhaite afficher le nombre total de competences toutes categories confondues
    const nbreTotal =  Object.values(data).flatMap((cat) => cat.skills).length;
    
    // L'ensemble des competences acquises
    const totalAcquiredSkills = Object.values(data).flatMap((cat) =>
        cat.skills.filter((skill) => checked[skill.id])
    ).length

    // PERSONNALISER LE SCROLL
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 80)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <header>
            <div className={`headerNormal ${isScrolled ? "hidden" : ""}`}>
                {/* TITRE CENTRE */}
                <div className="">
                    <p className='subtitle'>Roadmap personnelle</p>
                    <h1 className='title'>Ingénieur Logiciel</h1>
                    <p className='texte'>Les 50 Compétences à maîtriser</p>
                    
                </div>

                {/* Barre de progression  */}
                <div className="global-progress">
                    <div className="progressChill1">
                        <div className="progressLabelContent">
                            <div className="progressTextes">
                                <p>{totalAcquiredSkills} / {nbreTotal} Compétences</p>
                                {/* <p>Compétences</p> */}
                            </div>
                            <div className="">{Math.round((totalAcquiredSkills / nbreTotal) * 100)}%</div>
                        </div>
                        <div className="skillRangeContent">
                            <div className="skillRange" style={{height: "100%", width: `${(totalAcquiredSkills / nbreTotal) * 100}%`}}></div>
                        </div>
                    </div>
                    {/* <div className="progressChill2">
                        <p className='level-pill'>Intermediaire</p>
                    </div> */}
                </div>

                <div className="filters_legend">
                    <div className="filter_legend">
                        {/* FILTRES */}
                        <div className="filters">
                            <h3 className='stats-title'>Filtres</h3>
                            <div className="filtre_btns">
                                <button className="filter-btn active">Tous</button>
                                <button className="filter-btn">Essentiels</button>
                                <button className="filter-btn">Facultatifs</button>
                                <button className="filter-btn">Non acquis</button>
                            </div>
                        </div>

                        {/* Légende  */}
                        <div className="legend">
                            <h3 className="stats-title">Legende</h3>
                            <div className="legendItems">
                                <div className="legend-item">
                                    <div className="legend-dot" style={{borderColor:"#e8c547", background:"rgba(232,197,71,0.2)"}}></div>
                                    Essentiel
                                </div>
                                <div className="legend-item">
                                    <div className="legend-dot" style={{borderColor:"rgba(232,197,71,0.4)", background:"rgba(232,197,71,0.05)"}}></div>
                                    Important
                                </div>
                                <div className="legend-item">
                                    <div className="legend-dot" style={{borderColor:"rgba(232,197,71,0.15)", background: "transparent"}}></div>
                                    Facultatif
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* A AFFICHER AU SCROLL */}
            {/* <div className={`headerScroll ${isScrolled ? "visible opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-full pointer-events-none"}`}>
                <p className='subtitle'>Roadmap personnelle</p>
                <div className="global-progress">
                    <div className="progressChill1">
                        <div className="progressLabelContent">
                            <div className="progressTextes">
                                <p>{totalAcquiredSkills} / {nbreTotal} Compétences</p>
                                
                            </div>
                            <div className="">{Math.round((totalAcquiredSkills / nbreTotal) * 100)}%</div>
                        </div>
                        <div className="skillRangeContent">
                            <div className="skillRange" style={{height: "100%", width: `${(totalAcquiredSkills / nbreTotal) * 100}%`}}></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </header>
    );
};

export default Header;