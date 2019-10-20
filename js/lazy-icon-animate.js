var viewIcon = false;

(function(){ 

    document.onreadystatechange = () => {

      if (document.readyState === 'complete') {
        let faceScan = document.querySelector('#iconface-scan');
        let myAnimation01 = new LazyLinePainter(faceScan, {
            "ease":"easeOutQuad",
            "strokeWidth":4,
            "strokeOpacity":1,
            "strokeColor":"#1B3CC8",
            "strokeCap":"square",
            "reverse":true
        }); 
        myAnimation01.paint();
        let el = document.querySelector('#iconapp-blue-mobile');
        let myAnimation = new LazyLinePainter(el, {
          "ease":"easeOutCubic",
          "strokeWidth":2,
          "strokeOpacity":1,
          "strokeColor":"#1B3CC8",
          "strokeCap":"square",
          "reverse":true
        }); 
        myAnimation.paint();
      }
    }

  })();

  