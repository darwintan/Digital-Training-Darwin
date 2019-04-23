//Banner animatons set here
var animation = {

  //Animation 1
  _1:function(){
    console.log('animation: Animation 1 chosen');
    var ani = {
      delay: 0,
      maxphase: 3,
      phase: 0,
      counter: 0,
      duration: 0,
    }

    function runSlide() {

      switch (ani.counter) {
        case 0:
          console.log('Phase 0');

          // elements.image_1.classList.remove('hide');
          // elements.image_2.classList.remove('hide');
          elements.image_3.classList.remove('hide');
          elements.image_4.classList.remove('hide');
          // elements.image_5.classList.remove('hide');
          // elements.text_1.classList.remove('hide');
          // elements.cta.classList.remove('hide');
          elements.cont.classList.remove('hide');
          elements.cont.classList.add('bgcolor');
          // elements.image_5.classList.add('layout-1-animate-2');


            ani.delay = 0;
            ani.counter = 1;
          break;
          case 1:
            console.log('Phase 1');
            elements.image_1.classList.remove('layout-1-animate-2');
            elements.image_1.classList.add('layout-1-animate-1');
            elements.image_2.classList.remove('layout-1-animate-1');
            elements.image_2.classList.add('layout-1-animate-2');

            // elements.text_1.classList.add('layout-1-animate-2');
            // elements.cta.classList.add('layout-1-animate-2');

            ani.delay = 1500;
            ani.counter = 2;
          break;
          case 2:
            console.log('Phase 2');
            elements.image_1.classList.remove('layout-1-animate-1');
            elements.image_1.classList.add('layout-1-animate-2');
            elements.image_2.classList.remove('layout-1-animate-2');
            elements.image_2.classList.add('layout-1-animate-1');


            ani.delay = 1500;
            ani.counter = 3;
          break;
          case 3:
            console.log('Phase 3');
            elements.image_2.classList.remove('layout-1-animate-1');
            elements.image_2.classList.add('layout-1-animate-2');
            elements.image_1.classList.remove('layout-1-animate-2');
            elements.image_1.classList.add('layout-1-animate-1');

            ani.phase ++
            ani.delay = 1500;
            ani.counter = 4;
          break;
          case 4:
            console.log('Phase 4');
            elements.image_1.classList.remove('layout-1-animate-1');
            elements.image_1.classList.add('layout-1-animate-2');
            elements.image_2.classList.remove('layout-1-animate-2');
            elements.image_2.classList.add('layout-1-animate-1');


            ani.delay = 1500;
            ani.counter = 0;
          break;
        }

        if (ani.phase < ani.maxphase) {
           ani.duration = ani.duration+ani.delay;
           setTimeout(runSlide, ani.delay)
        } else {
          console.log('runSlide(): endframe. Total Duration:' + (ani.duration/1000) +'s. Each phase duration (Total of '+ani.maxphase+' phases): ' + ((ani.duration/1000)/ani.maxphase) +'s' );
          //END
        }
      }//END runSlide();
      runSlide();
  },

  //Animation 2
  _2:function(){
    console.log('animation: Animation 2 chosen');
    var ani = {
      delay: 0,
      maxphase: 3,
      phase: 0,
      counter: 0,
      duration: 0,
    }

    function runSlide() {

      switch (ani.counter) {
        case 0:
          console.log('Phase 0');

          elements.image_1.classList.remove('hide');
          // elements.image_2.classList.remove('hide');
          // elements.image_3.classList.remove('hide');
          // elements.image_4.classList.remove('hide');
          // elements.image_5.classList.remove('hide');
          // elements.text_1.classList.remove('hide');
          // elements.cta.classList.remove('hide');
          elements.cont.classList.remove('hide');
          elements.cont.classList.add('bgcolor');
          // elements.image_5.classList.add('layout-1-animate-2');


            ani.delay = 0;
            ani.counter = 1;
          break;
          case 1:
            console.log('Phase 1');
            elements.image_1.classList.remove('layout-2-animate-2');
            elements.image_1.classList.add('layout-2-animate-1');
            elements.image_2.classList.remove('layout-2-animate-1');
            elements.image_2.classList.add('layout-2-animate-2');
            elements.image_5.classList.remove('layout-2-animate-1');
            elements.image_5.classList.add('layout-2-animate-2');
            elements.image_6.classList.remove('layout-2-animate-1');
            elements.image_6.classList.add('layout-2-animate-2');

            // elements.text_1.classList.add('layout-1-animate-2');
            // elements.cta.classList.add('layout-1-animate-2');

            ani.delay = 1500;
            ani.counter = 2;
          break;
          case 2:
            console.log('Phase 2');
            elements.image_1.classList.remove('layout-2-animate-1');
            elements.image_1.classList.add('layout-2-animate-2');
            elements.image_2.classList.remove('layout-2-animate-2');
            elements.image_2.classList.add('layout-2-animate-1');


            ani.delay = 1500;
            ani.counter = 3;
          break;
          case 3:
            console.log('Phase 3');
            elements.image_2.classList.remove('layout-2-animate-1');
            elements.image_2.classList.add('layout-2-animate-2');
            elements.image_1.classList.remove('layout-2-animate-1');
            elements.image_1.classList.add('layout-2-animate-2');
            elements.image_5.classList.remove('layout-2-animate-2');
            elements.image_5.classList.add('layout-2-animate-1');
            elements.image_6.classList.remove('layout-2-animate-2');
            elements.image_6.classList.add('layout-2-animate-1');

            ani.phase ++
            ani.delay = 1500;
            ani.counter = 0;
          break;

        }

        if (ani.phase < ani.maxphase) {
           ani.duration = ani.duration+ani.delay;
           setTimeout(runSlide, ani.delay)
        } else {
          console.log('runSlide(): endframe. Total Duration:' + (ani.duration/1000) +'s. Each phase duration (Total of '+ani.maxphase+' phases): ' + ((ani.duration/1000)/ani.maxphase) +'s' );
          //END
        }
      }//END runSlide();
      runSlide();
  },


  //Animation 3
  _3:function(){
    console.log('animation: Animation 3 chosen');
    var ani = {
      delay: 0,
      maxphase: 3,
      phase: 0,
      counter: 0,
      duration: 0,
    }

    function runSlide() {

      switch (ani.counter) {
        case 0:
          console.log('Phase 0');

          // elements.image_1.classList.remove('hide');
          // elements.image_2.classList.remove('hide');
          // elements.image_3.classList.remove('hide');
          // elements.image_4.classList.remove('hide');
          elements.image_5.classList.remove('hide');
          elements.image_6.classList.remove('hide');
          // elements.text_1.classList.remove('hide');
          // elements.cta.classList.remove('hide');
          elements.cont.classList.remove('hide');
          elements.cont.classList.add('bgcolor');
          // elements.image_5.classList.add('layout-1-animate-2');


            ani.delay = 0;
            ani.counter = 1;
          break;
          case 1:
            console.log('Phase 1');
            elements.image_1.classList.remove('layout-3-animate-2');
            elements.image_1.classList.add('layout-3-animate-1');
            elements.image_2.classList.remove('layout-3-animate-1');
            elements.image_2.classList.add('layout-3-animate-2');

            ani.delay = 1500;
            ani.counter = 2;
          break;
          case 2:
            console.log('Phase 2');
            elements.image_1.classList.remove('layout-3-animate-1');
            elements.image_1.classList.add('layout-3-animate-2');
            elements.image_2.classList.remove('layout-3-animate-2');
            elements.image_2.classList.add('layout-3-animate-1');


            ani.delay = 1500;
            ani.counter = 3;
          break;
          case 3:
            console.log('Phase 3');
            elements.image_2.classList.remove('layout-3-animate-1');
            elements.image_2.classList.add('layout-3-animate-2');
            elements.image_1.classList.remove('layout-3-animate-2');
            elements.image_1.classList.add('layout-3-animate-1');

            ani.phase ++
            ani.delay = 1500;
            ani.counter = 4;
          break;
          case 4:
            console.log('Phase 4');
            elements.image_1.classList.remove('layout-3-animate-1');
            elements.image_1.classList.add('layout-3-animate-2');
            elements.image_2.classList.remove('layout-3-animate-2');
            elements.image_2.classList.add('layout-3-animate-1');


            ani.delay = 1500;
            ani.counter = 0;
          break;
        }

        if (ani.phase < ani.maxphase) {
           ani.duration = ani.duration+ani.delay;
           setTimeout(runSlide, ani.delay)
        } else {
          console.log('runSlide(): endframe. Total Duration:' + (ani.duration/1000) +'s. Each phase duration (Total of '+ani.maxphase+' phases): ' + ((ani.duration/1000)/ani.maxphase) +'s' );
          //END
        }
      }//END runSlide();
      runSlide();
  },

}
