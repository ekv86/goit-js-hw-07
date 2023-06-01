import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, description, original }) =>
    `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source = "${original}"
      alt="${description}"/></a>
    </li>`).join("");

galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) {
        return
    }

    const imgId = evt.target.dataset.source;
    const currentItem = galleryItems.find(({ original }) => original === imgId);


    const html = `<img src="${currentItem.original}" width="800" height="600">`;

    const instance = basicLightbox.create(html, {
        onShow: () => { window.addEventListener('keydown', onEscPress) },
        onClose: () => { window.removeEventListener('keydown', onEscPress) }
    });

    instance.show();
    
    function onEscPress(evt) {
      
        if (evt.code === 'Escape') {
            instance.close();
        }
    }
}