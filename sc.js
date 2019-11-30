let arr = ["paper" , "rock" , "scissors"];
function comuterPlay(){
    let choise = Math.floor(Math.random() *3);
    return choise;
}
function getPlayerChoise(){
    let choise;
    do{
        choise = prompt("Rock, Paper or Scissors ?? ");
        choise = choise.toLocaleLowerCase();
    }while(arr.indexOf(choise) == -1);
    return arr.indexOf(choise);
}
// retrun 1 for plater , 0 for comuter
function calc(player , comuter){
    if(player == 0){
        if(comuter == 1){
            return 1;
        }else{
            return 0;
        }
    }
    if(player == 1){
        if(comuter == 0){
            return 0;
        }else{
            return 1;
        }
    }
    if(player == 2){
        if(comuter == 1){
            return 0;
        }else{
            return 1;
        }
    }
    return 2;
}
function play(){
    let player = getPlayerChoise();
    let computer = comuterPlay();
    while(computer == 2){
        console.log("tie , play agin");
        computer = comuterPlay();
    }
    let reslte = calc(player , computer);
    if(reslte == 1){
        console.log("You win this round! "+ arr[player] +" beats " + arr[computer]);
    }else{
        console.log("You lose this round! "+ arr[computer] +  " beats " + arr[player]);
    }
    return reslte;
}
function game(){
    console.log("welcome to my game");
    let resPlayer = 0;
    let resComputer = 0;
    for(let i = 0;i<5;i++){
        let res = play();
        if(res == 1){
            resPlayer++;
        }else{
            resComputer++;
        }
        console.log("you :: " + resPlayer);
        console.log("computer :: " + resComputer);
    }   
    if(resPlayer>resComputer){
        console.log("YOU WIN ^-^");
    }else{
        console.log("YOU LOSE ~_~");
    }
}
game();