(function(){ 

    document.onreadystatechange = () => {

      if (document.readyState === 'complete') {
                
        /**
         * Setup your Lazy Line element.
         * see README file for more settings
         */

        let el = document.querySelector('#appicon');
        let myAnimation = new LazyLinePainter(el, {
            "ease":"easeInQuad",
            "strokeWidth":3,
            "strokeOpacity":1,
            "strokeColor":"#1B3CC8",
            "strokeCap":"square"}); 
        myAnimation.paint(); 

        let el2 = document.querySelector('#facescan-icon');
                let myAnimation2 = new LazyLinePainter(el2, {"ease":"easeInQuad","strokeWidth":3,"strokeOpacity":1,"strokeColor":"#1B3CC8","strokeCap":"square"}); 
                myAnimation2.paint();
        
        let el3 = document.querySelector('#uploadicon');
        let myAnimation3 = new LazyLinePainter(el3, {"ease":"easeInQuad","strokeWidth":3,"strokeOpacity":1,"strokeColor":"#1B3CC8","strokeCap":"square"}); 
        myAnimation3.paint();

        let el4 = document.querySelector('#backend-icon');
                let myAnimation4 = new LazyLinePainter(el4, {"ease":"easeInQuad","strokeWidth":3,"strokeOpacity":1,"strokeColor":"#1B3CC8","strokeCap":"square"}); 
                myAnimation4.paint(); 
      }
    }

  })();