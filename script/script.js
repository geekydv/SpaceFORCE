
const popup = document.querySelector('.popup');
const playgame = document.querySelector('.playgame');
window.onload = function () {
    setTimeout(function () {
        popup.style.display = "block";
    }, 1000);
};
playgame.addEventListener('click', () => {
    popup.style.display = "none";
});



function start() {
    document.getElementById('block').classList.add("animated");
    var bgm = document.getElementById('bgmusic');
    bgm.volume = 1;
    bgm.play();

}

function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if (left >= 0) {
        character.style.left = left + "px";
    }

}
function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if (left < 300) {
        character.style.left = left + "px";
    }

}
document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
        moveLeft();
        document.getElementById('turn').play();
    }
    if (event.key === "ArrowRight") {
        moveRight();
        document.getElementById('turn').play();
    }
});

var counter = 0;

var block = document.getElementById("block");
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
    counter++;
});

setInterval(function () {
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {

        block.style.animation = "none";
        document.getElementById('bgmusic').pause();
        var go = document.getElementById('gameover');
        go.volume = 0.2;
        go.play();
        alert("【ＧＡＭＥ　ＯＶＥＲ】 𝗬𝗼𝘂 𝗵𝗮𝘃𝗲 𝗺𝗮𝗻𝗮𝗴𝗲𝗱 𝘁𝗼 𝗿𝗲𝘁𝗿𝗶𝗲𝘃𝗲 "+counter+"𝐙𝐁 of 𝘃𝗮𝗹𝘂𝗮𝗯𝗹𝗲 𝗱𝗮𝘁𝗮 𝗯𝘂𝘁 𝘂𝗻𝗳𝗼𝗿𝘁𝘂𝗻𝗮𝘁𝗲𝗹𝘆 𝗰𝗼𝘂𝗹𝗱𝗻'𝘁 𝘀𝗮𝘃𝗲 𝘁𝗵𝗲 𝗦𝗽𝗮𝗰𝗲𝗰𝗿𝗮𝗳𝘁.𝗬𝗼𝘂 𝗰𝗮𝗻 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻 𝘁𝗼 𝘀𝗮𝘃𝗲 𝘁𝗵𝗲 𝗦𝗽𝗮𝗰𝗲𝗰𝗿𝗮𝗳𝘁 𝗮𝗹𝗼𝗻𝗴𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗱𝗮𝘁𝗮"+"Score:"+counter);
        location.reload();
    }
    if (counter >= 50) {
        block.style.animation = "none";
        document.getElementById('character').classList.add("finish");
        document.getElementById('bgmusic').pause();
        document.getElementById('victory').play();

        alert("【𝐌𝐢𝐬𝐬𝐢𝐨𝐧　𝐀𝐜𝐜𝐨𝐦𝐩𝐥𝐢𝐬𝐡𝐞𝐝】 🖖 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀! 𝗬𝗼𝘂 𝗠𝗮𝗻𝗮𝗴𝗲𝗱 𝘁𝗼 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲 "+counter+"𝐙𝐁 𝗗𝗮𝘁𝗮 𝗮𝗻𝗱 𝗦𝗮𝘃𝗲𝗱 𝘁𝗵𝗲 𝗦𝗽𝗮𝗰𝗲𝗰𝗿𝗮𝗳𝘁 𝗮𝘀𝘄𝗲𝗹𝗹"+"Score:"+counter);
        counter = 0;
        window.setTimeout(function () { location.reload(); }, 5000);
    }

}, 1);

document.getElementById("left").addEventListener("touchstart", moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRight);
