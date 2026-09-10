/* =========================
   HOME LAYOUT
========================= */

function changeLayout(layout) {

    const grid = document.getElementById("contentGrid");

    if (!grid) return;

    grid.classList.remove("list", "large");

    if (layout === "list") {
        grid.classList.add("list");
    }

    if (layout === "large") {
        grid.classList.add("large");
    }

}


/* =========================
   DATE CAROUSEL
========================= */

const dates = [

    {
        icon: "☕",
        title: "Coffee Date",
        description:
        "Somewhere quiet where we can finally talk without a screen between us."
    },

    {
        icon: "🌅",
        title: "Sunset Date",
        description:
        "Watching the sunset together and pretending we're not taking too many pictures."
    },

    {
        icon: "🎬",
        title: "Movie Date",
        description:
        "Finally watching a movie beside each other instead of through a call."
    },

    {
        icon: "🍜",
        title: "Food Trip",
        description:
        "Trying different food and arguing about which one is the best."
    },

    {
        icon: "🍝",
        title: "Dinner Date",
        description: "Getting dressed up and having a nice dinner where we can finally sit across from each other."
    },

    {
        icon: "🌊",
        title: "Beach Date",
        description: "Walking barefoot by the beach, listening to the waves, and taking way too many pictures."
    },

    {
        icon: "🎡",
        title: "Amusement Park Date",
        description: "Riding everything we can, screaming together, and trying to win each other cute prizes."
    },

    {
        icon: "🧺",
        title: "Picnic Date",
        description: "A little picnic somewhere peaceful with our favorite snacks and a blanket for two."
    },

    {
        icon: "📚",
        title: "Bookstore Date",
        description: "Walking around a bookstore and secretly picking books for each other."
    },

    {
        icon: "🎨",
        title: "Painting Date",
        description: "Painting together even though neither of us knows what we're doing."
    },

    {
        icon: "🍦",
        title: "Ice Cream Date",
        description: "Getting ice cream and walking around while talking about random things."
    },

    {
        icon: "🌃",
        title: "Night Drive",
        description: "A late-night drive with our playlist playing while we talk about everything and nothing."
    },

    {
        icon: "🎤",
        title: "Karaoke Date",
        description: "Singing our favorite songs together even if one of us is horribly out of tune."
    },

    {
        icon: "🍳",
        title: "Cook Together",
        description: "Trying to cook something together and probably making a bigger mess than the actual meal."
    },

    {
        icon: "📸",
        title: "Photo Booth Date",
        description: "Taking ridiculous photo booth pictures that we'll keep forever."
    },

    {
        icon: "🌻",
        title: "Flower Date",
        description: "Going somewhere with flowers and picking one that reminds me of you."
    },

    {
        icon: "🛍️",
        title: "Random Shopping Date",
        description: "Going into stores without a plan and somehow leaving with things we don't need."
    },

    {
        icon: "🌌",
        title: "Stargazing Date",
        description: "Lying beside each other somewhere quiet and looking at the stars."
    },

    {
        icon: "🎮",
        title: "Gaming Date",
        description: "Playing games together and pretending we're not competitive with each other."
    },

    {
        icon: "✈️",
        title: "Little Getaway",
        description: "Going somewhere new together and making memories far away from our usual routines."
    }


];

let currentDate = 0;


function updateDate() {

    const date = dates[currentDate];

    const icon = document.getElementById("dateIcon");
    const title = document.getElementById("dateTitle");
    const description = document.getElementById("dateDescription");

    if (!icon) return;

    icon.textContent = date.icon;
    title.textContent = date.title;
    description.textContent = date.description;

}


function nextDate() {

    currentDate++;

    if (currentDate >= dates.length) {
        currentDate = 0;
    }

    updateDate();

}


function previousDate() {

    currentDate--;

    if (currentDate < 0) {
        currentDate = dates.length - 1;
    }

    updateDate();

}


function chooseDate() {

    const result = document.getElementById("chosenDate");

    if (!result) return;

    result.innerHTML =
        `You chose: <strong>${dates[currentDate].title}</strong> 🤍`;

}


/* =========================
   ENVELOPE
========================= */

function openEnvelope() {

    const message =
        document.getElementById("secretMessage");

    if (!message) return;

    message.classList.remove("hidden");

    message.scrollIntoView({
        behavior: "smooth"
    });

}


