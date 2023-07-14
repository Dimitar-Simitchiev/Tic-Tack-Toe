

function ComputerPlay() {
 
   let number =Math.floor(Math.random() * 9) + 1;
   console.log(number)
   let moveCopm=document.getElementById(number).textContent
   if (moveCopm==='-'){
    document.getElementById(number).textContent='X'
   }else{
      ComputerPlay()
   }
   

   
      
}
export default ComputerPlay;
      