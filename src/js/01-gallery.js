import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery');
function createGallery() {
  const createEl = galleryItems
    .map(
      (item) => `
    <li class = "gallery__item">
    <a class = "gallery__link" href="${item.original}">
    <img class = "gallery__image" src="${item.preview}" alt="${item.description}"/>    
    </a>
    </li>`
    )
    .join('');
  gallery.innerHTML = createEl;
}
createGallery();
let lightbox = new SimpleLightbox('.gallery a', {
  caption: 'true',
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: '250',
});
console.log(galleryItems);
