import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${preview}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", picturePreview);

function picturePreview(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(`
  <div class="modal">
  <img class="gallery__image" src=${evt.target.dataset.source} alt="${evt.target.alt}">
  </div>`);
    instance.visible() ? instance.close() : instance.show();
    document.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
        instance.close();
      }
    });
  }
}
