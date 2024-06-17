let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#restbtn");
let newBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//storing variables
let turn0 = true;//playerX ,playerO 
let btnCount = 0;// counts to track draw

// winning patterns stored in 2d array
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener ("click",() => {
    //console.log("box was clicked"); 
        if (turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
    box.disabled = true;
    btnCount++;
    let isWinner = checkWinner();
    
    if(btnCount === 9 && !isWinner){
        gameDraw();
    }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
  }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        /*//all the patterns number to understand game
        console.log(pattern[0], pattern[1],pattern[2]);
        // all the boxes to understand game
        console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);*/
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val ){
                //console.log("winner", pos1Val);
                showWinner(pos1Val);
        }
    }
}
};   

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click", resetGame);

