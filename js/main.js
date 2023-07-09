const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector(".hour-hand")
const Title = document.getElementById("title-clock")

function setDate() {
    const now = new Date();
    let th = now.getHours()
    let tm = now.getMinutes()
    let ts = now.getSeconds()
    if (ts.toString().length === 1) {
        ts = "0" + ts
    }
    if (tm.toString().length === 1) {
        tm = "0" + tm
    }
    if (th.toString().length === 1) {
        th = "0" + th
    }

    Title.innerText = th + ":" + tm + ":" + ts

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
const sound = document.getElementById("ticktak")
function soundplay(){
    sound.play();
}
setInterval(soundplay);
setInterval(setDate,1000);

setDate();
