let element = document.querySelector("#myName")
let isim = prompt("isim giriniz")
if (isim == null) {
    isim = "ziyaretçi"
}

element.innerHTML = `${isim}`
const days = [
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar',
]

function showTime() {
    let clock = document.querySelector("#myClock")
    let tarih = new Date()
    let hour = tarih.getHours()
    if (hour < 10) {
        hour = "0" + hour
    }
    let minutes = tarih.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    let seconds = tarih.getSeconds()
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    clock.innerHTML = `${hour}:${minutes}:${seconds} ${days[tarih.getDay() - 1]}`

}

showTime()
setInterval(showTime, 1000)