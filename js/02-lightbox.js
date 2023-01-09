import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryCards = createItemsForGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryCards);
let lightbox = new SimpleLightbox(".gallery__item", {
  captionDelay: 250,
});
function createItemsForGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
		  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
		</a>
	`;
    })
    .join("");
}
