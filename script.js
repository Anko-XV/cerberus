
const progress = document.querySelector("#progress")
const feed = document.querySelector("#feed")
const pet = document.querySelector("#pet")
const hit = document.querySelector("#hit")
// hulp van mees
function imagechanger() {
    document.getElementById("neutral").src = "./images/stage 1.5 cerberus.png";
    score ++;
    console.log(score);
    updateScore();
}

function imagechangernegative() {
    document.getElementById("neutral").src = "./images/stage 1.5 cerberus.png";
    score --;
    console.log(score);
    updateScore();
}

// met hulp van milo //
let score = 0;
function updateScore(){
    if (score == 0) {
        progress.src = "./images/progress 0%.png"
    }

    if (score == 1) {
        progress.src = "./images/progress 20%.png";
    }

    if (score == 2) {
        progress.src = "./images/progress 40%.png";
    }

    if (score == 3) {
        progress.src = "./images/progress 60%.png";
    }

    if (score == 4) {
        progress.src = "./images/progress 80%.png"
    }

    if (score == 5) {
        progress.src = "./images/progress 100%.png"
    }  

    if (score == 6) {
        neutral.src = "./images/stage 2.5 cerberus.png"
        let heading = document.getElementById("objective");
        heading.innerHTML = 'cerberus evolved!!'
    }
}

// hulp van mees
function imagechanger() {
    document.getElementById("neutral").src = "./images/stage 1.5 cerberus.png";
    score ++;
    console.log(score);
    updateScore();
}

function imagechangernegative() {
    document.getElementById("neutral").src = "./images/stage 1.5 cerberus.png";
    score --;
    console.log(score);
    updateScore();
}



feed.addEventListener("click", imagechanger)
pet.addEventListener("click", imagechanger)
hit.addEventListener("click", imagechangernegative)

honden = ["./images/stage 1.5 cerberus.png","./images/stage 2.5 cerberus.png","./images/stage 3.5 cerberus.png"]