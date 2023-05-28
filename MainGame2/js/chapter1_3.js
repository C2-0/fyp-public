window.onload = LoginPageBackGround();
function LoginPageBackGround(){
    document.body.style.backgroundImage = "url('img/chapter1_1.png')";
    document.body.style.backgroundSize = "1280px 800px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top center";
}
function next(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('.dialog').style.display = 'none';
    document.querySelector('.close').style.display = 'none';
    document.querySelector('.dialog2').style.display = 'flex';
    document.querySelector('.close2').style.display = 'flex';
}
function next2(){
    document.querySelector('.dialog2').style.display = 'none';
    document.querySelector('.close2').style.display = 'none';
    document.querySelector('.dialog3').style.display = 'flex';
    document.querySelector('.close3').style.display = 'flex';
}
function next3(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.dialog3').style.display = 'none';
    document.querySelector('.close3').style.display = 'none';
    document.querySelector('.dialog4').style.display = 'flex';
    document.querySelector('.close4').style.display = 'flex';
    document.querySelector('.photo10').style.display = 'flex';
    document.querySelector('.photo11').style.display = 'flex';
}
function downloadFile1(url, fileName){
    let link = document.createElement("a");
    link.setAttribute("download",fileName);
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
}
function next4(){
    document.querySelector('.dialog4').style.display = 'none';
    document.querySelector('.close4').style.display = 'none';
    document.querySelector('.dialog5').style.display = 'flex';
    document.querySelector('.close5').style.display = 'flex';
    document.querySelector('.photo10').style.display = 'none';
    document.querySelector('.photo11').style.display = 'none';
    document.querySelector('.microbit_iframe').style.display = 'flex';
}
function next5(){
    document.querySelector('.dialog5').style.display = 'none';
    document.querySelector('.close5').style.display = 'none';
    document.querySelector('.dialog6').style.display = 'flex';
    document.querySelector('.close6').style.display = 'flex';
    document.querySelector('.microbit_iframe').style.display = 'none';
    document.querySelector('.firmware').style.display = 'flex';
}
function next6_1(){
    window.open("https://microbit.org/get-started/user-guide/firmware/", '_blank');
}
function next6(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('.dialog6').style.display = 'none';
    document.querySelector('.close6').style.display = 'none';
    document.querySelector('.dialog7').style.display = 'flex';
    document.querySelector('.close7').style.display = 'flex';
}
function next7(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.dialog7').style.display = 'none';
    document.querySelector('.close7').style.display = 'none';
    document.querySelector('.firmware').style.display = 'none';
    document.querySelector('.dialog8').style.display = 'flex';
    document.querySelector('.close8').style.display = 'flex';
}
function next8(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('.dialog8').style.display = 'none';
    document.querySelector('.close8').style.display = 'none';
    document.querySelector('.dialog9').style.display = 'flex';
    document.querySelector('.close9').style.display = 'flex';
}
function next9(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.dialog9').style.display = 'none';
    document.querySelector('.close9').style.display = 'none';
    document.querySelector('.dialog10').style.display = 'flex';
    document.querySelector('.close10').style.display = 'flex';
    document.querySelector('.photo12').style.display = 'flex';
}
function next10(){
    document.querySelector('.dialog10').style.display = 'none';
    document.querySelector('.close10').style.display = 'none';
    document.querySelector('.dialog11').style.display = 'flex';
    document.querySelector('.photo12').style.display = 'none';
    document.querySelector('.productid').style.display = 'flex';
    document.querySelector('.productid_text').style.display = 'flex';
    document.querySelector('.vendorid').style.display = 'flex';
    document.querySelector('.vendorid_text').style.display = 'flex';
    document.querySelector('.productname').style.display = 'flex';
    document.querySelector('.productname_text').style.display = 'flex';
        setTimeout(codingCourse,8000);
        function codingCourse(){
            var productid_text_check = document.getElementById("productid_text").innerHTML;
            if(productid_text_check == 'Null'){
                document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
                document.querySelector('.dialog11').style.display = 'none';
                document.querySelector('.dialog12').style.display = 'flex';
                setTimeout(codingCourse,8000);
                function codingCourse(){
                    var productid_text_check = document.getElementById("productid_text").innerHTML;
                    if(productid_text_check == 'Null'){
                        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
                        document.querySelector('.dialog12').style.display = 'none';
                        document.querySelector('.dialog13').style.display = 'flex';
                        setTimeout(codingCourse,8000);
                        function codingCourse(){
                            var productid_text_check = document.getElementById("productid_text").innerHTML;
                            if(productid_text_check == 'Null'){
                                document.getElementById('miaruko_microbit').src="img/miaruko_microbit3.png";
                                document.querySelector('.dialog13').style.display = 'none';
                                document.querySelector('.dialog14').style.display = 'flex';
                                setTimeout(codingCourse,8000);
                                function codingCourse(){
                                    var productid_text_check = document.getElementById("productid_text").innerHTML;
                                        if(productid_text_check == 'Null'){
                                        document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
                                        document.querySelector('.dialog14').style.display = 'none';
                                        document.querySelector('.dialog15').style.display = 'flex';
                                        document.querySelector('.productid').style.display = 'none';
                                        document.querySelector('.productid_text').style.display = 'none';
                                        document.querySelector('.vendorid').style.display = 'none';
                                        document.querySelector('.vendorid_text').style.display = 'none';
                                        document.querySelector('.productname').style.display = 'none';
                                        document.querySelector('.productname_text').style.display = 'none';
                                        document.getElementById('connect').style.display = 'none';
                                        document.getElementById('send').style.display = 'none';
                                        document.getElementById('quit').style.display = 'none';
                                        document.getElementById('logout').style.display = 'none';
                                        document.body.style.backgroundImage = "url('img/chapter1_0.png')";
                                        setTimeout(codingCourse,4000);
                                        function codingCourse(){
                                            document.querySelector('.dialog15').style.display = 'none';
                                            document.getElementById('font-name').style.display = 'none';
                                            setTimeout(codingCourse,4000);
                                            function codingCourse(){
                                                document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
                                                document.querySelector('.dialog16').style.display = 'flex';
                                                document.getElementById('font-name').style.display = 'flex';
                                                document.body.style.backgroundImage = "url('img/chapter1_1.png')";
                                                setTimeout(codingCourse,4000);
                                                function codingCourse(){
                                                    window.location.replace("http://127.0.0.1/index/MainGame2/chapter1_3.html");
                                                }
                                            }
                                        }
                                    }
                                    else{
                                        next16();
                                    }
                                }
                            }
                            else{
                                next16();
                            }
                        }
                    }
                    else{
                        next16();
                    }
                }
            }
            else{
                next16();
            }
        }
}
function next16(){
    document.querySelector('.dialog11').style.display = 'none';
    document.querySelector('.dialog12').style.display = 'none';
    document.querySelector('.dialog13').style.display = 'none';
    document.querySelector('.dialog14').style.display = 'none';
    document.querySelector('.dialog15').style.display = 'none';
    document.querySelector('.dialog17').style.display = 'flex';
    setTimeout(codingCourse,4000);
    function codingCourse(){
        document.querySelector('.close17').style.display = 'flex';
    }
}
function next17(){
    document.querySelector('.dialog17').style.display = 'none';
    document.querySelector('.close17').style.display = 'none';
    document.querySelector('.dialog18').style.display = 'flex';
    setTimeout(codingCourse,4000);
    function codingCourse(){
        document.querySelector('.close18').style.display = 'flex';
    }
}
function next18(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('.productid').style.display = 'none';
    document.querySelector('.productid_text').style.display = 'none';
    document.querySelector('.vendorid').style.display = 'none';
    document.querySelector('.vendorid_text').style.display = 'none';
    document.querySelector('.productname').style.display = 'none';
    document.querySelector('.productname_text').style.display = 'none';
    document.querySelector('.dialog18').style.display = 'none';
    document.querySelector('.close18').style.display = 'none';
    document.querySelector('.dialog19').style.display = 'flex';
    document.querySelector('.light').style.display = 'flex';
    document.querySelector('.light_text').style.display = 'flex';
    document.querySelector('.temp').style.display = 'flex';
    document.querySelector('.temp_text').style.display = 'flex';
    document.querySelector('.speed').style.display = 'flex';
    document.querySelector('.speed_text').style.display = 'flex';
    document.querySelector('.rotate').style.display = 'flex';
    document.querySelector('.rotate_text').style.display = 'flex';
    setTimeout(codingCourse,4000);
    function codingCourse(){
        document.querySelector('.close19').style.display = 'flex';
    }
}
function next19(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.dialog19').style.display = 'none';
    document.querySelector('.close19').style.display = 'none';
    document.querySelector('.dialog20').style.display = 'flex';
    document.querySelector('.temp').style.display = 'none';
    document.querySelector('.temp_text').style.display = 'none';
    document.querySelector('.speed').style.display = 'none';
    document.querySelector('.speed_text').style.display = 'none';
    document.querySelector('.rotate').style.display = 'none';
    document.querySelector('.rotate_text').style.display = 'none';
    checkLightText();
}
function checkLightText(){
    if(document.getElementById("light_text").innerHTML == '0'){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
        setTimeout(checkLightText2, 1000);
        document.querySelector('.dialog20').style.display = 'none';
        document.querySelector('.dialog21').style.display = 'flex';
        document.querySelector('.dialog22').style.display = 'none';
        document.querySelector('.dialog23').style.display = 'none';
        document.querySelector('.dialog24').style.display = 'none';
        document.querySelector('.dialog25').style.display = 'none';
    }else{
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog20').style.display = 'flex';
        document.querySelector('.dialog21').style.display = 'none';
        document.querySelector('.dialog22').style.display = 'none';
        document.querySelector('.dialog23').style.display = 'none';
        document.querySelector('.dialog24').style.display = 'none';
        document.querySelector('.dialog25').style.display = 'none';
        setTimeout(checkLightText, 1000);
    }
}
function checkLightText2(){
    if(document.getElementById("light_text").innerHTML == '0'){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
        setTimeout(checkLightText3, 1000);
        document.querySelector('.dialog20').style.display = 'none';
        document.querySelector('.dialog21').style.display = 'none';
        document.querySelector('.dialog22').style.display = 'flex';
        document.querySelector('.dialog23').style.display = 'none';
        document.querySelector('.dialog24').style.display = 'none';
        document.querySelector('.dialog25').style.display = 'none';
    }else{
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog20').style.display = 'flex';
        document.querySelector('.dialog21').style.display = 'none';
        document.querySelector('.dialog22').style.display = 'none';
        document.querySelector('.dialog23').style.display = 'none';
        document.querySelector('.dialog24').style.display = 'none';
        document.querySelector('.dialog25').style.display = 'none';
        setTimeout(checkLightText, 1000);
    }
}
function checkLightText3(){
    if(document.getElementById("light_text").innerHTML == '0'){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
        document.querySelector('.dialog20').style.display = 'flex';
        setTimeout(checkLightText4, 1000);
        document.querySelector('.dialog20').style.display = 'none';
        document.querySelector('.dialog21').style.display = 'none';
        document.querySelector('.dialog22').style.display = 'none';
        document.querySelector('.dialog23').style.display = 'flex';
        document.querySelector('.dialog24').style.display = 'none';
        document.querySelector('.dialog25').style.display = 'none';
    }else{
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog20').style.display = 'flex';
        document.querySelector('.dialog21').style.display = 'none';
        document.querySelector('.dialog22').style.display = 'none';
        document.querySelector('.dialog23').style.display = 'none';
        document.querySelector('.dialog24').style.display = 'none';
        document.querySelector('.dialog25').style.display = 'none';
        setTimeout(checkLightText, 1000);
    }
}
function checkLightText4(){
    if(document.getElementById("light_text").innerHTML == '0'){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
        setTimeout(checkLightText5, 1000);
        document.querySelector('.dialog20').style.display = 'none';
        document.querySelector('.dialog21').style.display = 'none';
        document.querySelector('.dialog22').style.display = 'none';
        document.querySelector('.dialog23').style.display = 'none';
        document.querySelector('.dialog24').style.display = 'flex';
        document.querySelector('.dialog25').style.display = 'none';
    }else{
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog20').style.display = 'flex';
        document.querySelector('.dialog21').style.display = 'none';
        document.querySelector('.dialog22').style.display = 'none';
        document.querySelector('.dialog23').style.display = 'none';
        document.querySelector('.dialog24').style.display = 'none';
        document.querySelector('.dialog25').style.display = 'none';
        setTimeout(checkLightText, 1000);
    }
}
function checkLightText5(){
    if(document.getElementById("light_text").innerHTML == '0'){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
        document.querySelector('.dialog20').style.display = 'none';
        document.querySelector('.dialog21').style.display = 'none';
        document.querySelector('.dialog22').style.display = 'none';
        document.querySelector('.dialog23').style.display = 'none';
        document.querySelector('.dialog24').style.display = 'none';
        document.querySelector('.dialog25').style.display = 'flex';
        setTimeout(checkLightText6, 1000);
    }else{
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog20').style.display = 'flex';
        document.querySelector('.dialog21').style.display = 'none';
        document.querySelector('.dialog22').style.display = 'none';
        document.querySelector('.dialog23').style.display = 'none';
        document.querySelector('.dialog24').style.display = 'none';
        document.querySelector('.dialog25').style.display = 'none';
        setTimeout(checkLightText, 1000);
    }
}
function checkLightText6(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('.dialog25').style.display = 'none';
    document.querySelector('.dialog26').style.display = 'flex';
    setTimeout(codingCourse,4000);
    function codingCourse(){
        document.querySelector('.close26').style.display = 'flex';
    }
}
function next26(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    document.querySelector('.light').style.display = 'none';
    document.querySelector('.light_text').style.display = 'none';
    document.querySelector('.isShake').style.display = 'flex';
    document.querySelector('.isShake_text').style.display = 'flex';
    document.querySelector('.dialog26').style.display = 'none';
    document.querySelector('.close26').style.display = 'none';
    document.querySelector('.dialog27').style.display = 'flex';
    checkShakeText();
}
function checkShakeText(){
    if(document.getElementById("isShake_text").innerHTML == 1){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
        setTimeout(checkShakeText2, 1000);
        document.querySelector('.dialog27').style.display = 'none';
        document.querySelector('.dialog28').style.display = 'flex';
        document.querySelector('.dialog29').style.display = 'none';
        document.querySelector('.dialog30').style.display = 'none';
        document.querySelector('.dialog31').style.display = 'none';
        document.querySelector('.dialog32').style.display = 'none';
    }else{
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog27').style.display = 'flex';
        document.querySelector('.dialog28').style.display = 'none';
        document.querySelector('.dialog29').style.display = 'none';
        document.querySelector('.dialog30').style.display = 'none';
        document.querySelector('.dialog31').style.display = 'none';
        document.querySelector('.dialog32').style.display = 'none';
        setTimeout(checkShakeText, 1000);
    }
}
function checkShakeText2(){
    if(document.getElementById("isShake_text").innerHTML == 1){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
        setTimeout(checkShakeText3, 1000);
        document.querySelector('.dialog27').style.display = 'none';
        document.querySelector('.dialog28').style.display = 'none';
        document.querySelector('.dialog29').style.display = 'flex';
        document.querySelector('.dialog30').style.display = 'none';
        document.querySelector('.dialog31').style.display = 'none';
        document.querySelector('.dialog32').style.display = 'none';
    }else{
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog27').style.display = 'flex';
        document.querySelector('.dialog28').style.display = 'none';
        document.querySelector('.dialog29').style.display = 'none';
        document.querySelector('.dialog30').style.display = 'none';
        document.querySelector('.dialog31').style.display = 'none';
        document.querySelector('.dialog32').style.display = 'none';
        setTimeout(checkShakeText, 1000);
    }
}
function checkShakeText3(){
    if(document.getElementById("isShake_text").innerHTML == 1){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
        setTimeout(checkShakeText4, 1000);
        document.querySelector('.dialog27').style.display = 'none';
        document.querySelector('.dialog28').style.display = 'none';
        document.querySelector('.dialog29').style.display = 'none';
        document.querySelector('.dialog30').style.display = 'flex';
        document.querySelector('.dialog31').style.display = 'none';
        document.querySelector('.dialog32').style.display = 'none';
    }else{
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog27').style.display = 'flex';
        document.querySelector('.dialog28').style.display = 'none';
        document.querySelector('.dialog29').style.display = 'none';
        document.querySelector('.dialog30').style.display = 'none';
        document.querySelector('.dialog31').style.display = 'none';
        document.querySelector('.dialog32').style.display = 'none';
        setTimeout(checkShakeText, 1000);
    }
}
function checkShakeText4(){
    if(document.getElementById("isShake_text").innerHTML == 1){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
        setTimeout(checkShakeText5, 1000);
        document.querySelector('.dialog27').style.display = 'none';
        document.querySelector('.dialog28').style.display = 'none';
        document.querySelector('.dialog29').style.display = 'none';
        document.querySelector('.dialog30').style.display = 'none';
        document.querySelector('.dialog31').style.display = 'flex';
        document.querySelector('.dialog32').style.display = 'none';
    }else{
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog27').style.display = 'flex';
        document.querySelector('.dialog28').style.display = 'none';
        document.querySelector('.dialog29').style.display = 'none';
        document.querySelector('.dialog30').style.display = 'none';
        document.querySelector('.dialog31').style.display = 'none';
        document.querySelector('.dialog32').style.display = 'none';
        setTimeout(checkShakeText, 1000);
    }
}
function checkShakeText5(){
    if(document.getElementById("isShake_text").innerHTML == 1){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
        setTimeout(checkShakeText6, 1000);
        document.querySelector('.dialog27').style.display = 'none';
        document.querySelector('.dialog28').style.display = 'none';
        document.querySelector('.dialog29').style.display = 'none';
        document.querySelector('.dialog30').style.display = 'none';
        document.querySelector('.dialog31').style.display = 'none';
        document.querySelector('.dialog32').style.display = 'flex';
    }else{
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog27').style.display = 'flex';
        document.querySelector('.dialog28').style.display = 'none';
        document.querySelector('.dialog29').style.display = 'none';
        document.querySelector('.dialog30').style.display = 'none';
        document.querySelector('.dialog31').style.display = 'none';
        document.querySelector('.dialog32').style.display = 'none';
        setTimeout(checkShakeText, 1000);
    }
}
function checkShakeText6(){
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('.dialog32').style.display = 'none';
    document.querySelector('.dialog33').style.display = 'flex';
    setTimeout(codingCourse,4000);
    function codingCourse(){
        document.querySelector('.close33').style.display = 'flex';
    }
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