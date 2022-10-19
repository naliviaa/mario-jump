//criar um botao para reiniciar o game 
//criar um score de pontuacçap 

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const score = document.querySelector('.score');
let count = 0;

document.addEventListener("keydown", (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")) {
      jump();
    }
  });

const jump = () => {
    mario.classList.add('jump');
    
setTimeout(() => {
    mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80)  {

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src='./assets/game-over.png'
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval(loop);
    }
 
}, 10)

 

document.addEventListener('keydown', jump);