let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const gencompchoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];
}
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const drawgame = () =>{
    console.log("game was draw.");
    msg.innerText="Game was Draw!";
    msg.style.backgroundColor="#081b31";


}
const showwinner =(userwin,userchoiceid,compchoice)=>{
   if(userwin){
    userscore++;
    userscorepara.innerText=userscore;
    console.log("You Win");
    msg.innerText=`You Win! ${userchoiceid} beats ${compchoice}`;
    msg.style.backgroundColor="green";
   }
   else{
    compscore++;
    compscorepara.innerText=compscore;
    console.log("You Lose");
    msg.innerText=`You Lose! ${compchoice} beats ${userchoiceid}`;
    msg.style.backgroundColor="red";


   }
}
const playgame = (userchoiceid)=>{
    console.log("user choice =",userchoiceid);
    // generate computer choice
    const compchoice=gencompchoice();
    console.log("computer choice =",compchoice);
    if(userchoiceid===compchoice){
        // draw game
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoiceid==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoiceid==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoiceid,compchoice);
    }

// showwinner(userwin);

}

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoiceid=choice.getAttribute("id");
    // console.log("choice was clicked",userchoiceid);
    playgame(userchoiceid);
    })
})