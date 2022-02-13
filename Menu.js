const Dropdown = require('./Dropdown.js');

class Menu {
  constructor(divSelector,menuType='static', options={},dropdownOptions){

    this.menuType = menuType || 'static';
    this.moreList = options.moreList || [];
    this.elements = [];

    // navColor options:
    this.navColor = options.navColor || '#aaa';

    // height options:
    this.height = options.height || 'auto';

    // dropdown options: 
    this.dropdownOptions = dropdownOptions || {width:'100px',height:'100%',navColor:this.navColor}

    const div = document.querySelector(divSelector);
    const moreBtnDiv = document.createElement('div');
    this.moreBtnDiv = moreBtnDiv;

    const tabsDiv = document.createElement('div');
    this.tabsDiv = tabsDiv;
    this.stylingNav(tabsDiv)

    const nav = this.createNav();
    this.nav = nav;

    nav.append(tabsDiv,moreBtnDiv)

    div.append(nav);
  }

  toggleMoreElements(){
    const windowWidth = window.innerWidth;
    const elementWidth = 100;
    const showedElements = Math.floor(windowWidth/elementWidth); // -1 ?
    this.tabsDiv.innerHTML = '';
  
    if(this.elements.length <= showedElements){
      this.elements.forEach( (el)=> this.tabsDiv.append(el))
      return
    }
  
    for(let i = 0; i<=showedElements-1; i++){
      this.tabsDiv.append(this.elements[i])
    }
  
    const drop = new Dropdown(this.tabsDiv,'More', this.dropdownOptions)
    for(let i = showedElements+1; i < this.elements.length+1; i++){
      drop.appendElement(`${this.elements[i-1].textContent}`, '#')
    }
  }

  createNav(){
    const nav = document.createElement('nav');
    nav.classList.add('tabs');
    this.stylingNav(nav);

    if(this.menuType === 'scroll') this.stylingScrollNav(nav);
    if(this.menuType === 'more'){
      const moreBtn = new Dropdown(this.moreBtnDiv,'More',this.dropdownOptions);
      this.moreList.forEach( (e)=> moreBtn.appendElement(e) )
    }
    if(this.menuType === 'moreCollapse') window.addEventListener('resize',this.toggleMoreElements.bind(this))
    
    return nav
  }

  stylingNav(nav){
    nav.style.display = 'flex';
    nav.style.width  ='100vw';
    nav.style.height = this.height;
    nav.style.backgroundColor = this.navColor;
    nav.style.justifyContent = 'space-around';
    nav.style.alignItems = 'center';
    nav.style.padding = '0';
    nav.style.margin = '0';
  }

  stylingScrollNav(nav){
    nav.style.display = 'block';
    nav.style.overflow = 'auto';
    nav.style.whiteSpace = 'nowrap';
    nav.style.WebkitOverflowSrcolling = 'touch';
  }

  appendElement(elementName,link = '#'){
    let element;
    if(typeof(elementName)=== 'string'){
      element = document.createElement('a');
      element.href = link;
      element.textContent = elementName;
    }
    else element = elementName;

    this.stylingElement(element);
    if(this.menuType === 'scroll') this.stylingScrollElement(element);
    
    this.elements.push(element)
    this.tabsDiv.appendChild(element)
    return element
  }

  stylingElement(element){
    element.style.color = 'black';
    element.style.textDecoration = 'none';
    element.style.padding = '5px 0';
    element.style.margin = '5px 0';
    element.addEventListener('mouseenter',()=>{
     element.style.borderBottom = 'double 3px black';
     element.style.marginBottom = '1px';
    })
    element.addEventListener('mouseleave',()=>{
      element.style.borderBottom = 'none';
      element.style.marginBottom = '0px';
    })
  }

  stylingScrollElement(element){
    element.style.display='inline-block';
    element.style.textAlign = 'center';
    element.style.padding = '5px 30px'
  }

}

module.exports = Menu;