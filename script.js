
const progress = document.querySelector("#progress");
const neutral = document.querySelector("#neutral");
const feed = document.querySelector("#feed");
const pet = document.querySelector("#pet");
const hit = document.querySelector("#hit");

let score = 0;
let evolutionStage = 0;
// met hulp van milo and inspriatie van docent
const images = [
    "./images/stage 1.5 cerberus.png",
    "./images/stage 2.5 cerberus.png",
    "./images/stage 3.5 cerberus.png"
];

const progressImages = [
    "./images/progress 0%.png",
    "./images/progress 20%.png",
    "./images/progress 40%.png",
    "./images/progress 60%.png",
    "./images/progress 80%.png",
    "./images/progress 100%.png"
];

const updateScore = () => {
    if (score < 0) score = 0;
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
    } else {
        document.getElementById("objective").innerText = 'Take care of your Cerberus!';
    }
};

const resetProgressBar = () => {
    score = 0;
    progress.src = progressImages[score];
};
// met hulp van mees//
const imageChanger = () => {
    score++;
    console.log(`Score: ${score}, Evolution Stage: ${evolutionStage}`);
    updateScore();
};

const imageChangerNegative = () => {
    score--;
    console.log(`Score: ${score}, Evolution Stage: ${evolutionStage}`);
    updateScore();
};

feed.addEventListener("click", imageChanger);
pet.addEventListener("click", imageChanger);
hit.addEventListener("click", imageChangerNegative);
