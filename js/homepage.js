window.onload = LoginPageBackGround();
function LoginPageBackGround(){
    document.body.style.backgroundImage = "url('img/homepage_bg.jpg')";
    document.body.style.backgroundSize = "1280px 800px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top center";
}
function mainGame2(){
    window.location.replace("MainGame2/chapter1.html");
}
function mainGamein(){
    document.querySelector('.modal-content').style.display = 'flex';
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
}
function mainGame2out(){
    document.querySelector('.modal-content').style.display = 'none';
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
}
var poketime = 0
function poke(){
    poketime ++;
    if(poketime <= 10){
    document.querySelector('.modal-content2').style.display = 'flex';
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    console.log
        setTimeout(codingCourse,2000);
        function codingCourse(){
            document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
            document.querySelector('.modal-content2').style.display = 'none';
        }
    }
    else if(poketime <= 19){
        document.querySelector('.modal-content2').style.display = 'flex';
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit3.png";
        console.log
        setTimeout(codingCourse,2000);
        function codingCourse(){
            document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
            document.querySelector('.modal-content2').style.display = 'none';
        }
    }
    else if(poketime == 20){
        document.getElementById('miaruko_microbit').style.display = 'none';
        document.querySelector('.bg-modal3').style.display = 'flex';
    }
    else{
        document.querySelector('.modal-content2').style.display = 'flex';
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit3.png";
        console.log
        setTimeout(codingCourse,2000);
        function codingCourse(){
            document.getElementById('miaruko_microbit').src="img/miaruko_microbit3.png";
            document.querySelector('.modal-content2').style.display = 'none';
        }
    }
}
function pokeclose(){
    document.getElementById('miaruko_microbit').style.display ='flex';
    document.querySelector('.bg-modal3').style.display = 'none';
}