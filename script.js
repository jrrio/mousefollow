/**
 My Github repo: https://github.com/jrrio/mousefollow
*/

const circle = document.querySelector(".circle"),
      oCircle = Object.create(null);

function init() {
  const {x, y, width} = circle.getBoundingClientRect();
  Object.assign(oCircle, {x: x + width, y: y + width, r: width / 2});
  circle.style.opacity = 0;
  circle.style.setProperty("--scale", 0);
}

let isVisible = false, tx = 0, ty = 0;

function onMouseMove(e) {
  tx = e.pageX - oCircle.x;
  ty = e.pageY - oCircle.y;
  if (!isVisible) {
    isVisible = true;
    circle.style.opacity = .6;
    circle.style.setProperty("--scale", 1);
  }
  requestAnimationFrame(() => {
    circle.style.setProperty("--translateX", `${tx}px`);
    circle.style.setProperty("--translateY", `${ty}px`);
  });
}

// Set the scale of the circle.
function onMouseOver(e) {
  const re = /^(a|button|img)$/i;
  let scale = 1;
  if (re.test(e.target.tagName)) scale = 2;
  requestAnimationFrame(() => {
    circle.style.setProperty("--scale", scale);
  });
}

function hideCircle() {
  isVisible = false;
  circle.style.opacity = 0;
  circle.style.setProperty("--scale", 0);
}

let isScrolling = false;

function onScroll() {
  if (!isScrolling) {
		requestAnimationFrame(() => {
      isScrolling = false;
      hideCircle();
    });
	}
	isScrolling = true;
}

let isResizing = false;

function onResize() {
  if (!isResizing) {
		requestAnimationFrame(() => {
      isResizing = false;
      hideCircle();
      oCircle.x = oCircle.y = oCircle.r;
      circle.style.left = 0;
      circle.style.top = 0;
      circle.style.setProperty("--translateX", 0);
      circle.style.setProperty("--translateY", 0);
    });
	}
	isResizing = true;
}

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseover", onMouseOver);
window.addEventListener("resize", onResize);
window.addEventListener("scroll", onScroll);