
const progress = document.querySelector("#progress");
const neutral = document.querySelector("#neutral");
const feed = document.querySelector("#feed");
const pet = document.querySelector("#pet");
const hit = document.querySelector("#hit");

let score = 0;
let evolutionStage = 0;

const images = [
    "./images/stage1.5cerberus.png",
    "./images/stage2.5cerberus.png",
    "./images/stage3.5cerberus.png"
];

const progressImages = [
    "./images/progress 0.png",
    "./images/progress 20.png",
    "./images/progress 40.png",
    "./images/progress 60.png",
    "./images/progress 80.png",
    "./images/progress 100.png"
];

function updateScore() {
    if (score < 0) {
        if (evolutionStage > 0) {
            evolutionStage--;
            neutral.src = images[evolutionStage];
        }
        score = 0;
    }

    if (score > 5) score = 5;

    progress.src = progressImages[score];

    if (score === 5) {
        evolutionStage++;
        if (evolutionStage < images.length) {
            neutral.src = images[evolutionStage];
            document.getElementById("objective").innerText = 'Cerberus evolved!!';
            resetProgressBar();
        } else {
            document.getElementById("objective").innerText = 'Cerberus has reached its final evolution!';
        }
    } else if (score < 5 && evolutionStage < images.length) {
        document.getElementById("objective").innerText = 'Take care of your Cerberus!';
    }
}

function resetProgressBar() {
    score = 0;
    progress.src = progressImages[score];
    console.log(`Score reset to: ${score}`);
}

function imageChanger() {
    score++;
    console.log(`Score: ${score}, Evolution Stage: ${evolutionStage}`);
    updateScore();
}

function imageChangerNegative() {
    score--;
    console.log(`Score: ${score}, Evolution Stage: ${evolutionStage}`);
    updateScore();
}

feed.addEventListener("click", imageChanger);
pet.addEventListener("click", imageChanger);
hit.addEventListener("click", imageChangerNegative);
