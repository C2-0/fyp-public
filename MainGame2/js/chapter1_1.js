window.onload = LoginPageBackGround();
function LoginPageBackGround(){
    document.body.style.backgroundImage = "url('img/chapter1_1.png')";
    document.body.style.backgroundSize = "1280px 800px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top center";
}
function next(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.dialog').style.display = 'none';
    document.querySelector('.close').style.display = 'none';
    document.querySelector('.dialog2').style.display = 'flex';
    document.querySelector('.close2').style.display = 'flex';
    document.querySelector('.photo1').style.display = 'flex';
}
function next2(){
    document.querySelector('.dialog2').style.display = 'none';
    document.querySelector('.close2').style.display = 'none';
    document.querySelector('.dialog3').style.display = 'flex';
    document.querySelector('.close3').style.display = 'flex';
}
function next3(){
    document.querySelector('.dialog3').style.display = 'none';
    document.querySelector('.close3').style.display = 'none';
    document.querySelector('.dialog4').style.display = 'flex';
    document.querySelector('.close4').style.display = 'flex';
}
function next4(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('.dialog4').style.display = 'none';
    document.querySelector('.close4').style.display = 'none';
    document.querySelector('.photo1').style.display = 'none';
    document.querySelector('.dialog5').style.display = 'flex';
    document.querySelector('.close5').style.display = 'flex';
    document.querySelector('.photo2').style.display = 'flex';
}
function next5(){
    document.querySelector('.dialog5').style.display = 'none';
    document.querySelector('.close5').style.display = 'none';
    document.querySelector('.dialog6').style.display = 'flex';
    document.querySelector('.close6').style.display = 'flex';
}
function next6(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.dialog6').style.display = 'none';
    document.querySelector('.close6').style.display = 'none';
    document.querySelector('.photo2').style.display = 'none';
    document.querySelector('.dialog7').style.display = 'flex';
    document.querySelector('.close7').style.display = 'flex';
}
function next7(){
    document.querySelector('.dialog7').style.display = 'none';
    document.querySelector('.close7').style.display = 'none';
    document.querySelector('.dialog8').style.display = 'flex';
    document.querySelector('.close8').style.display = 'flex';
}
function next8(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit4.png";
    document.getElementById("miaruko_microbit").style.left = "-240px";
    document.getElementById("miaruko_microbit").style.top = "100px";
    document.getElementById("miaruko_microbit").style.animationName = 'moving';
    document.querySelector('.dialog8').style.display = 'none';
    document.querySelector('.close8').style.display = 'none';
    document.querySelector('.dialog9').style.display = 'flex';
    console.log
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.close9').style.display = 'flex';
    }
}
function next9(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('.dialog9').style.display = 'none';
    document.querySelector('.close9').style.display = 'none';
    document.querySelector('.dialog10').style.display = 'flex';
    console.log
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.close10').style.display = 'flex';
    }
}
function next10(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.dialog10').style.display = 'none';
    document.querySelector('.close10').style.display = 'none';
    document.querySelector('.dialog11').style.display = 'flex';
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.answer4').style.display = 'flex';
        document.querySelector('.answer1').style.display = 'flex';
        document.querySelector('.answer2').style.display = 'flex';
        document.querySelector('.answer3').style.display = 'flex';
    }
}
function answer4(){
    document.getElementById('answer4').style.color = "red";
    document.getElementById("answer1").onclick = null;
    document.getElementById("answer2").onclick = null;
    document.getElementById("answer3").onclick = null;
    document.getElementById("answer4").onclick = null;
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit3.png";
    document.querySelector('.dialog11').style.display = 'none';
    document.querySelector('.dialog12').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close12').style.display = 'flex';
    }
}
function next11(){
    document.querySelector('.dialog12').style.display = 'none';
    document.querySelector('.close12').style.display = 'none';
    document.querySelector('.dialog13').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close13').style.display = 'flex';
    }
}
function next12(){
    window.location.replace("http://127.0.0.1/index/loginpage.html");
}
function answer1(){
    document.getElementById('answer1').style.color = "red";
    document.getElementById("answer1").onclick = null;
    document.getElementById("answer2").onclick = null;
    document.getElementById("answer3").onclick = null;
    document.getElementById("answer4").onclick = null;
    document.querySelector('.dialog11').style.display = 'none';
    document.querySelector('.dialog14').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close14').style.display = 'flex';
    }
}
function answer3(){
    document.getElementById('answer3').style.color = "red";
    document.getElementById("answer1").onclick = null;
    document.getElementById("answer2").onclick = null;
    document.getElementById("answer3").onclick = null;
    document.getElementById("answer4").onclick = null;
    document.querySelector('.dialog11').style.display = 'none';
    document.querySelector('.dialog14').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close14').style.display = 'flex';
    }
}
function next13(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('.dialog14').style.display = 'none';
    document.querySelector('.close14').style.display = 'none';
    document.querySelector('.dialog15').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close15').style.display = 'flex';
    }
}
function next14(){
    window.location.replace("http://127.0.0.1/index/MainGame2/chapter1.html");
}
function answer2(){
    document.getElementById('answer2').style.color = "blue";
    document.getElementById("answer1").onclick = null;
    document.getElementById("answer2").onclick = null;
    document.getElementById("answer3").onclick = null;
    document.getElementById("answer4").onclick = null;
    document.querySelector('.dialog11').style.display = 'none';
    document.querySelector('.dialog16').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close16').style.display = 'flex';
    }
}
function next16(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('.answer1').style.display = 'none';
    document.querySelector('.answer2').style.display = 'none';
    document.querySelector('.answer3').style.display = 'none';
    document.querySelector('.answer4').style.display = 'none';
    document.querySelector('.dialog16').style.display = 'none';
    document.querySelector('.close16').style.display = 'none';
    document.querySelector('.dialog17').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close17').style.display = 'flex';
    }
}
function next17(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.dialog17').style.display = 'none';
    document.querySelector('.close17').style.display = 'none';
    document.querySelector('.dialog18').style.display = 'flex';
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.answer5').style.display = 'flex';
        document.querySelector('.answer6').style.display = 'flex';
        document.querySelector('.answer7').style.display = 'flex';
        document.querySelector('.answer8').style.display = 'flex';
    }
}
function answer5(){
    document.getElementById('answer5').style.color = "red";
    document.getElementById("answer5").onclick = null;
    document.getElementById("answer6").onclick = null;
    document.getElementById("answer7").onclick = null;
    document.getElementById("answer8").onclick = null;
    document.querySelector('.dialog18').style.display = 'none';
    document.querySelector('.dialog19').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close19').style.display = 'flex';
    }
}
function next19(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('.answer1').style.display = 'none';
    document.querySelector('.answer2').style.display = 'none';
    document.querySelector('.answer3').style.display = 'none';
    document.querySelector('.answer4').style.display = 'none';
    document.querySelector('.dialog19').style.display = 'none';
    document.querySelector('.close19').style.display = 'none';
    document.querySelector('.dialog15').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close15').style.display = 'flex';
    }
}
function answer6(){
    document.getElementById('answer6').style.color = "red";
    document.getElementById("answer5").onclick = null;
    document.getElementById("answer6").onclick = null;
    document.getElementById("answer7").onclick = null;
    document.getElementById("answer8").onclick = null;
    document.querySelector('.dialog18').style.display = 'none';
    document.querySelector('.dialog19').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close19').style.display = 'flex';
    }
}
function answer8(){
    document.getElementById('answer8').style.color = "red";
    document.getElementById("answer5").onclick = null;
    document.getElementById("answer6").onclick = null;
    document.getElementById("answer7").onclick = null;
    document.getElementById("answer8").onclick = null;
    document.querySelector('.dialog18').style.display = 'none';
    document.querySelector('.dialog19').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close19').style.display = 'flex';
    }
}
function answer7(){
    document.getElementById('answer7').style.color = "blue";
    document.getElementById("answer5").onclick = null;
    document.getElementById("answer6").onclick = null;
    document.getElementById("answer7").onclick = null;
    document.getElementById("answer8").onclick = null;
    document.querySelector('.dialog18').style.display = 'none';
    document.querySelector('.dialog20').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close20').style.display = 'flex';
    }
}
function next20(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.answer5').style.display = 'none';
    document.querySelector('.answer6').style.display = 'none';
    document.querySelector('.answer7').style.display = 'none';
    document.querySelector('.answer8').style.display = 'none';
    document.querySelector('.dialog20').style.display = 'none';
    document.querySelector('.close20').style.display = 'none';
    document.querySelector('.dialog21').style.display = 'flex';
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.close21').style.display = 'flex';
    }
}
function next21(){
    document.querySelector('.dialog21').style.display = 'none';
    document.querySelector('.close21').style.display = 'none';
    document.querySelector('.dialog22').style.display = 'flex';
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.answer9').style.display = 'flex';
        document.querySelector('.answer10').style.display = 'flex';
        document.querySelector('.answer11').style.display = 'flex';
        document.querySelector('.answer12').style.display = 'flex';
        document.querySelector('.answer13').style.display = 'flex';
        document.querySelector('.answer14').style.display = 'flex';
        document.querySelector('.answer15').style.display = 'flex';
        document.querySelector('.answer16').style.display = 'flex';
    }
}
function answer16(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit4.png";
    document.getElementById("miaruko_microbit").style.animationName = 'moving2';
    document.getElementById("miaruko_microbit").style.animationDuration = '0.5s';
    document.getElementById('answer16').style.color = "red";
    document.querySelector('.dialog22').style.display = 'none';
    document.querySelector('.dialog23').style.display = 'none';
    document.querySelector('.dialog24').style.display = 'none';
    document.getElementById("answer9").onclick = null;
    document.getElementById("answer10").onclick = null;
    document.getElementById("answer11").onclick = null;
    document.getElementById("answer12").onclick = null;
    document.getElementById("answer13").onclick = null;
    document.getElementById("answer14").onclick = null;
    document.getElementById("answer15").onclick = null;
    document.getElementById("answer16").onclick = null;
    document.querySelector('.dialog23_1').style.display = 'flex';
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.close23_1').style.display = 'flex';
    }
}
function next23(){
    window.location.reload();
}
function answer15(){
    document.querySelector('.dialog22').style.display = 'none';
    document.querySelector('.dialog24').style.display = 'flex';
    document.getElementById("answer15").style.color = "red";
    document.getElementById("answer15").onclick = null;
}
function answer9(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.getElementById('answer9').style.color = "red";
    document.getElementById("answer9").onclick = null;
    document.getElementById("answer10").onclick = null;
    document.getElementById("answer11").onclick = null;
    document.getElementById("answer12").onclick = null;
    document.getElementById("answer13").onclick = null;
    document.getElementById("answer14").onclick = null;
    document.getElementById("answer15").onclick = null;
    document.getElementById("answer16").onclick = null;
    document.querySelector('.dialog22').style.display = 'none';
    document.querySelector('.dialog24').style.display = 'none';
    document.querySelector('.dialog25').style.display = 'flex';
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.close25').style.display = 'flex';
        document.querySelector('.close25_1').style.display = 'flex';
    }
}
function answer10(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.getElementById('answer10').style.color = "red";
    document.getElementById("answer9").onclick = null;
    document.getElementById("answer10").onclick = null;
    document.getElementById("answer11").onclick = null;
    document.getElementById("answer12").onclick = null;
    document.getElementById("answer13").onclick = null;
    document.getElementById("answer14").onclick = null;
    document.getElementById("answer15").onclick = null;
    document.getElementById("answer16").onclick = null;
    document.querySelector('.dialog22').style.display = 'none';
    document.querySelector('.dialog24').style.display = 'none';
    document.querySelector('.dialog25').style.display = 'flex';
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.close25').style.display = 'flex';
        document.querySelector('.close25_1').style.display = 'flex';
    }
}
function answer11(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.getElementById('answer11').style.color = "red";
    document.getElementById("answer9").onclick = null;
    document.getElementById("answer10").onclick = null;
    document.getElementById("answer11").onclick = null;
    document.getElementById("answer12").onclick = null;
    document.getElementById("answer13").onclick = null;
    document.getElementById("answer14").onclick = null;
    document.getElementById("answer15").onclick = null;
    document.getElementById("answer16").onclick = null;
    document.querySelector('.dialog22').style.display = 'none';
    document.querySelector('.dialog24').style.display = 'none';
    document.querySelector('.dialog25').style.display = 'flex';
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.close25').style.display = 'flex';
        document.querySelector('.close25_1').style.display = 'flex';
    }
}
function answer12(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.getElementById('answer12').style.color = "red";
    document.getElementById("answer9").onclick = null;
    document.getElementById("answer10").onclick = null;
    document.getElementById("answer11").onclick = null;
    document.getElementById("answer12").onclick = null;
    document.getElementById("answer13").onclick = null;
    document.getElementById("answer14").onclick = null;
    document.getElementById("answer15").onclick = null;
    document.getElementById("answer16").onclick = null;
    document.querySelector('.dialog22').style.display = 'none';
    document.querySelector('.dialog24').style.display = 'none';
    document.querySelector('.dialog25').style.display = 'flex';
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.close25').style.display = 'flex';
        document.querySelector('.close25_1').style.display = 'flex';
    }
}
function answer13(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.getElementById('answer13').style.color = "red";
    document.getElementById("answer9").onclick = null;
    document.getElementById("answer10").onclick = null;
    document.getElementById("answer11").onclick = null;
    document.getElementById("answer12").onclick = null;
    document.getElementById("answer13").onclick = null;
    document.getElementById("answer14").onclick = null;
    document.getElementById("answer15").onclick = null;
    document.getElementById("answer16").onclick = null;
    document.querySelector('.dialog22').style.display = 'none';
    document.querySelector('.dialog24').style.display = 'none';
    document.querySelector('.dialog25').style.display = 'flex';
    setTimeout(codingCourse,2000);
    function codingCourse(){
        document.querySelector('.close25').style.display = 'flex';
        document.querySelector('.close25_1').style.display = 'flex';
    }
}
function answer14(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.getElementById('answer14').style.color = "blue";
    document.getElementById("answer9").onclick = null;
    document.getElementById("answer10").onclick = null;
    document.getElementById("answer11").onclick = null;
    document.getElementById("answer12").onclick = null;
    document.getElementById("answer13").onclick = null;
    document.getElementById("answer14").onclick = null;
    document.getElementById("answer15").onclick = null;
    document.getElementById("answer16").onclick = null;
    document.querySelector('.dialog22').style.display = 'none';
    document.querySelector('.dialog24').style.display = 'none';
    document.querySelector('.dialog27').style.display = 'flex';
    setTimeout(codingCourse,3000);
    function codingCourse(){
        document.querySelector('.close27').style.display = 'flex';
    }
}
function next25(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.dialog25').style.display = 'none';
    document.querySelector('.close25').style.display = 'none';
    document.querySelector('.close25_1').style.display = 'none';
    document.querySelector('.dialog26').style.display = 'flex';
    setTimeout(codingCourse,4000);
    function codingCourse(){
        document.querySelector('.dialog26').style.display = 'none';
        document.querySelector('.dialog15').style.display = 'flex';
        setTimeout(codingCourse,3000);
        function codingCourse(){
        document.querySelector('.close15').style.display = 'flex';
        }
    }
}
function next25_1(){
    document.querySelector('.dialog25').style.display = 'none';
    document.querySelector('.close25_1').style.display = 'none';
    document.querySelector('.close25').style.display = 'none';
    document.querySelector('.dialog15').style.display = 'flex';
    setTimeout(codingCourse,3000);
        function codingCourse(){
        document.querySelector('.close15').style.display = 'flex';
    }
}
function next27(){
    document.querySelector('.dialog27').style.display = 'none';
    document.querySelector('.close27').style.display = 'none';
    document.querySelector('.answer9').style.display = 'none';
    document.querySelector('.answer10').style.display = 'none';
    document.querySelector('.answer11').style.display = 'none';
    document.querySelector('.answer12').style.display = 'none';
    document.querySelector('.answer13').style.display = 'none';
    document.querySelector('.answer14').style.display = 'none';
    document.querySelector('.answer15').style.display = 'none';
    document.querySelector('.answer16').style.display = 'none';
    document.querySelector('.dialog28').style.display = 'flex';
    setTimeout(codingCourse,3000);
        function codingCourse(){
            document.querySelector('.close28').style.display = 'flex';
    }
}
function next28(){
    window.location.replace("http://127.0.0.1/index/MainGame2/chapter1.html");
}
function quit(){
    let confirmAction = confirm("需要回到關卡列表嗎？");
    if (confirmAction) {
        alert("かしこまりました，こちら案内する");
        window.location.replace("http://127.0.0.1/index/MainGame2/chapter1.html");
    }
}
function logout(){
	let confirmAction = confirm("需要登出遊戲嗎？");
	if (confirmAction) {
		alert("かしこまりました，こちら案内する");
		window.location.replace("http://127.0.0.1/index/loginpage.html");
	}
}