function changeEnvelopeColor(color) {

    const envelope =
        document.getElementById("envelope");

    if (!envelope) return;

    envelope.classList.remove(
        "wine",
        "nude",
        "black"
    );

    envelope.classList.add(color);

}


/* =========================
   FINAL ANSWERS
========================= */

function answerYes() {

    const answer =
        document.getElementById("answerMessage");

    answer.innerHTML = `
        <h2>Really?! 😭🤍</h2>

        <p>
            Thank you for giving me a chance.
        </p>

        <p>
            I won't promise perfection,
            but I promise that my intentions are genuine.
        </p>

        <p>
            I guess we have a lot of memories to make now. 🌹
        </p>
    `;

}


function answerTime() {

    const answer =
        document.getElementById("answerMessage");

    answer.innerHTML = `
        <h2>Of course. 🤍</h2>

        <p>
            Take all the time you need.
        </p>

        <p>
            You don't owe me an immediate answer.
            My feelings aren't a deadline.
        </p>
    `;

}


function answerTalk() {

    const answer =
        document.getElementById("answerMessage");

    answer.innerHTML = `
        <h2>I'd like that. 🤍</h2>

        <p>
            Maybe this website said some things
            I was too nervous to say directly.
        </p>

        <p>
            But I'd genuinely love to hear
            what you think.
        </p>
    `;

}

/* =========================
   CATCH MY HEARTS GAME
========================= */


/* GAME VARIABLES */

let gameRunning = false;

let gameScore = 0;

let combo = 0;

let playerY = 250;

let playerVelocity = 0;

let gravity = 0.48;

let flyPower = -8.5;

let gameLoop;

let spawnTimer;

let gameSpeed = 3;

let specialHeartSpawned = false;

let heartAnimationLoops = [];


/* GAME ELEMENTS */

const gameArea =
    document.getElementById("gameArea");

const player =
    document.getElementById("player");

const scoreDisplay =
    document.getElementById("score");

const comboDisplay =
    document.getElementById("combo");

const highScoreDisplay =
    document.getElementById("highScore");

const finalScore =
    document.getElementById("finalScore");

const gameOverPopup =
    document.getElementById("gameOverPopup");

const winPopup =
    document.getElementById("winPopup");

const startScreen =
    document.getElementById("gameStartScreen");

const gameOverMessage =
    document.getElementById("gameOverMessage");


/* HIGH SCORE */

function loadHighScore() {

    if (!highScoreDisplay) return;

    const savedScore =
        localStorage.getItem("heartGameHighScore");

    if (savedScore) {

        highScoreDisplay.textContent =
            savedScore;

    } else {

        highScoreDisplay.textContent = 0;

    }

}


function saveHighScore() {

    const currentBest =
        Number(
            localStorage.getItem(
                "heartGameHighScore"
            )
        ) || 0;


    if (gameScore > currentBest) {

        localStorage.setItem(
            "heartGameHighScore",
            gameScore
        );

        highScoreDisplay.textContent =
            gameScore;

    }

}


loadHighScore();


/* START GAME */

function startGame() {

    if (!gameArea || !player) return;


    gameRunning = true;

    gameScore = 0;

    combo = 0;

    playerY =
        gameArea.clientHeight / 2;

    playerVelocity = 0;

    gameSpeed = 3;

    specialHeartSpawned = false;


    /* RESET UI */

    scoreDisplay.textContent = 0;

    comboDisplay.textContent = 0;


    gameOverPopup.classList.add("hidden");

    winPopup.classList.add("hidden");

    startScreen.classList.add("hidden");


    /* REMOVE OLD HEARTS */

    document
        .querySelectorAll(".game-heart")
        .forEach(heart => heart.remove());


    /* START GAME LOOP */

    cancelAnimationFrame(gameLoop);

    gameLoop =
        requestAnimationFrame(updateGame);


    /* SPAWN HEARTS */

    clearInterval(spawnTimer);

    spawnTimer =
        setInterval(() => {

            if (!gameRunning) return;

            /* AFTER 20 POINTS,
               PREPARE FINAL HEART */

            if (
                gameScore >= 20 &&
                !specialHeartSpawned
            ) {

                spawnFinalHeart();

            } else {

                createHeart();

            }

        }, 1100);

}


