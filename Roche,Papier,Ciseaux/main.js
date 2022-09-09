let wins=0; let loses=0;
const choices=['papier','caillou','ciseaux'];
const gameStatus=document.getElementById("gameStatus");
const gameScore=document.getElementById("gameScore");
const paper=document.getElementById("paper");
const rock=document.getElementById("rock");
const scissors=document.getElementById("scissors")

const scoreboard=document.getElementById("scoreboard")


mssge=`Selectionner un autre arme pour continuer le jeu `;

let runGame=(userChoice)=>{
    const computerChoice=choices[Math.floor(Math.random() * choices.length)];
    const a =document.getElementsByTagName('a');
switch(userChoice + '_' + computerChoice){
        case 'papier_ciseaux' :
        case 'caillou_papier' :
        case 'ciseaux_caillou':
            loses += 1;
            gameStatus.innerHTML=`Player Choice : ${userChoice} | Computer Choice : ${computerChoice} : you Lose `
           
            break;
        case 'papier_caillou' :
        case 'caillou_ciseaux':
        case 'ciseaux_papier' :
            wins += 1;
            gameStatus.innerHTML=`player Choice: ${userChoice} | Computer Choice: ${computerChoice} : You Win,${mssge} ` 
           mssge.innerHTML=`${mssge}`
           
            break;
        case 'papier_papier'  :
        case 'caillou_caillou':
        case 'ciseaux_ciseaux':
            gameStatus.innerHTML=`Player Choice : ${userChoice} | Computer Choice : ${computerChoice} : Egality`
         
            break;
          
            
}


  console.log(`M : ${userChoice} | C : ${computerChoice} `);
  gameScore.innerHTML = `Player : ${wins} | Computer :  ${loses}`;
 console.log(computerChoice.gameScore)
  
}


let scoreBoard=()=>{
alert(gameScore.innerHTML);

}



paper.addEventListener('click',()=>runGame("papier"));
rock.addEventListener('click',()=>runGame("caillou"));
scissors.addEventListener('click',()=>runGame("ciseaux"));
