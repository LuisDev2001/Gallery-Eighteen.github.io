import { imagesUrl } from "./images.js";

const $galleryWrapper = document.getElementById("js_gallery-wrapper");

// Insertar url images dynamic
for (const [index, img] of imagesUrl.entries()) {
  const URL = img.url;
  $galleryWrapper.innerHTML += `
    <div class="galery-item" style="background-image: url(${URL})">
      <div class="gallery-text">
        <p>Foto ${index + 1}</p>
        <span>Te amo</span>
      </div>
      <span class="gallery-heart" id="js_heart-button">
        <i class="far fa-heart" id="js_icon-heart-${index + 1}"></i>
      </span>
    </div>
  `;
}

$galleryWrapper.addEventListener("click", (event) => {
  if (event.target.className === "far fa-heart") {
    event.target.className = "fas fa-heart";
    event.target.style.color = " rgb(252, 59, 59)";
  } else if (event.target.className === "fas fa-heart") {
    event.target.className = "far fa-heart";
    event.target.style.color = " rgb(255, 255, 255)";
  }
});
