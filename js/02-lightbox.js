import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, description, original }) =>
    `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>
    </li>`).join("");

galleryEl.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom'
    });