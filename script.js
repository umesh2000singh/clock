let hour = document.querySelector(".hour")
let minute = document.querySelector(".min")
let second = document.querySelector(".sec")
let digital = document.querySelector(".time")

setInterval(() => {
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let hr_rotate = 30*hr + min/2;
    let min_rotate = 6*min;
    let sec_rotate = 6*sec;

    hour.style.transform = `rotate(${hr_rotate}deg)`
    minute.style.transform = `rotate(${min_rotate}deg)`
    second.style.transform = `rotate(${sec_rotate}deg)`

    digital.innerHTML = `${hr}` + ":" + `${min}` + ":" + `${sec}`;
}, 1000);