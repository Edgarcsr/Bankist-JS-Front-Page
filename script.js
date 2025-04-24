"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////
////////////////////////////////

// const header = document.querySelector(".header");

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent =
// // "We use cookies for improved functionalitty and analytics.";
// message.innerHTML = `We use cookies for improved functionalitty and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(1));

// // Delete Elements
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// // Styles
// message.style.backgroundColor = "#37383d";
// message.style.width = `120%`;

// console.log(message.style.height); // Doesn't Work
// console.log(message.style.background); // Works because style sets inline element in HTML
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// // Attributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = "Beautiful, minimalist logo";

// // Non standard:
// console.log(logo.designer); //don't work, returns undefined
// console.log(logo.getAttribute.designer);
// logo.setAttribute("company", "Bankist");

// console.log(logo.src); // Gets absolute path
// console.log(logo.getAttribute("src")); //Gets relative path

// const link = document.querySelector(".nav__link--btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add("c");
// logo.classList.remove("c");
// logo.classList.toggle("c");
// logo.classList.contains("c"); // Not includes

// // Don't use! Overwrite content
// logo.className = "jonas";

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log("Current Scroll pos", window.pageXOffset, window.pageYOffset);

  console.log(
    "Document Client Height/Width",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //  Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // Smooth Scroll
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // Modern Way
  section1.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.querySelector("h1");
const alertH1 = function () {
  alert(`mouseenter: Great! You're reading the header!`);
  // h1.removeEventListener("mouseenter", alertH1);
};

// Can add multiple event listeners
h1.addEventListener("mouseenter", alertH1);

// TimeOut
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// Old school way
// h1.onmouseenter(function (e) {
//   alert(`mouseenter: Great! You're reading the header!`);
// });

///////////////////////////////////////////////////

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINK`, e.target);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`CONTAINER`, e.target);
});

document.querySelector(`.nav`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`NAV`, e.target);
});
