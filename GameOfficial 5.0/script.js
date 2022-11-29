const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 180) {
    
      clearInterval(upInterval);

  let downInterval = setInterval(() => {
    if (position <= 0) { /*o valor original é 0 */
      clearInterval(downInterval);
      isJumping = false;
    } else {
      if (position >= 140){
      position -= 6;
      dino.style.bottom = position + 'px';
      } else {
      position -= 12;
      dino.style.bottom = position + 'px';
      }
    }
  }, 18);
} 
    else {
      if (position <= 140){
      position += 12;
      dino.style.bottom = position + 'px';
      }
      position += 6;
      dino.style.bottom = position + 'px';
  
    }
  }, 18);
}

function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 93;
  let randomTime = Math.random() * 6000;

  if (isGameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + '%';

    let leftTimer = setInterval(() => {
      if (cactusPosition < 1) {
            clearInterval(leftTimer);
            background.removeChild(cactus);

      } else if (cactusPosition > 0 && cactusPosition < 7 && position < 60) {
            clearInterval(leftTimer);
            isGameOver = true;
            document.body.innerHTML = '<div class="window_game-over"><div class="window_aux"><h1 class="txt_game-over">Fim de jogo</h1><button class="button_game-over" type="button" onClick="recarregarAPagina()">Recomeçar</button></div></div>' ;

      } else {
            cactusPosition -= 1;
            cactus.style.left = cactusPosition + '%';
      }
    }, 20);
  setTimeout(createCactus, randomTime);
}
createCactus();
document.addEventListener('keyup', handleKeyUp);

function createRosto() {
  const Rosto = document.createElement('div');
  let RostoPosition = 93;
  let randomTime = Math.random() * 6000;

  if (isGameOver) return;

  Rosto .classList.add('Rosto');
  background.appendChild(Rosto);
  Rosto.style.left = RostoPosition + '%';

  let leftTimer = setInterval(() => {
    if (RostoPosition < 1) {
      
      clearInterval(leftTimer);
      background.removeChild(Rosto);
     } else {
      RostoPosition -= 1;
      Rosto.style.left = RostoPosition + '%';
    }
  }, 20);

  setTimeout(createRosto, randomTime);
}

createRosto();
document.addEventListener('keyup', handleKeyUp);






function createRosto2() {
  const Rosto2 = document.createElement('div');
  let RostoPosition2 = 93;
  let randomTime = Math.random() * 6000;

  if (isGameOver) return;

  Rosto2 .classList.add('Rosto2');
  background.appendChild(Rosto2);
  Rosto2.style.left = RostoPosition2 + '%';

  let leftTimer = setInterval(() => {
    if (RostoPosition2 < 1) {
      
      clearInterval(leftTimer);
      background.removeChild(Rosto2);
     } else {
      RostoPosition2 -= 1;
      Rosto2.style.left = RostoPosition2 + '%';
    }
  }, 20);

  setTimeout(createRosto2, randomTime);
}

createRosto2();
document.addEventListener('keyup', handleKeyUp);
function recarregarAPagina(){
  window.location.reload();
} 