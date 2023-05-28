window.onload = LoginPageBackGround();
function LoginPageBackGround(){
    document.body.style.backgroundImage = "url('img/Map0.png')";
    document.body.style.backgroundSize = "1280px 800px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top center";
    

}
function next(){
    document.querySelector('.bg-modal').style.display = 'none';
    document.querySelector('.bg-modal2').style.display = 'flex';
}
function next2(){
    document.querySelector('.bg-modal2').style.display = 'none';
    document.querySelector('.bg-modal3').style.display = 'flex';
}
function next3(){
    document.querySelector('.bg-modal3').style.display = 'none';
    document.querySelector('.bg-modal4').style.display = 'flex';
}
function next4(){
    document.querySelector('.bg-modal4').style.display = 'none';
    document.querySelector('.bg-modal5').style.display = 'flex';
}
function next5(){
    document.querySelector('.bg-modal5').style.display = 'none';
    document.querySelector('.bg-modal6').style.display = 'flex';
}
function next6(){
    document.querySelector('.bg-modal6').style.display = 'none';
    document.querySelector('.bg-modal7').style.display = 'flex';
}
function next7(){
    document.querySelector('.bg-modal7').style.display = 'none';
    document.querySelector('.bg-modal8').style.display = 'flex';
}
function next8(){
    document.querySelector('.bg-modal8').style.display = 'none';
    document.querySelector('.bg-modal9').style.display = 'flex';
}
function next9(){
    document.querySelector('.bg-modal9').style.display = 'none';
    document.querySelector('.bg-modal10').style.display = 'flex';
}
function next10(){
    document.querySelector('.bg-modal10').style.display = 'none';
    document.querySelector('.bg-modal11').style.display = 'flex';
    document.querySelector('.cube6').style.display = 'flex';
}
function next11(){
    document.querySelector('.bg-modal11').style.display = 'none';
    document.querySelector('.bg-modal12').style.display = 'flex';
    document.querySelector('.cube7').style.display = 'flex';
}
function next12(){
    document.querySelector('.bg-modal12').style.display = 'none';
    document.querySelector('.bg-modal13').style.display = 'flex';
    document.querySelector('.cube8').style.display = 'flex';
}
function next13(){
    document.querySelector('.bg-modal13').style.display = 'none';
    document.querySelector('.bg-modal14').style.display = 'flex';
}
function next14(){
    document.querySelector('.bg-modal14').style.display = 'none';
    document.querySelector('.bg-modal15').style.display = 'flex';
}
function next15(){
    document.querySelector('.bg-modal15').style.display = 'none';

}











function level1_1detalin(){
    document.querySelector('.modal-content16').style.display = 'flex';
}
function level1_1detalout(){
    document.querySelector('.modal-content16').style.display = 'none';
}

function level1_2detalin(){
    document.querySelector('.modal-content18').style.display = 'flex';
}
function level1_2detalout(){
    document.querySelector('.modal-content18').style.display = 'none';
}
function level1_3detalin(){
    document.querySelector('.modal-content20').style.display = 'flex';
}
function level1_3detalout(){
    document.querySelector('.modal-content20').style.display = 'none';
}


function chapter1_1(){
    document.querySelector('.bg-modal17').style.display = 'flex';
}
function chapter1_2(){
    document.querySelector('.bg-modal19').style.display = 'flex';
}
function chapter1_3(){
    document.querySelector('.bg-modal21').style.display = 'flex';
}



function chapterClose(){
    document.querySelector('.bg-modal17').style.display = 'none';
}
function chapterClose2(){
    document.querySelector('.bg-modal19').style.display = 'none';
}
function chapterClose3(){
    document.querySelector('.bg-modal21').style.display = 'none';
}
function chaper1_1Start(){
    window.location.replace("chapter1_1.html");
}
function chaper1_2Start(){
    window.location.replace("chapter1_2.html");
}
function chaper1_3Start(){
    window.location.replace("chapter1_3.html");
}
function quit(){
    let confirmAction = confirm("需要回到選單嗎？");
    if (confirmAction) {
        alert("かしこまりました，こちら案内する");
        window.location.replace("http://127.0.0.1/index/homepage.html");
    }
}
function logout(){
    let confirmAction = confirm("需要登出遊戲嗎？");
    if (confirmAction) {
        alert("かしこまりました，こちら案内する");
        window.location.replace("http://127.0.0.1/index/loginpage.html");
    }
}