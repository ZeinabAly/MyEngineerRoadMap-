import { useState } from 'react'
import SkillItem from './SkillItem';
import {skillsData} from "../data/skills"
import { FaCaretDown, FaCaretUp } from "react-icons/fa";


type SkillProps = {
  checked: Record<string, boolean>
  toggle: (id: string) => void
}

const SkillCategory = ({checked, toggle}: SkillProps) => {

    const [data] = useState(skillsData);
    // const [checked, setChecked] = useState<Record<string, boolean>>({}) //checked skill array
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
        fondamentaux: true,
        web: false,
        mobile: false,
        devops: false,
        ia: false,
    })

    return(
        <div className='categoriesContent'>
            {
            Object.entries(data).map(([key, category]) => {
                const isOpen = expanded[key]
                // Nombre total de skills pour chaque categorie
                const totalSkills = category.skills.length
                // Nombre total de skills acquis filtré
                const acquiredSkills = category.skills.filter(
                    (skill) => checked[skill.id]
                ).length
                
                const hasOneSelectedElem = category.skills.filter(
                    (skill) => checked[skill.id]
                ).length >= 1

                const toggleSection = (key: string) => {
                    setExpanded((prev) => ({...prev, [key]: !prev[key]}))
                }

                return (
                    <div className='category' style={{ backgroundColor: "rgba(232,197,71,0.08)", borderColor: hasOneSelectedElem ? `${category.color}90` : category.border }}>
                        <div className="catHeader" onClick={() => toggleSection(key)} style={{ borderColor: hasOneSelectedElem ? `${category.color}90` : category.border, borderRadius : expanded[key] == true ? 0 :"10px" }}>
                            <div className="catTitle">
                                <p>{category.icon}</p>
                                <h3 className='label'>{category.label}</h3>
                            </div>
                            <div className="flex justify-end items-center gap-3 text-xs">
                                <div className="">{acquiredSkills} / {totalSkills}</div>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="skillRangeContent">
                                        <div className="skillRange" style={{height: "100%", width: `${(acquiredSkills/totalSkills) * 100}%`, background: category.color}}></div>
                                    </div>
                                    <div className="">
                                        {isOpen ? <FaCaretDown /> : <FaCaretUp /> }
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        {
                            isOpen && (
                                <div className="categorySkillsContent">
                                    {category.skills.map((item) => <SkillItem key={item.id} item={item} checked={!!checked[item.id]} onToggle={toggle} color={category.color} />)}
                                
                                    {/* BADGE */}
                                    {/* <div className="badgeContent">
                                        <div className='badge' style={{ backgroundColor: category.badge === "Important" ? "#fb2c36" : "#16a34a" }}>
                                            <p className="texte">{category.badge}</p>
                                        </div>
                                    </div> */}
                                </div>

                            )
                        }
                    </div>
                )
            })
            }
        </div>
    )


};

export default SkillCategory;