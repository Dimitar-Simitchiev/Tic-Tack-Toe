

function Check() {
let one=document.getElementById('1').textContent;
let two=document.getElementById('2').textContent;
let tree=document.getElementById('3').textContent;
let four=document.getElementById('4').textContent;
let five=document.getElementById('5').textContent;
let six=document.getElementById('6').textContent;
let seven=document.getElementById('7').textContent;
let eith=document.getElementById('8').textContent;
let nine=document.getElementById('9').textContent;
function Turnof() {
  document.getElementById('1').disabled = 'true';
  document.getElementById('2').disabled = 'true';
  document.getElementById('3').disabled = 'true';
  document.getElementById('4').disabled = 'true';
  document.getElementById('5').disabled = 'true';
  document.getElementById('6').disabled = 'true';
  document.getElementById('7').disabled = 'true';
  document.getElementById('8').disabled = 'true';
  document.getElementById('9').disabled = 'true';
}

if (((one===two)&&(two===tree))&&one!=='-') {
  document.getElementById('winner').style.display='flex';
  Turnof()   
}
if (((four===five)&&(five===six))&&six!=='-') {
  document.getElementById('winner').style.display='flex';
  Turnof() 
}
if (((seven===eith)&&(eith===nine))&&nine!=='-') {
  document.getElementById('winner').style.display='flex';
  Turnof() 
}
if (((one===four)&&(four===seven))&&seven!=='-') {
  document.getElementById('winner').style.display='flex';
  Turnof() 
}
 if (((two===five)&&(five===eith))&&eith!=='-') {
  document.getElementById('winner').style.display='flex';
  Turnof() 
}
if (((tree===six)&&(six===nine))&&nine!=='-') {
  document.getElementById('winner').style.display='flex';
  Turnof() 
}
if (((one===five)&&(five===nine))&&nine!=='-') {
  document.getElementById('winner').style.display='flex';
  Turnof() 
}
if (((tree===five)&&(five===seven))&&seven!=='-') {
  document.getElementById('winner').style.display='flex';
  Turnof() 
}if(one!=='-'&&two!=='-'&&tree!=='-'&&four!=='-'&&five!=='-'&&six!=='-'&&seven!=='-'&&nine!=='-'&&eith!=='-'){
if ( document.getElementById('winner').style.display==='flex') {
  document.getElementById('eql').style.display='none';
}else{
  document.getElementById('eql').style.display='flex';
}

  
}




  
}
  export default Check;
  