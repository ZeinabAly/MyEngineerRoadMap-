import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.js"


const App = () => {
  return (
    // ROUTES
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
      
    </div>
  );
};

export default App;