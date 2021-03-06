# What is this?

Get awesome drop-down menus and mobile menus. Really easy to implement

# Installation

`npm i dropthings --save`

# How to use
You need to specify the selector (DOMstring) where you will append the drop-down or the parentNode. 

```javascript
import {Dropdown,Menu} from "dropthings";
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
import {Dropdown} from "dropthings";
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
import {Menu} from "dropthings";
const menu = new Menu('.Menu-div','more-collapse');
menu.appendElement('Element 1');
menu.appendElement('Element 2');
menu.appendElement('Element 3');
menu.appendElement('Element 4');
```

## Options: 
* *navColor:* -string: rgba or hexagesimal or color name. This is the color of the button. Default '#ddd'.
* *height:* -string: a valid imput for a height style. eg '10px' or '100%'. Default '65px'.
* *dropdownOptions:* See [dropdown options](#options)

# Slider:
You need pass the divSelector or when you want to append your slider, also the image Width and image Height. 

## Examples
```javascript
import {Slider} from "dropthings";
const slider1 = new Slider('.slider',450,450,{autoSlide:5000, frameColor:'gray'});
slider1.appendElement('images/unsized-image1.jpg');
slider1.appendElement('images/unsized-image2.jpg');
slider1.appendElement('images/unsized-image3.jpg');
slider1.appendElement('images/unsized-image4.jpg');
```

## Options: 
* *imgHeight:* -number (in pixels). By default its equal to imgWidth, but you should pass this argument too. 
* *autoSlide:* -number (in miliseconds) or 'none'. The number is how often the image will change. 'none' means not auto slide Default: 5000;
* *frameSize:* -number (pixels). If you want a frame. Default 10.
* *frameColor:* -color. A valid color for your frame.
* *borderRadius:* -string. It could be in pixels, procentage or wathever. Default 20px. 