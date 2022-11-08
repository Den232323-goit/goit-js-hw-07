import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryItem(galleryItems);
galleryRef.insertAdjacentHTML(`afterbegin`, galleryMarkup);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href='${original}'>
		<img class="gallery__image"
		scr='${preview}'
		data-source='${original}'
		alt='${description}'/>
		</a>`;
    })
    .join("");
}

galleryRef.addEventListener("click", onGalleryRefClick);

let modalWindow;

function onGalleryRefClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  modalWindow = basicLightbox.create(
    `<img scr='${event.target.dataset.source}' width="800" height="600">`
  );

  modalWindow.show();
}
