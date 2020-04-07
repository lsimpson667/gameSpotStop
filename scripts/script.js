

function showGamesAndScores() {
let game = prompt("What is the name of the most recent game you've played?");
let score = prompt("What score would you give that game (1-5)?");

let game2 = prompt("What is the name of the second most recent game you've played?");
let score2 = prompt("What score would you give that game (1-5)?");

let txt = `<p>The most recent game I played was ${game}.<br>It deserves a score of ${score}.<p>`;
let txt2 = `<p>The second most recent game I played is ${game2}. <br>It deserves a score of ${score2}.<p>`;

document.querySelector(".example").innerHTML = txt;
document.querySelector(".example2").innerHTML = txt2;


if (score < 4) {
    document.getElementsByTagName("div")[0].style.color = "red";
} else {
    document.getElementsByTagName("div")[0].style.color = "green";
}


if (score2 < 4) { 
    document.getElementsByTagName("div")[1].style.color = "red";
} else {
    document.getElementsByTagName("div")[1].style.color = "green";
}

}