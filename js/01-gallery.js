import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  `afterbegin`,
  galleryItems
    .map(
      (img) =>
        `<a href="${img.original}">
	  <img
	  src="${img.preview}" 
	  alt="${img.description}">
	  </a>`
    )
    .join("")
);
console.log(galleryItems);
