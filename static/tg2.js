var WebApp = window.Telegram.WebApp;
WebApp.expand();

var username = WebApp.initDataUnsafe.user.username;
localStorage.setItem('nick', username);

