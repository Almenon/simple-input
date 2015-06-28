# simple-input
A simple javascript file for reacting to keyboard events.

It automatically creates a listener for 'keydown' events.  You can provide it functions to call for a specified key.  Either use addListener('*keyName*', myfunction) or pass in a object to addListeners:

addListeners({

  w: myfunction2
  
  a: myfunction3
  
})

Possible features in future version:

* support for 'keyup', 'mousedown', and other listeners
* support for ***REMOVED*** geusters
* key combinations
* wildcards (ex: 'any', 'number')
* integration with other libraries
* a 'movement' listener that automatically passes in movement info based on WASD keys (useful for canvas games)

Don't like my library?  Want more features?  Try http://dmauro.github.io/Keypress/
