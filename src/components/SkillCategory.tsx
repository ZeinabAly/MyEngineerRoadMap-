import React, { useState } from 'react'
import SkillItem from './SkillItem';
import {skillsData} from "../data/skills"


const SkillCategory = () => {

    const [data, setData] = useState(skillsData);
    const [checked, setChecked] = useState<Record<string, boolean>>({}) //checked skill array

    return(
        <div className='categoriesContent'>
            {
            Object.values(data).map((category) => {
                // Nombre total de skills pour chaque categorie
                const totalSkills = category.skills.length
                // Nombre total de skills acquis filtré
                const acquiredSkills = category.skills.filter(
                    (skill) => checked[skill.id]
                ).length
                // Toggle pour check un skill
                const toggle = (id: string) => {
                    setChecked(prev => ({...prev, [id]: !prev[id]}))
                }

                return (
                    <div className='category'>
                        <div className="catHeader">
                            <div className="catTitle">
                                <p>{category.icon}</p>
                                <h3 className='label'>{category.label}</h3>
                            </div>
                            <div className="flex justify-end items-center gap-3 text-xs">
                                <div className="">{acquiredSkills} / {totalSkills}</div>
                                <div className="skillRangeContent">
                                    <div className="skillRange" style={{height: "100%", width: `${(acquiredSkills/totalSkills) * 100}%`}}></div>
                                </div>
                            </div>
                        </div>
                        {category.skills.map((item) => <SkillItem key={item.id} item={item} checked={!!checked[item.id]} onToggle={toggle} />)}
                    </div>
                )
            })
            }
        </div>
    )


};

export default SkillCategory;