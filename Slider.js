class Slider{
  constructor(divSelector,imgWidth,imgHeight,options={}){

    // Image width adn height options: (in pixels)
    this.imgWidth = imgWidth;
    this.imgHeight = imgWidth || imgHeight;
    
    // autoSlide options: (none or number in miliseconds)
    this.autoSlide = options.autoSlide || 5000;

    // frameColor options: (valid color)
    this.frameColor = options.frameColor || 'transparent';

    // frameSize and borderRadius option: (number in pixels):
    this.frameSize = options.frameSize || 10;
    this.borderRadius = options.borderRadius || '20px'; 

    this.currImg = 0;

    const frame = this.createFrame()
    const container = this.createContainer();
    this.frame = frame;
    this.container = container;
    this.imageList = [];
    this.radioBtnsList = [];

    let div;
    if(typeof(divSelector) === 'string') div = document.querySelector(divSelector);
    else div = divSelector;

    const switchImages = this.createSwitchImages();
    this.switchImages = switchImages;

    frame.append(container,switchImages);
    div.append(frame);
    
    if(typeof(this.autoSlide)==='number') setInterval(this.triggerRight.bind(this),this.autoSlide);
    //clearInterval(this.interval);

    document.addEventListener('keydown', (e) => {
      if(e.keyCode === 37) this.triggerLeft()
      else if(e.keyCode === 39) this.triggerRight()
      else return;
    })

  }

  createFrame(){
    const frame = document.createElement('div');
    this.stylingFrame(frame);
    return frame;
  }

  createContainer(){
    const container = document.createElement('div');
    this.stylingContainer(container);
    return container;
  }

  appendElement(imgLink){
    let img;
    if(typeof(imgLink)==='string'){
      img = document.createElement('img');
      img.src = imgLink;
    }
    else img = imgLink;
    this.stylingImg(img);
    this.imageList.push(img);
    this.container.append(img);

    this.frame.removeChild(this.switchImages);
    this.switchImages = this.createSwitchImages()
    this.frame.append(this.switchImages);
    
    return img
  }

  stylingFrame(frame){
    frame.style.display = 'flex';
    frame.style.flexDirection = 'column';
    frame.style.justifyContent = 'Center';
    frame.style.position = 'absolute';
    frame.style.width = `${this.imgWidth + this.frameSize}px`;
    frame.style.height = `${this.imgHeight + this.frameSize}px`;
    frame.style.left = '50%';
    frame.style.transform = 'translateX(-50%)';
    frame.style.backgroundColor = this.frameColor;
    frame.style.overflow = 'hidden';
    frame.style.borderRadius = this.borderRadius;
  }

  stylingContainer(container){
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    
    container.style.transform = 'translateX(0)';
    container.style.transition = '.7s ease-in-out';
  }

  stylingImg(img){
    img.style.width = `${this.imgWidth}px`;
    img.style.height = `${this.imgHeight}px`;
    img.style.borderRadius = this.borderRadius;
    img.style.padding = `${this.frameSize/2}px`;
  }

  createSwitchImages(){
    const div = document.createElement('div');
    const leftArrow = this.createArrow('left');
    const rightArrow = this.createArrow('right');
    const radioButtons = this.createRadioButtons();
    this.styilingSwitchImages(div);

    div.append(leftArrow,radioButtons,rightArrow);
    return div;
  }

  styilingSwitchImages(div){
    div.style.width = '80%';
    div.style.display = 'flex';
    div.style.justifyContent = 'space-around';
    div.style.alignItems = 'center';
    div.style.position = 'absolute';
    div.style.left = '50%';
    div.style.transform = 'translateX(-50%)';
    div.style.bottom = '0';
    div.style.backgroundColor = 'rgb(255, 255, 255, 0.3)';
    div.style.borderRadius = '20px';
    div.style.padding = '5px';
  }

  createArrow(side){
    const arrow = document.createElement('button');
    if(side==='left'){
      arrow.textContent = '〈';
      arrow.addEventListener('click',() => this.triggerLeft());
    } 
    else{
      arrow.textContent = '〉';
      arrow.addEventListener('click',() => this.triggerRight())
    } 
    this.stylingArrow(arrow);
    return arrow;
  }
  
  stylingArrow(arrow){
    //arrow.style.fontWeight = 'bolder';
    arrow.style.fontSize = '20px'
    arrow.style.backgroundColor = 'transparent';
    arrow.style.border = 'none';
    arrow.addEventListener('mouseover',()=> arrow.style.cursor = 'pointer')

  }

  triggerLeft(){
    this.currImg-=1;
    if(this.currImg < 0){
      this.currImg = this.imageList.length-1;
      this.transformContainer();
    }
    else this.transformContainer();
    this.radioBtnsList[this.currImg].checked = true;
  }

  triggerRight(){
    this.currImg+=1;
    if(this.currImg === this.imageList.length){
      this.currImg = 0;
      this.transformContainer();
    }
    else this.transformContainer();
    this.radioBtnsList[this.currImg].checked = true;
  }

  selectImg(idx){
    this.currImg = idx;
    this.transformContainer();
  }

  transformContainer(){
    this.container.style.transform = `translateX(calc(-${this.imgWidth+this.frameSize}*${this.currImg}px))`;
  }

  createRadioButtons(){
    const radioButtons = document.createElement('div');
    for(let i=0; i<this.imageList.length;i++){
      const btn = this.createRadioBtn();
      btn.addEventListener( 'click',this.selectImg.bind(this,i) );
      btn.addEventListener('mouseover',()=> btn .style.cursor = 'pointer')

      radioButtons.append(btn);
    }
    this.radioBtnsList = radioButtons.childNodes;
    if(this.radioBtnsList.length !== 0) this.radioBtnsList[0].checked = true;
    return radioButtons;
  }

  createRadioBtn(){
    const btn = document.createElement('input');
    btn.type = 'radio';
    btn.name = 'radio-img';
    return btn;
  }

}

module.exports = Slider;