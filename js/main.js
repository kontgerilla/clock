const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector(".hour-hand")
const Title = document.getElementById("title-clock")

function setDate() {
    const now = new Date();
    const th = now.getHours()
    const tm = now.getMinutes()
    var ts = now.getSeconds()
    if (ts.toString().length === 1) {
        ts = "0" + ts
    }

    Title.innerText = th + ":" + tm + ":" + ts

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    console.log(secondsDegrees)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 900);

setDate();