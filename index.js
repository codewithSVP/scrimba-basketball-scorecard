let add1home = document.getElementById('home-add1');
let add2home = document.getElementById('home-add2');
let add3home = document.getElementById('home-add3');

let add1guest = document.getElementById('guest-add1');
let add2guest = document.getElementById('guest-add2');
let add3guest = document.getElementById('guest-add3');

let homeScoreCount = 0
let guestScoreCount = 0

let homeScore = document.getElementById('home-score');
homeScore.textContent = homeScoreCount;

let guestScore = document.getElementById('guest-score');
guestScore.textContent = guestScoreCount;


function addOneHome() {
    homeScore.textContent = homeScoreCount += 1;
}

function addTwoHome() {
    homeScore.textContent = homeScoreCount += 2;
}

function addThreeHome() {
    homeScore.textContent = homeScoreCount += 3;
}

function addOneGuest() {
    guestScore.textContent = guestScoreCount += 1;
}

function addTwoGuest() {
    guestScore.textContent = guestScoreCount += 2;
}

function addThreeGuest() {
    guestScore.textContent = guestScoreCount += 3;
}