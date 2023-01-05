colors = [
    {"color":"brown", "hex":"#a85807", "path":"images/brown-32x.png"},
    {"color":"pink","hex":"#ec86f0", "path":"images/pink-32x.png"},
    {"color":"red","hex":"#ed3472", "path":"images/red-32x.png"},
    {"color":"orange","hex":"#f79225", "path":"images/orange-32x.png"},
    {"color":"yellow","hex":"#f2d635", "path":"images/yellow-32x.png"},
    {"color":"green","hex":"#5ee04a", "path":"images/green-32x.png"}];

let pinballs = 0;
function calculate() {
    let money = document.getElementById("EuroInput").value;
    pinballs = money*20;
    if(money == '69') pinballs = 420;
    if(money == '420') pinballs = 69;
    draw();
}

let pinballdata = []
function draw(noInt) {
    let randint,
        pv = "",
        dots = document.getElementsByClassName("dot"),
        imgs = document.getElementsByClassName("img"); //TODO: Fill in class name
    if(RTX == "off") {
        for(let i=0;i<pinballs;i++) {
            pv += '        <span class="dot"></span>';
        }
    } else {
        for(let i=0;i<pinballs;i++) {
            pv += '        <img class="img">';
        }
    }
    document.getElementById("pv").innerHTML = pv;
    document.getElementById("PinballP").innerHTML = pinballs;
    for(let j=0;j<pinballs;j++) {
        if(noInt) {
            randint = pinballdata[j];
        } else {
            randint = Math.floor(Math.random()*6);
        }
        if(RTX == "off") {
            dots[j].style.background=`radial-gradient(circle at 100px 100px, ${colors[randint].hex} 85%, rgba(255, 255, 255, 0.6) 100%)`;
        } else {
            imgs[j].src=colors[randint].path;
            imgs[j].style.transform= `rotate(${Math.floor(Math.random()*356)}deg)`;
        }
        pinballdata[j] = randint;
        console.log("Pinballdata set to: " + pinballdata[j]);
    }
}

let RTX = "off";
function toggleRTX(){
    let div = document.getElementsByClassName('rtx');
    if(RTX == "off"){
        RTX = "on";
        div[0].style.background = '#76b900';
        div[0].style.color = 'black';
        div[0].innerHTML = 'RTX: ON';
        console.log("RTX: " + RTX);
    } else {
        RTX = "off";
        div[0].style.background = 'rgb(49, 49, 49)';
        div[0].style.color = 'white';
        div[0].innerHTML = 'RTX: OFF';
        console.log("RTX: " + RTX);
    }
    draw(true);
}