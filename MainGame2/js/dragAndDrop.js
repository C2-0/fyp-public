const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const droparea1 = document.getElementById('droparea1');
const droparea2 = document.getElementById('droparea2');
const droparea3 = document.getElementById('droparea3');
const submitBtn = document.getElementById('submitBtn');


// dragstart event
img1.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', 'img1');
});
img2.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', 'img2');
});
img3.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', 'img3');
});

// dragover event
droparea1.addEventListener('dragover', e => {
  e.preventDefault();
});
droparea2.addEventListener('dragover', e => {
  e.preventDefault();
});
droparea3.addEventListener('dragover', e => {
  e.preventDefault();
});

// drop event
droparea1.addEventListener('drop', e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const img = document.getElementById(data);
  droparea1.appendChild(img);
});
droparea2.addEventListener('drop', e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const img = document.getElementById(data);
  droparea2.appendChild(img);
});
droparea3.addEventListener('drop', e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const img = document.getElementById(data);
  droparea3.appendChild(img);
});


// check ans
submitBtn.addEventListener('click', () => {
  
  const images1 = droparea1.querySelectorAll('img');


  const images2 = droparea2.querySelectorAll('img');


  const images3 = droparea3.querySelectorAll('img');

  if(images1.length === 1 && images1[0].id === 'img1' && images2.length === 1 && images2[0].id === 'img2' &&
  images3.length === 1 && images3[0].id === 'img3'){
    //alert('答案正確');
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('#container').style.display = 'none';
    document.querySelector('.pictureArea').style.display = 'none';
    document.querySelector('.close35').style.display = 'none';
    document.querySelector('.dialog35').style.display = 'none';
    document.querySelector('.dialog36').style.display = 'flex';
    setTimeout(codingCourse,5000);
    function codingCourse(){
      document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
      document.querySelector('.dialog36').style.display = 'none';
      document.querySelector('.dialog39').style.display = 'flex';
      setTimeout(codingCourse,4000);
      function codingCourse(){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog39').style.display = 'none';
        document.querySelector('.dialog40').style.display = 'flex';
        setTimeout(codingCourse,4000);
        function codingCourse(){
          document.querySelector('.dialog40').style.display = 'none';
          document.querySelector('.dialog41').style.display = 'flex';
          setTimeout(codingCourse,4000);
          function codingCourse(){
            document.querySelector('#container2').style.display = 'flex';
            document.querySelector('.pictureArea2').style.display = 'flex';
            document.querySelector('.photo16').style.display = 'flex';
            setTimeout(codingCourse,3000);
            function codingCourse(){
              document.getElementById("miaruko_microbit").style.animationName = 'moving3';
              document.querySelector('.dialog42').style.display = 'flex';
              document.querySelector('.close42').style.display = 'flex';
              setTimeout(codingCourse,2000);
              function codingCourse(){
                document.querySelector('.dialog42').style.display = 'none';
              }
            }
          }
        }
      }
    }
  } else {
    //alert('答案錯誤');
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
    document.querySelector('#container').style.display = 'none';
    document.querySelector('.pictureArea').style.display = 'none';
    document.querySelector('.close35').style.display = 'none';
    document.querySelector('.dialog35').style.display = 'none';
    document.querySelector('.dialog36').style.display = 'flex';
    setTimeout(codingCourse,5000);
    function codingCourse(){
      document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
      document.querySelector('.dialog36').style.display = 'none';
      document.querySelector('.dialog37').style.display = 'flex';
      setTimeout(codingCourse,4000);
      function codingCourse(){
        document.querySelector('.dialog37').style.display = 'none';
        document.querySelector('.dialog38').style.display = 'flex';
        setTimeout(codingCourse,4000);
        function codingCourse(){
          window.location.replace("http://127.0.0.1/index/MainGame2/chapter1_2.html");
        }
      }
    }
  }
  
});  

