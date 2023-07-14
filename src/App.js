import Buttons from './commponents/Buttons'
import { Route, Routes } from "react-router-dom"
import Buttonscomp from './commponents/Buttonscomp';
import Info from './commponents/Info';
import Home from './commponents/Home';
function App() {

  return (
    
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/pvp" element={<Buttons/>}/>
    <Route path="/comp" element={<Buttonscomp/>}/>
    <Route path="/info" element={<Info/>}/>
    </Routes>

    
  );
}

export default App;
