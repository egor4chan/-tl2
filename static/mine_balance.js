var hash_balance = window.localStorage.getItem('balance');
var user_id = window.localStorage.getItem('user_id');


httpRequest = new XMLHttpRequest();

httpRequest.open('POST', 'b');
var data = JSON.stringify({"balance": hash_balance, "user_id": user_id});

httpRequest.send(data);
print('data was sent')