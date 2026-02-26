import { Routes, Route } from "react-router-dom"
import SkillTree from "./pages/REFCLAUDE.js"
import Home from "./pages/Home.js"


const App = () => {
  return (
    // ROUTES
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ref" element={<SkillTree />} />
    </Routes>
      
    </div>
  );
};

export default App;