//Banner Breakpoints
var breakPoints = [
  {
    w:300,
    h:600,
    layout: layouts._1,
    animation: animation._1
  },
  {
    w:300,
    h:250,
    layout: layouts._2,
    animation: animation._2
  },
  {
    w:970,
    h:250,
    layout: layouts._3,
    animation: animation._3
  },

]

//Calculate the decimal ratio for each breakpoint
function makeRatios(){
  console.log('makeRatios()');
  breakPoints.forEach(function(element) {
    element.r = element.w / element.h;
  });
}

//Select the correct layout for the banner ratio
function selectBanner(){

  console.log('selectBanner: Banner Size W: ' + banner.w + ' H: ' + banner.h);

  //Get the ratio of the window
  var ratio = banner.w/banner.h;

  //Calculate the difference in ratio between the window and the banner presets
  breakPoints.forEach(function(element) {

    element.d = ratio - element.r;

    //make negative values +ve
    if (element.d < 0) {
      element.d = element.d*-1
    }
  });

  //Sort the banner layouts to float the closest ratio to index 0
  breakPoints.sort(function(obj1, obj2) {
	   return obj1.d - obj2.d;
  });

  banner.layout = breakPoints[0].layout;
  banner.animation = breakPoints[0].animation;

}
