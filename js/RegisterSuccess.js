window.onload = LoginPageBackGround();
function LoginPageBackGround(){
    document.body.style.backgroundImage = "url('img/Login_bg.jpg')";
    document.body.style.backgroundSize = "1280px 800px"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top center";
    console.log
    setTimeout(codingCourse,4000);
    function codingCourse(){
        window.location.replace("index.html");
    }
}