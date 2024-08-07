var WebApp = window.Telegram.WebApp;
WebApp.expand();

var username = WebApp.initDataUnsafe.user.username;

function alert_100() {
    alert(`@${username}, you are pure.`)
}

