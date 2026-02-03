
const lightBox = document.querySelector('.lightBox');
const buttonNext = document.querySelector('#buttonNext');
const buttoncut = document.querySelector('#buttoncut');
const buttonPrev = document.querySelector('#buttonPrev');
const showBigIMg = document.querySelector('.bigImg');
const img = document.querySelectorAll('.img')

let countImg = 0;




img.forEach((img, index) => {
  img.addEventListener('click',()=>{
    countImg = index;
  showBigIMg.src = img.src;
  lightBox.classList.add('show');
  })
});

buttoncut.addEventListener('click', ()=>{
  lightBox.classList.remove('show');
});

buttonNext.addEventListener('click', ()=>{
  countImg = (countImg+1)%img.length;
  showBigIMg.src = img[countImg].src;
});

buttonPrev.addEventListener('click', ()=>{
  countImg = (countImg - 1 + img.length)%img.length;
  showBigIMg.src = img[countImg].src
})

document.addEventListener('keydown',(e)=>{
  if(lightBox.classList.contains('show')) return;
  if(e.key === 'ArrowRight'){
    countImg = (countImg + 1) % img.length;
    showBigIMg.src = img[countImg].src;
  }
  if(e.key === 'ArrowLeft'){
    countImg = (countImg - 1 + img.length) % img.length;
    showBigIMg.src = img[countImg].src;
  }
  if (e.key === 'Escape') {
    lightBox.classList.remove('show');
  }
});