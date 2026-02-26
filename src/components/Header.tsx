import { useState } from 'react';
import {skillsData} from "../data/skills"

const Header = () => {
    const [data, setData] = useState(skillsData);
    // flatMap fusionne tous les tableaux de skills en un seul
    const nbreTotal =  Object.values(data).flatMap((cat) => cat.skills).length;
    

    return (
        <header>
            <div className="">
                <p className='subtitle'>Roadmap</p>
                <h1 className='title'>Ingénieur Logiciel</h1>
            </div>
            <div className="">
                <div className="flex justify-between items-center gap-3 text-xs">
                    <div className="text-xs flex gap-2 text-gray-300">
                        <p>0 / {nbreTotal}</p>
                        <p>Compétences</p>
                    </div>
                    <div className="">{nbreTotal}%</div>
                </div>
                <div className="skillRangeContent">
                    <div className="skillRange" style={{height: "100%", width: "50%"}}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;