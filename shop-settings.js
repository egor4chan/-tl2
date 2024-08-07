var levels = {1: 100, 2: 300, 3: 1000, 4: 3000, 5: 5000, 6: 10000, 7: 30000, 8: 100000, 9: 200000, 10: 500000}
var ererer = Number(window.localStorage.getItem('click'));
var priceee = levels[ererer]
document.getElementById('up').innerHTML = `Buy - ${priceee} 🥚`;