/* MAIN GAME LOOP */

function updateGame() {

    if (!gameRunning) return;


    /* GRAVITY */

    playerVelocity += gravity;

    playerY += playerVelocity;


    /* ROTATE PLAYER */

    player.style.transform =
        `rotate(${
            Math.min(
                playerVelocity * 4,
                35
            )
        }deg)`;


    /* UPDATE PLAYER */

    player.style.top =
        playerY + "px";


    /* FLOOR */

    if (
        playerY >
        gameArea.clientHeight - 55
    ) {

        endGame();

        return;

    }


    /* CEILING */

    if (playerY < 0) {

        playerY = 0;

        playerVelocity = 0;

    }


    /* CHECK COLLISIONS */

    checkHeartCollision();


    /* DIFFICULTY */

    if (gameScore >= 10) {

        gameSpeed = 4;

    }


    if (gameScore >= 15) {

        gameSpeed = 5;

    }


    requestAnimationFrame(updateGame);

}


/* FLY */

function fly() {

    if (!gameRunning) return;


    playerVelocity = flyPower;


    /* SMALL FLY ANIMATION */

    player.style.transform =
        "rotate(-25deg)";

}


/* KEYBOARD */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.code === "Space") {

            event.preventDefault();

            fly();

        }

    }
);


/* MOBILE / CLICK */

if (gameArea) {

    gameArea.addEventListener(
        "pointerdown",
        function(event) {

            /* DON'T FLY WHEN CLICKING
               THE START BUTTON */

            if (
                event.target.closest("button")
            ) return;

            fly();

        }
    );

}


/* HEART TYPES */

const heartTypes = [

    {
        emoji: "❤️",
        value: 1,
        chance: 50
    },

    {
        emoji: "💖",
        value: 2,
        chance: 25
    },

    {
        emoji: "💘",
        value: 3,
        chance: 15
    },

    {
        emoji: "💝",
        value: 5,
        chance: 10
    }

];


/* RANDOM HEART */

function getRandomHeart() {

    const random =
        Math.random() * 100;


    let total = 0;


    for (
        const heart of heartTypes
    ) {

        total += heart.chance;

        if (random <= total) {

            return heart;

        }

    }


    return heartTypes[0];

}


/* CREATE NORMAL HEART */

function createHeart() {

    if (!gameRunning) return;


    const heartData =
        getRandomHeart();


    const heart =
        document.createElement("div");


    heart.classList.add(
        "game-heart"
    );


    heart.textContent =
        heartData.emoji;


    heart.dataset.value =
        heartData.value;


    const maxHeight =
        gameArea.clientHeight - 60;


    const randomY =
        Math.floor(
            Math.random() *
            maxHeight
        );


    heart.style.top =
        randomY + "px";


    heart.style.left =
        gameArea.clientWidth + "px";


    gameArea.appendChild(heart);


    moveHeart(heart);

}


/* MOVE HEART */

function moveHeart(heart) {

    let heartX =
        gameArea.clientWidth;


    const moveLoop =
        setInterval(() => {

            if (
                !gameRunning ||
                !heart.parentElement
            ) {

                clearInterval(moveLoop);

                return;

            }


            heartX -= gameSpeed;


            heart.style.left =
                heartX + "px";


            if (heartX < -70) {

                /* MISSED HEART RESETS COMBO */

                combo = 0;

                comboDisplay.textContent =
                    combo;


                heart.remove();

                clearInterval(moveLoop);

            }

        }, 20);


    heartAnimationLoops.push(
        moveLoop
    );

}


/* SPECIAL FINAL HEART */

function spawnFinalHeart() {

    specialHeartSpawned = true;


    const heart =
        document.createElement("div");


    heart.classList.add(
        "game-heart",
        "final-heart"
    );


    heart.textContent = "💌";


    heart.dataset.value = "FINAL";


    heart.style.top =
        Math.floor(
            gameArea.clientHeight / 2
        ) + "px";


    heart.style.left =
        gameArea.clientWidth + "px";


    gameArea.appendChild(heart);


    moveHeart(heart);

}


/* COLLISION DETECTION */

