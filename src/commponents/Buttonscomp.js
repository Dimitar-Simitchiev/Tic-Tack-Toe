import './Buttons.css'
import React, { useState,} from 'react';
import Check from './Check';
import Replay from './Replay'
import {useNavigate} from "react-router-dom"
import ComputerPlay from './ComputerPlay';

function Buttons() {
const[move,setMove]=useState('O')
const[winner,setWinner]=useState('')

const navigate = useNavigate();

function Menu() {
  navigate('/')
}





  const Play=(e)=> {
    
    if (e.target.textContent==='-') {
      
      e.target.textContent=move
   setMove('O')
     
      Check()
      setWinner('You')
      if (document.getElementById('eql').style.display==='flex' ||document.getElementById('winner').style.display==='flex'){
        console.log('equal')
      }else{
        ComputerPlay()
        
        Check()
        setWinner('Computer')
      }
   
      
        
    
    }


  
     
    
    
   
    
   
  
  }




    return (<>
    <div className="div-player">
        <h1 id="p1" className='p1'> </h1>
        <h1 id="p2" className='p2'>!</h1>
        </div>
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
     <button className="btn1" onClick={Menu}>MENU</button>
      </div>
      <br></br>
       <div id='winner' className='winner'>
       <h1 className='win-text'>{winner} win ! </h1>
       <button id="again"className="btn-replay" onClick={Replay} >PLAY AGAIN</button>
       </div>
       <div id='eql' className='eql'>
       <h1 className='win-text'>No winner!</h1>
       <button id="again"className="btn-replay" onClick={Replay} >PLAY AGAIN</button>
       </div>
       </>
    
    );
  }
  
  export default Buttons;
  