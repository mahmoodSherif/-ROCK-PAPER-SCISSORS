let arr = ["paper" , "rock" , "scissors"];
function comuterPlay(){
    let choise = Math.floor(Math.random() *3);
    return choise;
}
// retrun 1 for plater , 0 for comuter
function calc(player , computer){
    if(computer == player){
        return 2;
    }
    if(player == 0){
        if(computer == 1){
            return 1;
        }else{
            return 0;
        }
    }
    if(player == 1){
        if(computer == 0){
            return 0;
        }else{
            return 1;
        }
    }
    if(player == 2){
        if(computer == 1){
            return 0;
        }else{
            return 1;
        }
    }
}
function play(choise){
    let player = arr.indexOf(choise);
    let computer = comuterPlay();
    let reslte = calc(player , computer);
    let st = "";
    if(reslte == 2){
        st = "tie , play agin";
    }else if(reslte == 1){
        st = "You win this round! "+ arr[player] +" beats " + arr[computer];
    }else{
        st = "You lose this round! "+ arr[computer] +  " beats " + arr[player];
    }
    return [reslte , st];
}
function game(){
    console.log("welcome to my game");
    let resPlayer = 0;
    let resComputer = 0;
    for(let i = 0;i<5;i++){
        let res = play()[0];
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