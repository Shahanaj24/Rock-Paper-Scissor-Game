let userScore =0;
let comScore = 0;
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-Score");
let comScorePara = document.querySelector("#comp-Score");

 let showWiner = (Userwin ,UserChoice,comChoice) =>{
    if(Userwin)
    {
        userScore ++;
        userScorePara.innerText = userScore;
        console.log(userScore);
        msg.innerText =`Ohhhhh You Win! Your ${UserChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
        console.log("Ohhhhh You Win!");
    }
    else
    {
        comScore ++;
        comScorePara.innerText = comScore;

         msg.innerText =`Oops You Lose ..Try again Comp ${comChoice} beats ${UserChoice}`;
          msg.style.backgroundColor = "red";
       
    }
 }
let choice = document.querySelectorAll(".choices1");
 let draw = (UserChoice) =>
 {
    msg.innerText ="Oops Game Draw !";
    msg.style.backgroundColor = "purple";
    console.log("OOps Game Draw !");
 }
let CompChoice = () =>{
    let options = ["rock" , "paper" , "Scissors"];
    let ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}
let playGame =(UserChoice) =>{
    console.log("user choce =" ,UserChoice);
    let comChoice = CompChoice();
    console.log("Computer choice:",comChoice);

    if(UserChoice == comChoice)
    {
        draw();
    }
    else
    {
        let Userwin =true;
        if(UserChoice === "rock")
        { 
            // paper , scissor
           Userwin =   comChoice ==="paper" ? false : true;
        }
        else if(UserChoice ==="paper" )
        {
            // rock , scissor
          Userwin =   comChoice === "rock" ? true : false;
        }
        else if(UserChoice === "Scissors")
        {
            //rock paper 
           Userwin =    comChoice ==="rock" ? false :true;
        }
        showWiner(Userwin , UserChoice , comChoice);
    }

};
choice.forEach((choices1) =>{
    choices1.addEventListener("click", () =>
    {
       
        let UserChoice = choices1.getAttribute("id");
        console.log("choice was selelcted", UserChoice);
        playGame(UserChoice);
    } );

});