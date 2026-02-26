import {skillsData} from "../data/skills"

// Le type d'une catégorie
type Category = typeof skillsData[keyof typeof skillsData]

// Le type d'un skill individuel
type Skill = Category["skills"][number]

type SkillItemProps = {
  item: { id: string; label: string }
  checked: boolean
  onToggle: (id: string) => void   // reçoit la fonction du parent
}

const SkillItem = ({ item, checked, onToggle }: SkillItemProps) => {
  return (
    <div onClick={() => onToggle(item.id)} className="itemContent">
      <input type="checkbox" className="checkbox" checked={checked} onChange={() => {}} />
      <span>{item.label}</span>
    </div>
  )
}

export default SkillItem;