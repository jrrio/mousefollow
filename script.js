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
    window.addEventListener("scroll", onScroll);

    /****************************************************************
      IMPORTANT: This part is an optional feature which can be
      disabled by setting "changeScale" to false.

      The code below will set the scale of the cursor while
      hovering over A, BUTTON or IMG elements. You may specify
      another group of CSS selectors depending on your needs.
     ***************************************************************/
    const changeScale = true;

    let onMouseEnter = function () {
      requestAnimationFrame(() => {
        cursor.style.setProperty("--scale", 1.8);
      });
    };

    let onMouseLeave = function () {
      requestAnimationFrame(() => {
        cursor.style.setProperty("--scale", 1);
      });
    };

    if (changeScale) {
      const tags = document.querySelectorAll('a, button, img');
      tags.forEach(tag => {
        tag.addEventListener('mouseenter', onMouseEnter);
        tag.addEventListener('mouseleave', onMouseLeave);
      });
    }

  }

});
