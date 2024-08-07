var farm_status = window.localStorage.setItem('farm', 1)
var farm_status = window.localStorage.getItem('farm')

var secondsLeft
if (window.localStorage.getItem('timeOnline') != null) {
    secondsLeft = Math.floor((Date.now() - window.localStorage.getItem('timeOnline')) / 1000); // сколько секунд меня не было
}
else {
    secondsLeft = 0
}


if (farm_status != null) {
    var newbee = Number(window.localStorage.getItem('eggs')) + Number(secondsLeft) * Number(farm_status)
    window.localStorage.setItem('eggs', newbee)
    document.getElementById('counter').innerHTML = newbee;
    }
    else {
        console.log('s')
    }

setInterval(() => {
    var now = Date.now()

    window.localStorage.setItem('timeOnline', now)
}, 2000)


setInterval(() =>{
    if (farm_status != null) {
        var newb = Number(window.localStorage.getItem('eggs')) + Number(farm_status);
        window.localStorage.setItem('eggs', newb);
        document.getElementById('counter').innerHTML = newb;
    }
    else {
        console.log('no farm')
    }

}, 1000)