import { useState } from 'react';
import {skillsData} from "../data/skills"


type HeaderProps = {
  checked: Record<string, boolean>
}

const Header = ({checked}: HeaderProps) => {
    const [data, setData] = useState(skillsData);

    // flatMap fusionne tous les tableaux de skills en un seul
    // Là on souhaite afficher le nombre total de competences toutes categories confondues
    const nbreTotal =  Object.values(data).flatMap((cat) => cat.skills).length;
    
    // L'ensemble des competences acquises
    const totalAcquiredSkills = Object.values(data).flatMap((cat) =>
        cat.skills.filter((skill) => checked[skill.id])
    ).length


    return (
        <header>
            <div className="">
                <p className='subtitle'>Roadmap</p>
                <h1 className='title'>Ingénieur Logiciel</h1>
                <p className='texte'>Les 50 Compétences à maîtriser</p>
                
            </div>

            <div className="my-5">
                <div className="flex justify-between items-center gap-3 text-xs">
                    <div className="text-xs flex gap-2 text-gray-300">
                        <p>{totalAcquiredSkills} / {nbreTotal}</p>
                        <p>Compétences</p>
                    </div>
                    <div className="">{Math.round((totalAcquiredSkills / nbreTotal) * 100)}%</div>
                </div>
                <div className="skillRangeContent">
                    <div className="skillRange" style={{height: "100%", width: `${(totalAcquiredSkills / nbreTotal) * 100}%`}}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;