
var balancew = window.localStorage.getItem('eggs');
var html_balance = document.getElementById('counter');

//window.localStorage.setItem('click', 1);
//window.localStorage.setItem('eggs', 90);


if (balancew != NaN & balancew != null) {
    html_balance.innerHTML = balancew;
}
else {
    html_balance.innerHTML = 0;
    window.localStorage.setItem('eggs', 0);
}

var powerr = window.localStorage.getItem('click');
var html_power = document.getElementById('power');



if (powerr != NaN & powerr != null) {
    html_power.innerHTML = powerr;
}
else {
    html_power.innerHTML = 1;
    window.localStorage.setItem('click', 1);
}

