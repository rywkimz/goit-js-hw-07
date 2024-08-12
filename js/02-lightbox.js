import { galleryItems } from './gallery-items.js'; // Ensure this file exists and exports galleryItems

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `;
}).join('');

gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    nav: true // Enable navigation arrows
});
