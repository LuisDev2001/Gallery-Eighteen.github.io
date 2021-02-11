import { imagesUrl } from "./images.js";
import { imagesSliderUrl } from "./imagesSlider.js";

const $galleryWrapper = document.getElementById("js_gallery-wrapper");
const $btnClose = document.getElementById("js_btn-close-overlay");
const $wrapperSwipper = document.getElementById("js_swipper-wrapper");

// Insertar url images dynamic
for (const [index, { url, text, state }] of imagesUrl.entries()) {
  $galleryWrapper.innerHTML += `
    <div class="galery-item" style="background-image: url(${url})">
      <input type="hidden" autocomplete="off" value="${url}">
      <div class="gallery-text">
        <p>Foto ${index + 1}</p>
        <span>${text}</span>
      </div>
      <span class="gallery-heart" id="js_heart-button" >
        <i class="far fa-heart" id="js_icon-heart-${index + 1}"></i>
      </span>
    </div>
  `;
  localStorage.setItem("state", state);
}

// Insertar url images dynamic slider
for (const [index, { url }] of imagesSliderUrl.entries()) {
  $wrapperSwipper.innerHTML += `<div class="swiper-slide" style="background-image: url(${url})"><input type="hidden" autocomplete="off" value="${url}"></div>`;
}

$galleryWrapper.addEventListener("click", (event) => {
  if (event.target.className === "far fa-heart") {
    event.target.className = "fas fa-heart";
    event.target.style.color = " rgb(252, 59, 59)";
  } else if (event.target.className === "fas fa-heart") {
    event.target.className = "far fa-heart";
    event.target.style.color = " rgb(255, 255, 255)";
  } else if (event.target.className === "galery-item") {
    openShowImage(event);
  }
});
$wrapperSwipper.addEventListener("click", (event) => {
  if (event.target.classList[0] === "swiper-slide") {
    openShowImage(event);
  }
});
const getUrlImage = ($event) => {
  const URL_IMAGE = $event.target.querySelector("input").value;
  return URL_IMAGE;
};

const openOverlay = () => {
  const $overlay = document.getElementById("js_overlay");
  document.body.classList.add("overflow-hidden");
  $overlay.classList.add("active");
};

const closeOverlay = () => {
  const $overlay = document.getElementById("js_overlay");
  document.body.classList.remove("overflow-hidden");
  $overlay.classList.remove("active");
};

const openShowImage = (event) => {
  const $contentShowImage = document.getElementById("js_show-image");
  const $image = document.getElementById("js_image-show");
  $contentShowImage.classList.add("active");
  openOverlay();
  $image.setAttribute("src", getUrlImage(event));
};

const closeShowImage = (event) => {
  const $contentShowImage = document.getElementById("js_show-image");
  const $image = document.getElementById("js_image-show");
  $contentShowImage.classList.remove("active");
  closeOverlay();
  setTimeout(() => {
    $image.setAttribute("src", "");
  }, 300);
};

$btnClose.addEventListener("click", closeShowImage);
