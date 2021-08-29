
setInterval(function blinking() {
    document.querySelector(".right-eye-lid").classList.toggle("eye-lid-closed");
    document.querySelector(".left-eye-lid").classList.toggle("eye-lid-closed");
}, 2000);

function randomColor() {


    var arr = [];
    for (var i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 256)/* generates a number between 0 and 255*/
        arr.push(num);
    }
    var newRgb = 'rgb(' + arr[0] + ',' + arr[1] +
        ',' + arr[2] + ')';
    return newRgb;

}

var audio = new Audio('./sounds/sound.mp3');

document.querySelector(".head-container").addEventListener("click", function () {


    if (audio.paused) {

        audio.play();

    }
    else {
        audio.pause()
        /*audio.load(); */
    }



});

document.querySelector("body").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = randomColor();
})


function message() {

    console.log('hello there');

}




/*
onc="setInterval(closeLids(), 3000);"

function closeLids() {

    document.querySelector(".right-eye-lid").classList.add("eye-lid-closed");
    document.querySelector(".left-eye-lid").classList.add("eye-lid-closed");
    console.log("hi 1");

}
function openLids() {

    document.querySelector(".right-eye-lid").classList.remove("eye-lid-closed");
    document.querySelector(".left-eye-lid").classList.remove("eye-lid-closed");
    console.log("hi 2");

}

*/