function checkHeartCollision() {

    if (!player) return;


    const playerRect =
        player.getBoundingClientRect();


    const hearts =
        document.querySelectorAll(
            ".game-heart"
        );


    hearts.forEach(heart => {

        const heartRect =
            heart.getBoundingClientRect();


        const collided =

            playerRect.left <
            heartRect.right &&

            playerRect.right >
            heartRect.left &&

            playerRect.top <
            heartRect.bottom &&

            playerRect.bottom >
            heartRect.top;


        if (!collided) return;


        /* FINAL HEART */

        if (
            heart.dataset.value === "FINAL"
        ) {

            heart.remove();

            winGame();

            return;

        }


        /* NORMAL HEART */

        const value =
            Number(
                heart.dataset.value
            );


        combo++;


        /* COMBO BONUS */

        let multiplier = 1;


        if (combo >= 5) {

            multiplier = 2;

        }


        const points =
            value * multiplier;


        gameScore += points;


        scoreDisplay.textContent =
            gameScore;


        comboDisplay.textContent =
            combo;


        /* REMOVE HEART */

        heart.remove();


        /* SAVE HIGH SCORE */

        saveHighScore();

    });

}


/* END ALL HEART MOVEMENT */

function stopHeartMovement() {

    heartAnimationLoops.forEach(loop => {

        clearInterval(loop);

    });


    heartAnimationLoops = [];

}


/* WIN GAME */

function winGame() {

    gameRunning = false;

    cancelAnimationFrame(gameLoop);

    clearInterval(spawnTimer);

    stopHeartMovement();

    saveHighScore();


    document
        .querySelectorAll(".game-heart")
        .forEach(heart => heart.remove());


    winPopup.classList.remove("hidden");

}


/* GAME OVER */

function endGame() {

    if (!gameRunning) return;


    gameRunning = false;


    cancelAnimationFrame(gameLoop);

    clearInterval(spawnTimer);

    stopHeartMovement();

    saveHighScore();


    finalScore.textContent =
        gameScore;


    /* PERSONALIZED MESSAGE */

    if (gameScore === 0) {

        gameOverMessage.textContent =
            "Okay... the hearts were a little too fast 😭";

    }

    else if (gameScore < 10) {

        gameOverMessage.textContent =
            "You caught some hearts! Try again, you can do it. ❤️";

    }

    else if (gameScore < 20) {

        gameOverMessage.textContent =
            "You're getting closer... something special is waiting. 👀💌";

    }

    else {

        gameOverMessage.textContent =
            "You were SO close to catching the final surprise! 😭💌";

    }


    document
        .querySelectorAll(".game-heart")
        .forEach(heart => heart.remove());


    /* SHOW POPUP */

    gameOverPopup.classList.remove("hidden");

}


/* RESTART */

function restartGame() {

    startGame();

}

// ===============================
// MUSIC PLAYER
// ===============================

const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const progressBar = document.getElementById("progressBar");


// PLAY / PAUSE
function toggleMusic() {

    if (!audioPlayer) return;

    if (audioPlayer.paused) {

        audioPlayer.play()
            .then(() => {
                playButton.textContent = "⏸";
            })
            .catch(error => {
                console.log("Music could not play:", error);
            });

    } else {

        audioPlayer.pause();

        playButton.textContent = "▶";
    }
}


// UPDATE PROGRESS BAR
if (audioPlayer) {

    audioPlayer.addEventListener("timeupdate", () => {

        if (!audioPlayer.duration) return;

        const progress =
            (audioPlayer.currentTime / audioPlayer.duration) * 100;

        progressBar.value = progress;

    });


    // CHANGE BUTTON WHEN SONG ENDS
    audioPlayer.addEventListener("ended", () => {

        playButton.textContent = "▶";

        progressBar.value = 0;

    });

}


// CLICK PROGRESS BAR TO SEEK
if (progressBar) {

    progressBar.addEventListener("input", () => {

        if (!audioPlayer.duration) return;

        audioPlayer.currentTime =
            (progressBar.value / 100) *
            audioPlayer.duration;

    });

}

window.addEventListener("load", () => {

    audioPlayer.play()
        .then(() => {
            playButton.textContent = "⏸";
        })
        .catch(() => {
            // Browser blocked autoplay.
            // User needs to click play.
        });

});

