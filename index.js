let add1home = document.getElementById('home-add1');
let add2home = document.getElementById('home-add2');
let add3home = document.getElementById('home-add3');

let add1Away = document.getElementById('Away-add1');
let add2Away = document.getElementById('Away-add2');
let add3Away = document.getElementById('Away-add3');

let homeScoreCount = 0
let AwayScoreCount = 0

let homeScore = document.getElementById('home-score');
homeScore.textContent = homeScoreCount;

let AwayScore = document.getElementById('Away-score');
AwayScore.textContent = AwayScoreCount;


function addOneHome() {
    homeScore.textContent = homeScoreCount += 1;
}

function addTwoHome() {
    homeScore.textContent = homeScoreCount += 2;
}

function addThreeHome() {
    homeScore.textContent = homeScoreCount += 3;
}

function addOneAway() {
    AwayScore.textContent = AwayScoreCount += 1;
}

function addTwoAway() {
    AwayScore.textContent = AwayScoreCount += 2;
}

function addThreeAway() {
    AwayScore.textContent = AwayScoreCount += 3;
}