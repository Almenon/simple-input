// A library for keyboard input
// written by Almenon

// you can set elements listeners are attached to - html5 canvas is default
var element = window.document; 
function setElement(input){
  element = input;
}

// actions is an array of functions to call. 
var actions = [];

element.addEventListener('keydown', keydown);
element.addEventListener('mousedown', mousedown);

// keyCodes is a dictionary of buttons corresponding to values of e.keyCode
// need more keys?  add codes from https://css-tricks.com/snippets/javascript/javascript-keycodes/
var keyCodes = {
  leftmouse:0, scrollwheel:1, rightmouse:2,
  backspace:8, tab:9, enter:13, shift:16, ctrl:17, alt:18, caps_lock:20, esc:27, space:32, page_up:33, page_down:34,
  end:35, home:36, left:37, up:38, right:39, down:40, insert:45, delete:46, 
  0:48, 1:49, 2:50, 3:51, 4:52, 5:53, 6:54, 7:55, 8:56, 9:57,
  a:65, b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74, 
  k:75, l:76, m:77, n:78, o:79, p:80, q:81, r:82, s:83, t:84, 
  u:85, v:86, w:87, x:88, y:89, z:90,
  f1:112, f2:113, f3:114, f4:115, f5:116, f6:117, f7:118, f8:119, f9:120, f10:121, f11:122, f12:123
};

function addListener(button, func){
// the keyCode of the button is mapped to the function
actions[keyCodes[button]] = func;
}

function removeListener(button){
  actions[keyCodes[button]] = undefined;
}

function addListeners(listeners){
  for (var button in listeners){
    addListener(button, listeners[button]);
  }
}

function removeListeners(listeners){
  for (var button in listeners){
    removeListener(button, listeners[button]);
  }
}

function keydown(e){
  if(actions[e.keyCode] !== undefined) actions[e.keyCode](e);
}

function mousedown(e){
  if(actions[e.button] !== undefined) actions[e.keyCode](e);
}