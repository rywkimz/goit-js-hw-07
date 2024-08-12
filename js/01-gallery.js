    import { galleryItems } from './gallery-items.js';

    const gallery = document.getElementById('gallery');

    const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>
    `;
    }).join('');

    gallery.innerHTML = galleryMarkup;

    gallery.addEventListener('click', (event) => {
    event.preventDefault();

    const { target } = event;

    if (target.nodeName !== 'IMG') return;

    const largeImageURL = target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${largeImageURL}" width="800" height="600">
    `);

    instance.show();

    const closeModalOnEscape = (event) => {
        if (event.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', closeModalOnEscape);
        }
    };

    window.addEventListener('keydown', closeModalOnEscape);
    });
