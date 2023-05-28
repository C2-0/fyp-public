window.onload = LoginPageBackGround();
function LoginPageBackGround(){
    document.body.style.backgroundImage = "url('img/Login_bg2.png')";
    document.body.style.backgroundSize = "1280px 800px"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top center";
    var el = document.getElementById("miaruko_microbit");
    fadeIn(el);
}
function fadeIn(el) {
el.style.opacity = 0;
var tick = function () {
    el.style.opacity = +el.style.opacity + 0.02;
    if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
};
tick();
}
function logincheck(){
    document.querySelector('.bg-modal2').style.display = 'flex';
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.close2').addEventListener('click', function(){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.bg-modal2').style.display = 'none';
    })
}
function register(){
    document.querySelector('.bg-modal').style.display = 'flex';
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.close').addEventListener('click', function(){
        document.querySelector('.bg-modal').style.display = 'none';
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    })
}
function login(){
    window.location.replace("loading.html");
}

function checkPass(){

var password = document.getElementById('pw1');
var password2  = document.getElementById('pw2');

var message = document.getElementById('confirm-message2');

var good_color = "#66cc66";
var bad_color  = "#ff6666";

if(password.value == password2.value){
    password2.style.backgroundColor = good_color;
    message.style.color = good_color;
}else{
    password2.style.backgroundColor = bad_color;
    message.style.color = bad_color;
}
} 