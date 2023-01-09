import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryCards = createItemsForGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryCards);
gallery.addEventListener("click", onGalleryContainerClick);

function createItemsForGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
		<div class="gallery__item">
		  <a class="gallery__link" href="${original}">
		    <img
		      class="gallery__image"
		      src="${preview}"
		      data-source="${original}"
		      alt="${description}"
		    />
		  </a>
		</div>
	`;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  const isImageEl = evt.target.classList.contains("gallery__image");

  if (!isImageEl) {
    return;
  }

  evt.preventDefault();
  const img = evt.target;
  const html = `<img src="${img.dataset.source}" alt="${img.getAttribute(
    "alt"
  )}"/>`;

  const instance = createBasicLightbox(html);
  instance.show();
}

function createBasicLightbox(html) {
  return basicLightbox.create(html, {
    onShow: (instance) => {
      document.onkeydown = function (e) {
        if (e.keyCode == 27) {
          instance.close();
        }
      };
    },
  });
}
