import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGalley = document.querySelector('.gallery');

const itemOfGallery = galleryItems.map((item) =>
  ` <li>
        <a class="gallery__item" href=${item.original}>
            <img class="gallery__image" src=${item.preview} alt=${item.description} />
        </a>
    </li>`)
  .join(' ');

  listGalley.insertAdjacentHTML('afterbegin', itemOfGallery);

  var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250,  captionsData: 'alt'});