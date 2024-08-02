var balance = window.localStorage.getItem('balance');

if (balance != null) {
    var r = document.getElementById('balance').innerHTML = balance;
}
else {
    var r = document.getElementById('balance').innerHTML = 0.000000;
    window.localStorage.setItem('balance', 0.000000);
}

