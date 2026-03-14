import * as Si from "react-icons/si"
import * as Fa from "react-icons/fa"
import { FaCheck } from "react-icons/fa6";

type Skill = {
  id: string
  label: string
  icon: string
  priority: number
}

// TYPES DES ELEMENTS PASSES EN PROPS
type SkillItemProps = {
  item: Skill
  checked: boolean
  onToggle: (id: string) => void   // reçoit la fonction du parent
  color: string
}

// VARIABLE POUR GERER LES ICONES

const SkillItem = ({ item, checked, onToggle, color = "#e8c547" }: SkillItemProps) => {
  const Icon = Si[item.icon as keyof typeof Si] || Fa[item.icon as keyof typeof Fa]

  const priorityColor = () => {
    if( item.priority == 1) return `${color}95`
    if( item.priority == 2) return `${color}40`
    return `${color}20`
  }
  
  return (
    <div onClick={() => onToggle(item.id)} className="itemContent"
      style={{
        borderColor: checked ? `${priorityColor()}` : "rgba(255,255,255,0.06)",
        background: checked ? `${color}15` : "rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Checkmark coin */}
      <div
        className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black border transition-all duration-200"
        style={{
          borderColor: checked ? `${priorityColor()}` : "rgba(255,255,255,0.15)",
          background: checked ? `${priorityColor()}` : "transparent",
          color: checked ? "#000" : "transparent",
        }}
      >
        <FaCheck />
      </div>

      {/* Icône */}
      <div className={`text-3xl transition-all duration-200 ${checked ? "opacity-100" : "opacity-40"}`}>
        {Icon
          ? <Icon size={30} color={checked ? `${priorityColor()}` : "#ffffff"} />
          : <span>{item.icon}</span>
        }
      </div>
      <span
        className="text-[11px] leading-tight"
        style={{ color: checked ? "#e8e8e8" : "#ffffff80" }}
      >
        {item.label}
      </span>
    </div>
  )
}

export default SkillItem;