const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const droparea4 = document.getElementById('droparea4');
const droparea5 = document.getElementById('droparea5');
const droparea6 = document.getElementById('droparea6');
const droparea7 = document.getElementById('droparea7');
const submitBtn2 = document.getElementById('submitBtn2');

img4.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', 'img4');
});
img5.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', 'img5');
});
img6.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', 'img6');
});
img7.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', 'img7');
});

droparea4.addEventListener('dragover', e => {
  e.preventDefault();
});
droparea5.addEventListener('dragover', e => {
  e.preventDefault();
});
droparea6.addEventListener('dragover', e => {
  e.preventDefault();
});
droparea7.addEventListener('dragover', e => {
  e.preventDefault();
});

droparea4.addEventListener('drop', e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const img = document.getElementById(data);
  droparea4.appendChild(img);
});
droparea5.addEventListener('drop', e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const img = document.getElementById(data);
  droparea5.appendChild(img);
});
droparea6.addEventListener('drop', e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const img = document.getElementById(data);
  droparea6.appendChild(img);
});
droparea7.addEventListener('drop', e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const img = document.getElementById(data);
  droparea7.appendChild(img);
});

submitBtn2.addEventListener('click', () => {
  
  const images4 = droparea4.querySelectorAll('img');


  const images5 = droparea5.querySelectorAll('img');


  const images6 = droparea6.querySelectorAll('img');


  const images7 = droparea7.querySelectorAll('img');

  if(images4.length === 1 && images4[0].id === 'img4' && images5.length === 1 && images5[0].id === 'img7' &&
  images6.length === 1 && images6[0].id === 'img6' && images7.length === 1 && images7[0].id === 'img5'){
    alert('答案正確');
    document.getElementById("miaruko_microbit").style.animationName = 'moving4';
    document.querySelector('.photo16').style.display = 'none';
    document.querySelector('#container2').style.display = 'none';
    document.querySelector('.pictureArea2').style.display = 'none';
    document.querySelector('.dialog41').style.display = 'none';
    document.querySelector('.close42').style.display = 'none';
    document.querySelector('.dialog43').style.display = 'flex';
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    setTimeout(codingCourse,4000);
    function codingCourse(){
      document.querySelector('.dialog43').style.display = 'none';
      document.querySelector('.dialog44').style.display = 'flex';
      setTimeout(codingCourse,4000);
      function codingCourse(){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog44').style.display = 'none';
        document.querySelector('.dialog45').style.display = 'flex';
        setTimeout(codingCourse,3000);
        function codingCourse(){
          document.querySelector('.answer9').style.display = 'flex';
          document.querySelector('.answer10').style.display = 'flex';
        }
      }
    }
  } else {
    alert('答案錯誤');
    document.getElementById("miaruko_microbit").style.animationName = 'moving4';
    document.querySelector('.photo16').style.display = 'none';
    document.querySelector('#container2').style.display = 'none';
    document.querySelector('.pictureArea2').style.display = 'none';
    document.querySelector('.dialog41').style.display = 'none';
    document.querySelector('.close42').style.display = 'none';
    document.querySelector('.dialog43').style.display = 'flex';
    document.getElementById('miaruko_microbit').src="img/miaruko_microbit2.png";
    setTimeout(codingCourse,4000);
    function codingCourse(){
      document.querySelector('.dialog43').style.display = 'none';
      document.querySelector('.dialog44').style.display = 'flex';
      setTimeout(codingCourse,4000);
      function codingCourse(){
        document.getElementById('miaruko_microbit').src="img/miaruko_microbit.png";
        document.querySelector('.dialog44').style.display = 'none';
        document.querySelector('.dialog45').style.display = 'flex';
        setTimeout(codingCourse,3000);
        function codingCourse(){
          document.querySelector('.answer11').style.display = 'flex';
          document.querySelector('.answer12').style.display = 'flex';
        }
      }
    }
  }
});  