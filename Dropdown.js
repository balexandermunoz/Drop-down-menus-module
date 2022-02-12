class Dropdown {
  constructor(divSelector,name, options = {}){
    this.divSelector = divSelector;
    this.name = name;

    // showType option:
    this.showType = (options.showType === 'click') ? 'click' : 'mouseenter';

    // animation option:
    if(typeof(options.animation) === 'function') this.animation = options.animation;
    else if (options.animation === 'animation1') this.animation = this.animation1;
    else if (options.animation === 'animation2') this.animation = this.animation2;
    else if (options.animation === 'animation3') this.animation = this.animation3;
    else if (options.animation === 'animation4') this.animation = this.animation4;
    else if (options.animation === 'animation5') this.animation = this.animation5;
    else this.animation = this.animation1;

    // navColor and liColor option:
    this.navColors = this.colorValues(options.navColor) || this.colorValues('#ddd');
    this.liColors = this.colorValues(options.liColor) || this.colorValues('#666');

    // width and height options:
    this.width = options.width || '150px';
    this.height = options.height || '65px';

    // fontsize and texTransform options:
    this.fontSize = options.fontSize || '14px';
    this.textTransform = options.textTransform || 'uppercase';

    //
    const div = document.querySelector(this.divSelector);
    const nav = this.createNav()
    this.ul = this.createUl()

    nav.appendChild(this.ul)
    div.appendChild(nav)
  }

  createNav(){
    const nav = document.createElement('nav');
    nav.textContent = this.name;
    this.stylingNav(nav);

    return nav
  }

  createUl(){
    const ul = document.createElement('ul');
    ul.classList.add('elementContainer');
    this.stylingUl(ul)
    return ul
  }

  appendElement(elementName,link='https://www.youtube.com/watch?v=dQw4w9WgXcQ'){
    if(typeof(elementName)=== 'string'){
      const element = document.createElement('a');
      element.href = link;
      element.textContent = elementName;
      this.stylingLi(element)
      this.ul.appendChild(element)
      return element
    }
    this.stylingLi(elementName)
    this.ul.appendChild(elementName)
    return elementName
  }

  stylingNav(nav){
    nav.style.display = 'flex'
    nav.style.justifyContent = 'center';
    nav.style.alignItems = 'center';
    nav.style.textAlign = 'center';
    nav.style.background = `rgba( ${this.navColors[0]}, ${this.navColors[1]}, ${this.navColors[2]} )`;
    nav.style.borderRadius = '5px';
    nav.style.width = this.width;
    nav.style.height = this.height;
    nav.style.position = 'relative';
    nav.style.textTransform = this.textTransform;
    nav.style.fontSize = this.fontSize;
    nav.style.color = 'rgba(0, 0, 0, 0.7)';
    nav.style.cursor = 'pointer';
    nav.addEventListener(this.showType, ()=>{ 
      nav.style.background = `rgba( ${this.navColors[0]-40}, ${this.navColors[1]-40}, ${this.navColors[2]-40} )`;
      //If ul has no elements, return to avoid errors:
      if(this.ul.childNodes.length === 0) return;
      this.ul.lastChild.style.borderRadius = '0px 0px 5px 5px'
      this.ul.childNodes.forEach( (element,idx)=> {
        element.style.display = 'flex'; //Default trigger
        this.animation(element,idx);
      })
    })

    nav.addEventListener('mouseleave', ()=>{
      nav.style.background = `rgba( ${this.navColors[0]}, ${this.navColors[1]}, ${this.navColors[2]} )`;
      if(this.ul.childNodes.length === 0) return;
      this.ul.childNodes.forEach( (element)=> {
        element.style.display = 'none';
      })
    })
  }

  stylingLi(element){
    element.style.background =`rgba( ${this.liColors[0]}, ${this.liColors[1]}, ${this.liColors[2]} )`;
    element.style.color = 'rgba(255, 255, 255, 0.7)';
    element.style.display = 'none'; //Default trigger
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    element.style.opacity = '1';
    element.style.textDecoration = 'none';
    element.style.height = this.height;
    element.style.margin = '0';
    element.style.transformOrigin = 'top center'
    element.addEventListener('mouseenter', ()=>{ 
      element.style.background = `rgba( ${this.liColors[0]-40}, ${this.liColors[1]-40}, ${this.liColors[2]-40} )`;
    })

    element.addEventListener('mouseleave', ()=>{ 
      element.style.background = `rgba( ${this.liColors[0]}, ${this.liColors[1]}, ${this.liColors[2]} )`;
    })
  }

  stylingUl(ul){
    ul.style.position = 'absolute';
    ul.style.top = '100%';
    ul.style.left = '0%';
    ul.style.width = '100%';
    ul.style.padding = '0';
    ul.style.margin = '0';
    ul.style.perspective = '1000px';
  }
  
  //The animations shouldn't come from upper side, but probabpli clicking trigger the first link
  animation1(element,idx){
    element.animate([
      // keyframes
      { //from
        opacity: 0,
        transform: 'translateY(30px)',
      },
      { //To
        opacity: 1,
        transform: 'translateY(0)' }
    ], {
      // timing options
      duration: 300,
      iterations: 1,
      fill: 'forwards',
    });
  }

  animation2(element,idx) {
    element.animate([
      {
        opacity: 0,
        transform: 'rotateY(-90deg) translateY(50px)',
        easing: 'ease-in',
        offset: 0, //0%
      },
      {
        opacity: 1,
        transform: 'rotateY(0deg) translateY(0)',
        easing: 'ease-out',
        offset: 1, //100%
      }
    ], {
      // timing options
      duration: 500,
      delay: 200*idx,
      iterations: 1,
      fill: 'backwards',
    });
  }

  animation3(element,idx) {
    element.animate([
      {
        opacity: 0,
        transform: 'translateY(50px)',
        easing: 'ease-in',
        offset: 0, //0%
      },
      {
        opacity: 1,
        transform: 'translateY(0)',
        easing: 'ease-out',
        offset: 1, //100%
      }
    ], {
      // timing options
      duration: 300*idx+300,
      delay: 0,
      iterations: 1,
      fill: 'backwards',
    });
  }

  
  animation4(element,idx) {
    element.animate([
      {
        opacity: 0,
        transform: 'rotate(-30deg) translateX(30px)',
        easing: 'ease-in',
        offset: 0, //0%
      },
      {
        opacity: 1,
        transform: 'rotate(0deg) translateX(0px)',
        easing: 'ease-out',
        offset: 1, //100%
      }
    ], {
      // timing options
      duration: 300,
      delay: 150*idx,
      iterations: 1,
      fill: 'backwards',
    });
  }

  animation5(element,idx) {
    element.animate([
      {
        opacity: 0,
        transform: 'rotateX(-90deg)',
        easing: 'ease-in',
        offset: 0, //0%
      },
      {
        opacity: 1,
        transform: 'rotateX(0deg)',
        easing: 'ease-out',
        offset: 1, //100%
      }
    ], {
      // timing options
      duration: 300,
      delay: 150*idx,
      iterations: 1,
      fill: 'backwards',
    });
  }

  colorValues(color){
    if (!color) return;
    if (color.toLowerCase() === 'transparent') return [0, 0, 0, 0];
    if (color[0] === '#'){
      if (color.length < 7){
        color = '#' + color[1] + color[1] + color[2] + color[2] +
        color[3] + color[3] + (color.length > 4 ? color[4] + color[4] : '');
      }
      return [parseInt(color.substr(1, 2), 16),
        parseInt(color.substr(3, 2), 16),
        parseInt(color.substr(5, 2), 16),
        color.length > 7 ? parseInt(color.substr(7, 2), 16)/255 : 1];
    }
    if (color.indexOf('rgb') === -1){
      var temp_elem = document.body.appendChild(document.createElement('fictum'));
      var flag = 'rgb(1, 2, 3)';
      temp_elem.style.color = flag;
      if (temp_elem.style.color !== flag) return;
      temp_elem.style.color = color;
      if (temp_elem.style.color === flag || temp_elem.style.color === '') return;
      color = getComputedStyle(temp_elem).color;
      document.body.removeChild(temp_elem);
    }
    if (color.indexOf('rgb') === 0){
      if (color.indexOf('rgba') === -1) color += ',1';
      return color.match(/[\.\d]+/g).map( (a) => +a );
    }
  }

}

module.exports = Dropdown;