# What is this?

Get awesome drop-down menus and mobile menus. Really easy to implement

# Installation

`npm i dropthingsjs --save`

# How to use
You need to specify the selector (DOMstring) where you will append the drop-down or the parentNode. 

```javascript
import {Dropdown,Menu} from "dropthingsjs";
const exampleDropdown = new Dropdown('.someDivClass','Name',options);
const exampleMenu  =new Menu('.anotherDiv','menuType',options,dropdownOptions);

//You can also put the parentNode
const parentDiv = document.createElement('div');
const exampleDropdown2 = new Dropdown(parentDiv,'Awesome name',options);
```

# Dropdown:
Here you need to specify the name of this drop-down. The name will be the text in the drop-down menu.

## Examples: 
```javascript
import {Dropdown} from "dropthingsjs";
// New dropdown inserted in div1:
const drop1 = new Dropdown('.dropdown-div1','Animation 1');
drop1.appendElement('Element 1');
drop1.appendElement('Element 2');
drop1.appendElement('Element 3');
drop1.appendElement('Element 4');
```

## Options:

* *showType:* -string: 'click' or 'hover'. Default 'hover'.
* *animation:* -string: (animation1, animation2...) or -function: defaultAnimation(element,idx). Default 'animation1'.
* *navColor:* -string: rgba or hexagesimal or color name. This is the color of the button. Default '#ddd'.
* *liColor:* -srting: rgba or hexagesimal or color name. This means the color of the elements.  Default '#666'.
* *width:* -string: a valid imput for width style. e.g '20px' or '100%'. Default '150px'.
* *height:* -string: a valid imput for a height style. eg '10px' or '100%'. Default '65px'.
* *fontSize:* -string: a valid imput for a font-size style. Default '14px'.
* *textTransform:* -string: see [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform). Default 'uppercase'.

# Menu:
You could pass the type of menu. By default is 'static'.

## Examples: 
```javascript
import {Menu} from "dropthingsjs";
const Menu = new Menu('.Menu-div','more-collapse');
Menu.appendElement('Element 1');
Menu.appendElement('Element 2');
Menu.appendElement('Element 3');
Menu.appendElement('Element 4');
```

## Options: 
* *navColor:* -string: rgba or hexagesimal or color name. This is the color of the button. Default '#ddd'.
* *height:* -string: a valid imput for a height style. eg '10px' or '100%'. Default '65px'.
* *dropdownOptions:* See [dropdown options](#options)