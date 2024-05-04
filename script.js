let btns = document.querySelectorAll('.box');
let reset = document.querySelector("#reset");
let turnO = true;
let winningpattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]; let winner = false;
let count = 0;
let msg = document.querySelector('.msg');
let rst = document.querySelector("#rst");
let winnervalue = "";
let winnerSound = document.getElementById("winner_sound");
let drawSound = document.getElementById("Draw_sound");

//Play Winner...................
function playwinner() {
    winnerSound.play();
}
//Play Draw..................
function playdraw() {
    drawSound.play();
}
//Adding functionality to Restart button................
rst.addEventListener('click', () => {
    enablebtns();
    msg.classList.add('hide');
    winnervalue = "";
    reset.classList.remove('hide');
    resetgame();
    rst.classList.add('hide');
});


//reset function................
function resetgame() {
    for (let btn of btns) {
        btn.innerText = "";
    }
    winnervalue = "";
    winner = false;
    count = 0;
    enablebtns();
    msg.classList.add("hide");
}

//Massage function...............
function msgfunction(decision) {

    msg.classList.remove("hide");
    if (decision.toString() != "Draw") {
        msg.innerText = `Congratulations the Winner is: ${winnervalue}`;
    } else {
        msg.innerText = "Draw";
    }
}
// Adding reset values...............
reset.addEventListener('click', () => { resetgame(); })

// Applying event Listener to each button
btns.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText === "") {
            if (turnO == true) {

                box.innerText = "O";
                turnO = false;
            }
            else {

                box.innerText = "x";
                turnO = true;
            }
            // box.disabled = true;
            count++
            checkwinner();
            if (winner == true) {
                disablebtns();
                msgfunction("winner");
                rst.classList.remove("hide");
                reset.classList.add("hide");
                playwinner();

            }
            if (winner == false && count == 9) {
                // alert("Draw");
                msgfunction("Draw");
                console.log("draw");
                rst.classList.remove("hide");
                reset.classList.add("hide");
                playdraw();
            }
        }

    });
})

//enable Buttons..........
function enablebtns() {
    for (let btn of btns) {
        btn.disabled = false;
    }
}
//disable Buttons.........
function disablebtns() {
    for (let btn of btns) {
        btn.disabled = true;
    }
}




//Check Winner.................
const checkwinner = () => {
    console.log(count);
    for (pattern of winningpattern) {
        //Getting the value from the indeces for checking
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                winner = true;
                winnervalue = pos1;
            }
        }


    }



};