$(document).ready(function(){
    $("iframe").on("load", function(){
        $(this).contents().on("mousedown, mouseup, mousemove", function(){
            var frame = document.getElementById("myframe");
            var src = document.getElementById("myframe").contentWindow.location.href;
            if (src.indexOf("loginpage.html") != -1){
            document.getElementById("HomePageBgm").pause();
            document.getElementById("Chapter1Bgm").pause();
            document.getElementById("LoginPageBgm").play();
            }
            if (src.indexOf("/homepage.html") != -1){
                document.getElementById("LoginPageBgm").pause();
                document.getElementById("Chapter1Bgm").pause();
                document.getElementById("HomePageBgm").play();
            }
            if (src.indexOf("MainGame2/chapter1.html") != -1){
                document.getElementById("LoginPageBgm").pause();
                document.getElementById("HomePageBgm").pause();
                document.getElementById("Chapter1Bgm").play();
            }
            if (src.indexOf("/loginFailure.html") != -1){
                document.getElementById("LoginPageBgm").pause();
                document.getElementById("HomePageBgm").pause();
                document.getElementById("Chapter1Bgm").pause();
            }
            if (src.indexOf("MainGame2/chapter1_1.html") != -1){
                document.getElementById("LoginPageBgm").pause();
                document.getElementById("HomePageBgm").pause();
                document.getElementById("Chapter1Bgm").play();
            }
            if (src.indexOf("MainGame2/chapter1_2.html") != -1){
                document.getElementById("LoginPageBgm").pause();
                document.getElementById("HomePageBgm").pause();
                document.getElementById("Chapter1Bgm").play();
            }
            if (src.indexOf("MainGame2/chapter1_3.html") != -1){
                document.getElementById("LoginPageBgm").pause();
                document.getElementById("HomePageBgm").pause();
                document.getElementById("Chapter1Bgm").play();
            }
        });
    });
});
var effecid = true;
function effect(){
    if( effecid === true){
        document.querySelector('.bubbles').style.display = 'none';
        effecid = false;
        return;
    }if(effecid === false){
        document.querySelector('.bubbles').style.display = 'flex';
        effecid = true;
        return;
    }
}
var musicid = true;
function music(){
    if(musicid === true){
        document.getElementById("LoginPageBgm").pause();
        document.getElementById("HomePageBgm").pause();
        document.getElementById("Chapter1Bgm").pause();
        document.getElementById('myframe').id = 'myframe2';
        musicid = false;
        return;
    }if(musicid === false){
        document.getElementById('myframe2').id = 'myframe';
        musicid = true;
        return;
    }
}