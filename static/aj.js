var hash_balance = window.localStorage.getItem('balance');

var user_id = document.getElementById('nick').innerHTML;

httpRequest = new XMLHttpRequest();

httpRequest.open('POST', 'b');
var data = JSON.stringify({"balance": hash_balance});
httpRequest.send(data);
print('data was sent')

// 3alYhMqd@l61