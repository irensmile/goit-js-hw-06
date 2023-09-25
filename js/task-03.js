const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//insertAdjacentHTML()
//list.insertAdjacentHTML("beforeend", markup);
//list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
/*const galleryList = document.querySelector(".gallery");
const galleryItems images.map((image) => {
  return
  `<li class="gallery-item">
  <img src=">`
})*/
const galleryList = document.querySelector(".gallery");
const galleryItems = images.map((image) => 
  `<li class="gallery-item">
  <img height="200px" src='${image.url}' alt='${image.alt}'>
  </li>`).join("");
galleryList.insertAdjacentHTML('afterbegin', galleryItems);


