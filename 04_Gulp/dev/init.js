//Global Elements
var elements = {
  image_1: document.getElementById('image-container-1'),
  image_2: document.getElementById('image-container-2'),
  image_3: document.getElementById('image-container-3'),
  image_4: document.getElementById('image-container-4'),
  image_5: document.getElementById('image-container-5'),
  image_6: document.getElementById('image-container-6'),
  cont: document.getElementById('banner'),
  debug: document.getElementById('debug'),
  border: document.getElementById('border'),
}

//Convert string E.g. '100px' to int '100'
function pxToInt(txt){
  return parseInt(txt, 10);
}

//Set up the banner object to decorate
var banner = {
  w:pxToInt(elements.cont.style.width),
  h:pxToInt(elements.cont.style.height),
  exit:'https://www.royalcanin.co.uk/',
  updateSize: function(){
    banner.w = pxToInt(elements.cont.style.width);
    banner.h = pxToInt(elements.cont.style.height);
  }
}

//Run the Banner
function init(){
  console.log('init()');

  //debug diologue
  elements.debug.innerHTML += banner.w + ' x ' +banner.h;

  // size the border
  elements.border.style.width = (banner.w-2) + 'px'
  elements.border.style.height = (banner.h-2) + 'px'

  //ad an exit link for the Banner
  elements.cont.addEventListener('click', function(){
    window.open(banner.exit, "_blank")
  })

  makeRatios(); //Calculate the ratios of the breakpoints as decimal
  selectBanner(); //Select the closest breakpoint for layout

  console.log('Banner: ' , banner);
  console.log('BreakPoints: ' , breakPoints);

  banner.layout() //Layout the elemets for the banner
  banner.animation() //Animate the banner
}
