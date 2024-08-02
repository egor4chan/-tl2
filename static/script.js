
function shake() {
    let ton = document.getElementById('clicker');
    ton.style.scale = '1.02';
    setTimeout(function() {
        ton.style.scale = '1';
    }, 100)
}

function click() {
    
    shake();
    let energy = document.getElementById('myenergy').innerHTML; // $('#myenergy').html();
    let htmlEnergy= document.getElementById('myenergy')
    let newEnergy = Number(energy) - 1;
    let balance = document.getElementById('balance').innerHTML;
    let htmlBalance = document.getElementById('balance')
    let newBalance = parseFloat(balance) + 0.000001;
    
    window.localStorage.setItem('balance', newBalance.toFixed(6));
    console.log('balance new is ', window.localStorage.getItem('balance'));

    if (Number(energy) != 0) {
        htmlEnergy.innerHTML = newEnergy;
        htmlBalance.innerHTML = newBalance.toFixed(6);
        
    }
    else {
        console.log('Energy limit!')
    }

    
}

function energy_limit() {
    let energy = document.getElementById('myenergy').innerHTML;
    if (Number(energy) < 100) {
        var new_energy = Number(energy) + 1;
        var r = document.getElementById('myenergy').innerHTML = new_energy;
        
    }
    else {
        console.log('energy is full');
    }
}

setInterval(energy_limit, 2000)

var clicker = document.getElementById('clicker');
clicker.onclick = click;
var nick = document.getElementById('nick');


function add_clicker_effect(x, y) {
    let el = document.createElement("h6");
    el.setAttribute('id', 'counter')
    el.innerHTML = '+1';
    el.style.position = 'absolute';
    el.style.top = `${y}px`
    el.style.left = `${x}px`
    document.body.appendChild(el)
    el.onclick = click;
    setTimeout(function() {
        el.remove();
    }, 200)
}

clicker.addEventListener('click', function (event) {
    // добавляем обработчик события "mousemove"
    const x = event.clientX; // получаем координату X мыши
    const y = event.clientY; // получаем координату Y мыши
  
    
    add_clicker_effect(x, y)
    
    console.log(`Координаты мыши: x=${x}, y=${y}`); // выводим координаты мыши в консоль
})