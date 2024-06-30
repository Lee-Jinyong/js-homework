import AudioPlayer from './audio.js';

/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/

const body = document.querySelector('body')
const nav = document.querySelector('.nav ul');
const nickName = document.querySelector('.nickName')
const visualImage = document.querySelector('.visual img');

let soundList = new Array(0);

for(let i=0; i<data.length; i++) {
  let item = new AudioPlayer(`./assets/audio/${data[i].name}.m4a`)
  soundList.push(item)
}

function setBgColor(node, [colorA, colorB='#000']) {
  node.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`
}

function setImage(node, index) {
  node.src = `./assets/${data[index].name}.jpeg`;
  node.alt = data[index].alt;
}

function setNameText(node, index) {
  node.textContent = data[index].name;
}

function handleClick(e) {
  e.preventDefault();
  const target = e.target.closest('li');

  if(!target) return;

  const index = target.dataset.index - 1;
  const children = [...nav.children];

  setBgColor(body, data[index].color);
  setImage(visualImage, index);
  setNameText(nickName, index);

  soundList.forEach(item => {
    item.stop();
  })
  soundList[index].play();

  children.forEach(li => li.classList.remove('is-active'));

  target.classList.add('is-active');
}

nav.addEventListener('click', handleClick);