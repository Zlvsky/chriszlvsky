const btn = document.getElementById('btn'),
      loading = document.getElementById('loading'),
      main = document.getElementById('main'),
      text = document.getElementById('tekst'),
      scene = document.getElementById('scene');
var arr = new Array();
var pride = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D'];
var words = ['ugulem zostalas nawiedzona', 'pieczywo', 'kielbaska', 'zjadlby', 'guwno', 'hotdog', 'dzieki kinga', 'krzysztof dziekuje']

let music = new sound('mp3.mp3')
for(let i = 0; i < 11; i++) {
  arr[i] = new Image();
}

arr[0].src = 'lol1.jpg';
arr[1].src = 'lol2.png';
arr[2].src = 'lol3.jpg';
arr[3].src = 'lol4.jpg';
arr[4].src = 'lol5.jpg';
arr[5].src = 'bulka1.jpg';
arr[6].src = 'bulka2.jpg';
arr[7].src = 'bulka3.jpg';
arr[8].src = 'kielba1.png';
arr[9].src = 'kielbasa2.jpg';
arr[10].src = 'kielbasa3.jpg';
console.log(arr);

btn.onclick = () => {
  loading.style.display = 'none';
  music.play();
  setInterval(() => {
    changeColors();
  }, 200)
}
function changeColors() {
  let random1 = Math.floor(Math.random() * 6);
  let random2 = Math.floor(Math.random() * 6);
  let random3 = Math.random() + 1;
  let random4 = Math.floor(Math.random() * 11);
  let random5 = Math.floor(Math.random() * 8);
  text.style.color = pride[random1];
  text.style.transform = `scale(${random3})`;
  main.style.backgroundColor = pride[random2];
  scene.style.backgroundImage = `url(${arr[random4].src})`;
  text.innerHTML = words[random5];
}
