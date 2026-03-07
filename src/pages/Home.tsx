import { useState } from 'react';
import Header from "../components/Header"
import SkillCategory from "../components/SkillCategory"
import Footer from "../components/Footer"

const Home = () => {

    
    // JE DOIS RECUPERER LA LISTE DES COMPETENCES CHECKED
    // POUR EVITER D'UTILISER LES USECONTEXT POUR L'INSTANT, JE REMOTE CHECKED ET TOGGLE A CE NIVEAU

    const [checked, setChecked] = useState<Record<string, boolean>>({}) 
    const toggle = (id: string) => {
        setChecked(prev => ({...prev, [id]: !prev[id]}))
    }

    return (
        <div className=''>
                <Header checked={checked} />
            <div className="content">
                <SkillCategory checked={checked} toggle={toggle} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;