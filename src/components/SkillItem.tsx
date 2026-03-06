// import {skillsData} from "../data/skills"

// Le type d'une catégorie
// type Category = typeof skillsData[keyof typeof skillsData]

// oubien

// type Category = {
//   label: string
//   color: string
//   accent: string
//   bg: string
//   border: string
//   skills: Skill[]
// }

// Le type d'un skill individuel
// type Skill = Category["skills"][number]

// ou bien

type Skill = {
  id: string
  label: string
}

// TYPES DES ELEMENTS PASSES EN PROPS
type SkillItemProps = {
  item: Skill
  checked: boolean
  onToggle: (id: string) => void   // reçoit la fonction du parent
}

const SkillItem = ({ item, checked, onToggle }: SkillItemProps) => {
  return (
    <div onClick={() => onToggle(item.id)} className="itemContent">
      <input type="checkbox" style={{ accentColor: "#fb2c36" }}  className="checkbox" checked={checked} onChange={() => {}} />
      <span>{item.label}</span>
    </div>
  )
}

export default SkillItem;