import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGalley = document.querySelector('.gallery');

const itemOfGallery = galleryItems.map((item) =>
  `<div class="gallery__item">
        <a class="gallery__link" href=${item.original}>
            <img
                class="gallery__image"
                src=${item.preview}
                data-source=${item.original}
                alt=${item.description}
            />
        </a>
    </div>`)
  .join(' ');
 
  listGalley.insertAdjacentHTML('afterbegin', itemOfGallery);

  listGalley.addEventListener('click', onListGalleryClick);

  let instance;

// function onListGalleryClick(event) {
//     event.preventDefault();

//     const currentEl = event.target;
//     const currentValue = currentEl.dataset.source;

//     if (!currentValue) {
//         return;
//     }
//     let instance = basicLightbox.create(
//         `<img src = ${currentValue} width="800" height="600">`
//     )
//         instance.show()
//     }

    // -----------------------------------------------------------
    // Вариант функции с добавление условий (закрытие по Esc)

    function onListGalleryClick(event) {
        event.preventDefault();
    
        const currentEl = event.target;
        const currentValue = currentEl.dataset.source;
    
        if (!currentValue) {
            return;
        }
 
        function onEscPress(event) {
            if (event.code === 'Escape') {
              instance.close();
            }
          }
    
        let instance = basicLightbox.create(
        `<img src = ${currentValue} width="800" height="600">`,
         {
            onShow: instance => {
              window.addEventListener('keydown', onEscPress);
            },
            onClose: instance => {
              window.removeEventListener('keydown', onEscPress);
            },
          }
    )
        instance.show()
    }