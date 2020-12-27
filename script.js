/**
  Dec 2020 - Joao Rodrigues
  https://github.com/jrrio/mousefollow
*/

document.addEventListener('DOMContentLoaded', () => {

  // Check if device has an accurate pointing device (mouse, stylus pen on touch screen, etc.)
  if (matchMedia('(pointer:fine)').matches) {

    const cursor = document.querySelector('.cursor'),
      oCursor = Object.create(null);

    // init()
    {
      const { x, y, width } = cursor.getBoundingClientRect();
      let cursorRadius = width / 2;
      oCursor.offsetX = x + cursorRadius;
      oCursor.offsetY = y + cursorRadius;
      cursor.style.opacity = 0;
      cursor.style.setProperty('--scale', 0);
    }

    let isVisible = false, tx = 0, ty = 0;

    let onMouseMove = function (e) {
      tx = e.clientX - oCursor.offsetX;
      ty = e.clientY - oCursor.offsetY;
      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = 0.6;
        cursor.style.setProperty("--scale", 1);
      }
      requestAnimationFrame(() => {
        cursor.style.setProperty("--translateX", `${tx}px`);
        cursor.style.setProperty("--translateY", `${ty}px`);
      });
    };

    /* Set the scale of the cursor while hovering over
       A, BUTTON or IMG elements.
       onMouseOver() is optional, so remove it if you don't like it.
     */
    let onMouseOver = function (e) {
      const re = /^(a|button|img)$/i;
      let scale = 1;
      if (re.test(e.target.tagName)) scale = 1.8;
      requestAnimationFrame(() => {
        cursor.style.setProperty("--scale", scale);
      });
    };

    // Hide the cursor while scrolling.
    let isScrolling = false;

    let onScroll = function () {
      if (!isScrolling) {
        requestAnimationFrame(() => {
          isScrolling = false;
          isVisible = false;
          cursor.style.opacity = 0;
          cursor.style.setProperty("--scale", 0);
        });
      }
      isScrolling = true;
    };

    // Add event listeners.
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    window.addEventListener("scroll", onScroll);
  }

});