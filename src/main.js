const navHidden = document.querySelector('#navHidden');
const imageContainer = document.querySelector('.imageContainer');
const lightBox = document.querySelector('.lightBox');
const cut = document.querySelector('#cut');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const BigIamge = document.querySelector('.BigIamge');
const naturalBtn = document.querySelector('#naturral');
const vehiclesBtn = document.querySelector('#vehicles');
const showAllimg = document.querySelector('.navList');

navHidden.addEventListener('click', () => {
  document.querySelector('.hideNav').classList.toggle('active');
});

const NaturalImg = [
  'public/nature/1.jpg','public/nature/2.jpg','public/nature/3.jpg',
  'public/nature/4.jpg','public/nature/5.jpg','public/nature/6.jpg',
  'public/nature/7.jpg','public/nature/8.jpg','public/nature/9.jpg',
  'public/nature/10.jpg','public/nature/11.jpg','public/nature/12.jpg',
  'public/nature/13.jpg','public/nature/14.jpg','public/nature/15.jpg',
  'public/nature/16.jpg','public/nature/17.jpg','public/nature/18.jpg',
  'public/nature/19.jpg','public/nature/20.jpg','public/nature/21.jpg',
  'public/nature/22.jpg','public/nature/23.jpg','public/nature/24.jpg',
  'public/nature/25.jpg','public/nature/26.jpg','public/nature/27.jpg',
  'public/nature/28.jpg','public/nature/29.jpg','public/nature/30.jpg',
  'public/nature/31.jpg','public/nature/32.jpg',
];

const vehiclesImg = [
  'public/wikale/1.jpg','public/wikale/2.jpg','public/wikale/3.jpg',
  'public/wikale/4.jpg','public/wikale/5.jpg','public/wikale/6.jpg',
  'public/wikale/7.jpg','public/wikale/8.jpg','public/wikale/9.jpg',
  'public/wikale/10.jpg','public/wikale/11.jpg','public/wikale/12.jpg',
  'public/wikale/13.jpg','public/wikale/14.jpg','public/wikale/15.jpg',
  'public/wikale/16.jpg','public/wikale/17.jpg','public/wikale/18.jpg',
  'public/wikale/19.jpg','public/wikale/20.jpg','public/wikale/21.jpg',
  'public/wikale/22.jpg','public/wikale/23.jpg','public/wikale/24.jpg',
  'public/wikale/25.jpg','public/wikale/26.jpg','public/wikale/27.jpg',
  'public/wikale/28.jpg','public/wikale/29.jpg','public/wikale/30.jpg',
  'public/wikale/31.jpg','public/wikale/32.jpg','public/wikale/33.jpg',
  'public/wikale/34.jpg','public/wikale/35.jpg','public/wikale/36.jpg',
  'public/wikale/37.jpg','public/wikale/38.jpg','public/wikale/39.jpg',
  'public/wikale/40.jpg','public/wikale/41.jpg','public/wikale/42.jpg',
  'public/wikale/43.jpg',
];

let currentImages = [...NaturalImg, ...vehiclesImg];
let currentIndex = 0;
const allimg = [...NaturalImg, ...vehiclesImg];
function imageRerender(images) {
  imageContainer.innerHTML = '';
  currentImages = images;

  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'img';
    img.dataset.index = index;
    img.loading = 'lazy';
    imageContainer.appendChild(img);
  });
}


imageRerender(currentImages);


imageContainer.addEventListener('click', (e) => {
  if (!e.target.classList.contains('img')) return;

  currentIndex = Number(e.target.dataset.index);
  BigIamge.src = currentImages[currentIndex];
  lightBox.style.display = 'flex';
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  BigIamge.src = currentImages[currentIndex];
});

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  BigIamge.src = currentImages[currentIndex];
});

cut.addEventListener('click', () => {
  lightBox.style.display = 'none';
});

naturalBtn.addEventListener('click', () => {
  imageRerender(NaturalImg);
});

vehiclesBtn.addEventListener('click', () => {
  imageRerender(vehiclesImg);
});

showAllimg.addEventListener('click', ()=>{
  imageRerender(allimg);
})
