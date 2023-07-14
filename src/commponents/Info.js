import './Info.css'
import {useNavigate} from "react-router-dom"


function Info() {
  const navigate = useNavigate();

function Menu() {
  navigate('/')
}
  return (
    
    <div className="info-div">
    <h1 className='info-h1'>Rules for Tic-Tac-Toe</h1>
    <img src="https://th.bing.com/th/id/R.5fac10ecb07a513a1f05a46f2827fcf7?rik=ckNDIL%2bA2ZeEAg&riu=http%3a%2f%2fimages.mysafetysign.com%2fimg%2flg%2fI%2frefer-to-instruction-manual-sign-is-1014.png&ehk=eB6EXxg21CV%2bhOa%2bstsuDgIviZt9Hp%2fenCfGaIEYDcQ%3d&risl=&pid=ImgRaw&r=0" alt="Girl in a jacket" width="150" height="150"/> 
    <br></br>
    <p className='info-p'>The game is played on a grid that's 3 squares by 3 squares.You are X , your friend (or the computer in this case) is O . Players take turns putting their marks in empty squares.The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</p>
    <button className="btn1" onClick={Menu}>MENU</button>
    <br></br>
    <br></br>
    <br></br>

    </div>
    
    
  );
}

export default Info;
