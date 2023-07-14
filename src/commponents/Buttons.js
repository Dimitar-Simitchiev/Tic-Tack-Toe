import './Buttons.css'
import React, { useState,} from 'react';
import Check from './Check';
import Replay from './Replay'
import {useNavigate} from "react-router-dom"

function Buttons() {
const[move,setMove]=useState('O')
const[turn,setTurn]=useState(true);
const navigate = useNavigate();

function Menu() {
  navigate('/')
}



  const Play=(e)=> {
    if (turn===true&& e.target.textContent==='-') {
      
      e.target.textContent=move
    console.log(move)
     
      Check()
      if (document.getElementById('winner').style.display!=='flex') {
        setMove('X')
        
      setTurn(false)
      document.getElementById('p1').style.display='none';
      document.getElementById('p2').style.display='flex'
    
      }
      
        
    
    }else if (turn===false&& e.target.textContent==='-') {
      
      e.target.textContent=move
      console.log(move)
    
      Check()
      if (document.getElementById('winner').style.display!=='flex') {
         setMove('O')
    
     
      setTurn(true)
      document.getElementById('p2').style.display='none';
      document.getElementById('p1').style.display='flex'

      }
     
    }
    
   
    
   
  
  }




    return (<>
       <h1 id="p1" className='p1'>Player 1 turn:</h1>
        <h1 id="p2" className='p2'>Player 2 turn:</h1>
      <div className="Tick-tack-button">
        
     <button id="1" className="btn" onClick={Play} type="button" >-</button>
     <button id="2"className="btn" onClick={Play} type="button" >-</button>
     <button id="3"className="btn" onClick={Play} type="button" >-</button>
     <br></br>
     <button id="4" className="btn" onClick={Play} type="button" >-</button>
     <button id="5"className="btn" onClick={Play} type="button" >-</button>
     <button id="6"className="btn" onClick={Play} type="button" >-</button>
     <br></br>
     <button id="7"className="btn" onClick={Play} type="button" >-</button>
     <button id="8"className="btn" onClick={Play} type="button" >-</button>
     <button id="9"className="btn" onClick={Play} type="button" >-</button>
     <br></br>
     <button  className="btn1" onClick={Menu}>MENU</button>
      </div>
      <br></br>
       <div id='winner' className='winner'>
       <h1 className='win-text'>{move} win !</h1>
       <button id="again"className="btn-replay" onClick={Replay} >PLAY AGAIN</button>
       </div>
       <div id='eql' className='eql'>
       <h1 className='win-text'>No winner this game!</h1>
       <button id="again"className="btn-replay" onClick={Replay} >PLAY AGAIN</button>
       </div>
       </>
    
    );
  }
  
  export default Buttons;
  