import Dropdown from "./Dropdown";

// New dropdown inserted in div1:
const drop1 = new Dropdown('.dropdown-div1','Animation 1',{animation:'animation1'});
drop1.appendElement('Element 1');
drop1.appendElement('Element 2');
drop1.appendElement('Element 3');
drop1.appendElement('Element 4');

// Dropdown element with some options:
const drop2 = new Dropdown('.dropdown-div2','Animation 2',{
  animation:'animation2',
  navColor:'red',
  liColor:'green',
});
drop2.appendElement('Element 1');
drop2.appendElement('Element 2');
drop2.appendElement('Element 3');
drop2.appendElement('Element 4');

function customAnimation(element,idx){
    element.animate([
      {
        background: 'red',
        opacity: 0,
        transform: 'translateY(50px)',
        easing: 'ease-in',
        offset: 0, //0%
      },
      {
        background:'green',
        opacity: 1,
        transform: 'translateY(0)',
        easing: 'ease-out',
        offset: 1, //100%
      }
    ], {
      // timing options
      duration: 300*idx+300,
      delay: 200,
      iterations: 1,
      fill: 'backwards',
    });
}

// Dropdown with a custom animation and some custom elements:
const drop3 = new Dropdown('.dropdown-div3','Custom animation',{animation:customAnimation});
const a = document.createElement('a');
a.textContent = 'Custom element'
a.href = 'https://github.com/balexandermunoz';
drop3.appendElement(a);
drop3.appendElement('Element 2','https://github.com/balexandermunoz');
drop3.appendElement('Element 3');
drop3.appendElement('Element 4');

// Dropdown animation 4:
const drop4 = new Dropdown('.dropdown-div4','Animation 4',{animation:'animation4'})
drop4.appendElement('Element 1','https://github.com/balexandermunoz');
drop4.appendElement('Element 2');
drop4.appendElement('Element 3');

// Dropdown animation 5:
const drop5 = new Dropdown('.dropdown-div5','Animation 5',{animation:'animation5'})
drop5.appendElement('Element 1','https://github.com/balexandermunoz');
drop5.appendElement('Element 2');
drop5.appendElement('Element 3');