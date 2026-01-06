// JavaScript
//console.log('Hello world!');

const items = document.querySelectorAll('.img-item');
console.log(items);


// for文
for(let i = 0; i < items.length; i++){

    const keyframes = {
  opacity: [0, 1],
  transform: ['translateY(50px)', 'translateY(0)'],
  filter: ['blur(10px)', 'blur(0)'],
};
    
    const options = {
      duration: 600,
      delay: i * 400,
      fill: 'forwards',
    };
  
    items[i].animate(keyframes, options);
}

const slides = document.querySelectorAll('.slide');
let index = 0;
let timer;

function slideShow(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

// 初期起動（1回だけ）
if(slides.length > 1){
  timer = setInterval(slideShow, 7000);
}

// hoverで停止
document.querySelector('.slider').addEventListener('mouseenter', () => {
  clearInterval(timer);
});

// hover解除で再開
document.querySelector('.slider').addEventListener('mouseleave', () => {
  timer = setInterval(slideShow, 7000);
});


  