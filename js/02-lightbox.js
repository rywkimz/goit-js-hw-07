import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `
        <li class="galleryitem">
            <a class="gallerylink" href="${original}">
                <img class="galleryimage" src="${preview}" alt="${description}" />
            </a>
        </li>
    `;
}).join('');

gallery.innerHTML = galleryMarkup;

new SimpleLightbox('.galleryitem a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    nav: true 
});
