import SimpleLightbox from '../../node_modules/simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(SimpleLightbox);
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// const gallery = document.querySelector('.gallery');
// const galleryEls = createGalleryEls(galleryItems);

// function createGalleryEls(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<li>
//             <a href="${original}" class= "gallery__item">
//             <img
//             class= "gallery__image"
//             src= "${preview}"
//             data-source= "${original}"
//             alt= "${description}"
//             />
//             </a>
//             </li>`;
//     })
//     .join('');
// }

// gallery.insertAdjacentHTML('beforeend', galleryEls);
// gallery.addEventListener('click', onGalleryClick);

// var lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });

// function onGalleryClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') return;

//   document.addEventListener('keydown', ({ key }) => {
//     if (key === 'Escape') {
//       instance.close();
//     }
//   });
// }
// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const galleryPic = galleryItems
  .map(
    galleryItem => `<li><a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a></li>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', galleryPic);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
