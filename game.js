var clicker = document.getElementById('egg');
var balance = document.getElementById('counter');
var power_html = document.getElementById('power').innerHTML;




function add_clicker_effect(x, y) {
    let el = document.createElement("h6");
    el.setAttribute('id', 'cc')
    el.innerHTML =  `+${document.getElementById('power').innerHTML}`
    el.style.position = 'absolute';
    el.style.top = `${y}px`
    el.style.left = `${x}px`
    document.body.appendChild(el)
    el.onclick = click;
    setTimeout(function() {
        el.remove();
    }, 200)
}



clicker.addEventListener('click', function(event) {
    click()
    add_clicker_effect(event.clientX, event.clientY)
    var eggimg = document.getElementById('egg');
    eggimg.style.scale = '1.03';
    setTimeout(() => eggimg.style.scale = '1', 100);
})


function click() {
    console.log('pwoerrrrrr', power_html)
    var new_balance = Number(balance.innerHTML) + Number(document.getElementById('power').innerHTML);
    balance.innerHTML = new_balance;
    window.localStorage.setItem('eggs', new_balance);

    
}



console.log('ssadasdds')

function upgrade() {
    var levels = {1: 100, 2: 300, 3: 1000, 4: 3000, 5: 5000, 6: 10000, 7: 30000, 8: 100000, 9: 200000, 10: 500000}
    var erer = Number(window.localStorage.getItem('click'));
    var price = levels[erer]
    

    if (Number(price) <= window.localStorage.getItem('eggs')){
        var resultBalance = window.localStorage.getItem('eggs') - Number(price)
        window.localStorage.setItem('eggs', resultBalance);

        var clickPower = Number(window.localStorage.getItem('click'));
        var newClickPower = clickPower + 1;
        console.log('new click power ', newClickPower)
        window.localStorage.setItem('click', newClickPower)
        document.getElementById('up').innerHTML = `Buy - ${levels[newClickPower]}`;
        document.getElementById('counter').innerHTML = resultBalance;
    }
    else {
        alert_100()
    }
    
}





