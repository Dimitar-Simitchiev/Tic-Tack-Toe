import './Buttons.css'

function Replay() {

   document.getElementById('1').textContent='-';
    document.getElementById('2').textContent='-';
    document.getElementById('3').textContent='-';
    document.getElementById('4').textContent='-';
    document.getElementById('5').textContent='-';
    document.getElementById('6').textContent='-';
    document.getElementById('7').textContent='-';
    document.getElementById('8').textContent='-';
    document.getElementById('9').textContent='-';
  
     document.getElementById('1').disabled = false;
     document.getElementById('2').disabled = false;
     document.getElementById('3').disabled = false;
     document.getElementById('4').disabled = false;
     document.getElementById('5').disabled = false;
     document.getElementById('6').disabled = false;
     document.getElementById('7').disabled = false;
     document.getElementById('8').disabled = false;
     document.getElementById('9').disabled = false;
    
    document.getElementById('winner').style.display='none'
    document.getElementById('eql').style.display='none'
    document.getElementById('p2').style.display='none';
    document.getElementById('p1').style.display='flex'
    
      
    }
      export default Replay;
      