import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return 
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    ;
}).join('');

gallery.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery__item a',
    {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
        nav: true 
    });