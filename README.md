# Following the mouse pointer with a circle  

I have seen this "mouse-follow" effect on the Internet, sometimes using a library, and thought of building a code from scratch with just vanilla JavaScript (ES6) and CSS custom properties (aka CSS variables) instead of the traditional drawing function inside a requestAnimationFrame() loop, either setting top / left properties or setting the transform property directly.

JavaScript will track the mouse coordinates (x, y) and set 3 CSS custom properties used in the cursor's transform property, making it follow the mouse pointer movement and change its scale when hovering over links, images or buttons. The latter is an optional feature, which can be disabled or modified.

The cursor is simply a DIV element styled as a circle with "position: fixed", so that it is removed from the normal document flow and its coordinates (x, y) are always relative to the viewport. This makes everything easier to deal with in JavaScript and CSS. It's possible to use an SVG circle though, but more HTML and CSS would be required. Also as the circle radius is constant, SVG wouldn't make a difference anyway.

The idea of debouncing the scroll event came from:  
https://www.html5rocks.com/en/tutorials/speed/animations/

I've used vanilla JavaScript (ES6) and CSS which will run in all major browsers as of mid-2017.

## Example  
An example was published on Codepen:  
[https://codepen.io/jrio/pen/oNzoGwV](https://codepen.io/jrio/pen/oNzoGwV)

## Other solutions  
- Another approach would be setting top and left attributes:  
  https://getbutterfly.com/how-and-why-i-added-a-circle-following-my-mouse-pointer/

- Another solution using canvas:  
  https://www.kirupa.com/canvas/mouse_follow_ease.htm
