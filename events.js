let comScore = 0;
let userScore = 0;
function handle(key){
    const ans = play(key.getAttribute("data-key"));
    key.classList.add("press");
    const ansDiv = document.getElementById("ans");
    const comDiv = document.getElementById("compAns");
    const userDiv = document.getElementById("userAns");
    if(ans[0] == 1){
        userScore++;
        ansDiv.style.borderColor = 'green';
    }else if(ans[0] == 2){
        ansDiv.style.borderColor = 'black';
    }else{
        comScore++;
        ansDiv.style.borderColor = 'red';
    }
    ansDiv.innerText = ans[1];
    comDiv.innerText = comScore.toString();
    userDiv.innerText = userScore.toString();
    if(userScore == 5 || comScore == 5){
        prompt("done");
    }
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener("transitionend" ,()=>key.classList.remove("press") ));
keys.forEach(key => key.addEventListener("click" , ()=>handle(key)));