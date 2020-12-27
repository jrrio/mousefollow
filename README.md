# Following the mouse pointer with a circle  

The JavaScript code will set 3 CSS custom properties used in the cursor's transform property, making it scale and follow the mouse pointer's movement.

The cursor is a DIV styled as a circle with "position: fixed", so that it is removed from the normal document flow and its coordinates (x, y) are always relative to the viewport. This makes everything easier to deal with in JavaScript and CSS. It's possible to use an SVG circle though, but more HTML and CSS would be required. Also as the circle radius is constant, SVG wouldn't make a difference anyway.

Debouncing scroll event idea from:  
https://www.html5rocks.com/en/tutorials/speed/animations/#debouncing-scroll-events

I've used vanilla JavaScript (ES6) and CSS Flexbox which will run in all major browsers as of mid-2017. An example was published on Codepen:  
[https://codepen.io/jrio/pen/oNzoGwV](https://codepen.io/jrio/pen/oNzoGwV)

## Other solutions
- Another approach would be setting top and left attributes:  
  https://getbutterfly.com/how-and-why-i-added-a-circle-following-my-mouse-pointer/

- Another solution using canvas:  
  https://www.kirupa.com/canvas/mouse_follow_ease.htm
