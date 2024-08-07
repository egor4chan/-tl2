function buy1() {
    var newDiv = document.createElement("div");
    var newH1 = document.createElement("h1");
    var newBTN = document.createElement("button");

    setTimeout(() => {
        newDiv.style.bottom = '0px'
    }, 10);

    newDiv.setAttribute('id', 'pos-cloud');
    newBTN.setAttribute('id', 'pos-btn');
    newBTN.onclick = removeit

    document.body.appendChild(newDiv);
    document.body.appendChild(newH1);
    document.body.appendChild(newBTN);

    newH1.textContent = 'Gas Fee Master';
    newBTN.innerHTML = 'BUY';

    document.getElementsByTagName('body')[0].style.overflowY = "none";

}

function removeit() {
    document.getElementById('pos-cloud').remove()
    document.getElementById('pos-btn').remove()

    document.getElementsByTagName('body')[0].style.overflowY = "auto";
}