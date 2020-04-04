var navi = document.getElementById('main-navigation'),
    hamburger = document.getElementById('menu-hamburger'),
    input = document.getElementById('myCheck'),
    stopScroll = document.getElementById('stopScroll');

input.onchange = function() {
  navi.style.transform = this.checked? 'none': 'translateX(-100%)';
  navi.style.zIndex = this.checked? '15': setTimeout('0', 600);
  stopScroll.style.overflow = this.checked? 'hidden': 'auto';
}
