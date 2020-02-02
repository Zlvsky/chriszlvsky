var navi = document.getElementById('main-navigation');
var hamburger = document.getElementById('menu-hamburger');
var check = document.getElementById('myCheck');
check.addEventListener('click', function essa(){
  if (check.checked == true){
      navi.style.transform = "translateX(0)";
      navi.style.zIndex = "15";
      document.getElementById('stopScroll').style.overflow = 'hidden';

  } else {
    navi.style.transform = "translateX(-100%)";
    document.getElementById('stopScroll').style.overflow = 'auto';
    document.getElementById('stopScroll').style.overflowX = 'hidden';
    setTimeout(function() {
      navi.style.zIndex = "0";
    }, 600);
    

  }
}, false);
