let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("p");
let newgm = document.querySelector(".ngm");
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const disable = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};

const enable = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const newGame = () => {
    turn0 = true;
    enable();
    msg.classList.add("hide");
};

const showWinner = (win) => {
    msg.innerText = `CONGRATULATION!!! WINNER IS ${win}`;
    msg.classList.remove("hide");
};

const showDraw = () => {
    msg.innerText = "Oh!!It's a DRAW!";
    msg.classList.remove("hide");
};

let turn0 = true;
boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        console.log("click")
        if (turn0) {
            box.innerText = "X";
            turn0 = false;
        } else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    let winnerFound = false;

    // Check for a winner
    for (let pattern of winPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                console.log("Winner is " + val1);
                showWinner(val1);
                disable();
                winnerFound = true; 
                break;
            }
        }
    }

    if (!winnerFound) {
        let allFilled = true;

        for (let box of boxes) {
            if (box.innerText === "") {
                allFilled = false;
                break;
            }
        }

        if (allFilled) {
            console.log("It's a draw!");
            showDraw();
            disable();
        }
    }
};

newgm.addEventListener("click", newGame);
