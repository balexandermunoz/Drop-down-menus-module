# What is this?

Get awesome drop-down menus and really easy to implement

# Installation

`npm i Drop-down-menus-module --save`

# How to use
You need to specify the parentNode or div where you will append the drop-down and the name. 
```javascript
const exampleDropdown = new Dropdown('.someDiv','Name',options);
```
```javascript
import Dropdown from "Dropdown";

// New dropdown inserted in div1:
const drop1 = new Dropdown('.dropdown-div1','Animation 1',{animation:'animation1'});
drop1.appendElement('Element 1');
drop1.appendElement('Element 2');
drop1.appendElement('Element 3');
drop1.appendElement('Element 4');
```

# Options

* *animation:* -string: (animation1, animation2...) | -function: defaultAnimation(element,idx)
* *navColor:* -string: rgba or hexagesimal or color name. This is the color of the button.
* *liColor:* -srting: rgba or hexagesimal or color name. This means the color of the elements. 
