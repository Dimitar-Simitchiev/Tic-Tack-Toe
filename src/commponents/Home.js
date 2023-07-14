
import {useNavigate} from "react-router-dom"
import './Home.css'

function Home() {
  const navigate = useNavigate();
  function RoutePVP() {
    navigate('/pvp')
  }
  function RouteComp() {
    navigate('/comp')
  }
  function RouteInfo() {
    navigate('/info')
  }
  return (
    
    <div className="home-div">
    <img src="https://4.bp.blogspot.com/-UGd-nOoMK5g/WBd6ICqoumI/AAAAAAAAHXI/_6oeNhPtdHUqi6iUStCLvUvDUGV1S82VQCLcB/s1600/tttmarqlrg.gif" alt="Girl in a jacket" width="600" height="250"/> 
      <br></br>
      <button className="btn1" onClick={RoutePVP}>Play with friends</button>
      <br></br>
      <button className="btn1" onClick={RouteComp}>Play with computer</button>
      <br></br>
      <button className="btn1" onClick={RouteInfo}>Instructions</button>
    </div>
    
    
  );
}

export default Home;
