import React from 'react';
import Header from "../components/Header"
import SkillCategory from "../components/SkillCategory"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div className='content'>
            <Header />
            <SkillCategory />
            <Footer />
        </div>
    );
};

export default Home;