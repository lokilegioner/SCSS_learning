
let pointers = document.querySelectorAll('.waySvgBox');
    arrBox = [];
    centerPoints = [];
    circleStrokes = [];
    linesDown = [];
    myAnimation = [];

    for (let i = 0; i < 5; i++) {
      arrBox[i] = Snap(pointers[i]);
      centerPoints[i] = arrBox[i].circle(32.5, 25, 10);
      centerPoints[i].attr({
        fill: "white",
        stroke: "none",
        strokeWidth: 0
      });

      circleStrokes[i] = arrBox[i].circle(32.5, 25, 23);
      circleStrokes[i].attr({
        fill: "none",
        stroke: "white",
        strokeWidth: 3
      });

      if (i < 4) {
        linesDown[i] = arrBox[i].line(32.5, 49, 32.5, 196);
        linesDown[i].attr({
        stroke: "white",
        strokeWidth: 2,
        strokeDasharray: "10, 137",
        strokeDashoffset: "0"
      });
      }
    }


    document.body.onload = function () {
      for (let i = 0; i < 4; i++) {
        Snap.animate([10,137], [147, 0], function( value ) {
          linesDown[i].attr({ 'stroke-dasharray': value[0] + ', ' + value[1]});
        }, 2000);
      }
    };

let s = Snap('#figure');
    bottomPlace = 40;

    widthWindow = document.documentElement.clientWidth;
    console.log('window width: ' + widthWindow + 'px');

let 
    widthSvgBox = 300;
    heightSvgBox = widthSvgBox / 2;
    minPadding = widthSvgBox / 16;
    radiusDiagram = heightSvgBox / 2 - minPadding;
    centerY = heightSvgBox / 2;
    centerX1 = centerY;
    centerX2 = centerY * 3;

    diagram =  s.circle(centerX1, centerY, radiusDiagram);
    diagram.attr({
        fill: "white",
        stroke: "#E0E0E0",
        strokeWidth: 3
    });
    diagram2 =  s.circle(centerX2, centerY, radiusDiagram);
    diagram2.attr({
        fill: "white",
        stroke: "#E0E0E0",
        strokeWidth: 3
    });
    description = s.text(centerX1, centerY, "7-10");
    description.attr({
        x: centerX1 - description.getBBox().width / 2
    });
    description.addClass('svg-text');
    description2 = s.text(centerX2 , centerY, "10-15");
    description2.attr({
        x: centerX2 - description2.getBBox().width / 2
    });
    description2.addClass('svg-text');
    descriptionSec = s.text(centerX1, centerY + 15, "sec");
    descriptionSec.attr({
        x: centerX1 - descriptionSec.getBBox().width / 2,
    });
    descriptionSec.addClass('svg-text');
    descriptionSec2 = s.text(centerX1, centerY + 15, "sec");
    descriptionSec2.attr({
        x: centerX2 - descriptionSec2.getBBox().width / 2,
    });
    descriptionSec2.addClass('svg-text');



    diagramBlueProgress = s.circle(centerX1, centerY, radiusDiagram);
    diagramBlueProgress.attr({
        fill: "none",
        stroke: "#1B3CC8",
        strokeDasharray: "0, 343",
        strokeDashoffset: "90",
        strokeWidth: 5
    });

    diagramBlueProgress2 = s.circle(centerX2, centerY, radiusDiagram);
    diagramBlueProgress2.attr({
        fill: "none",
        stroke: "#1B3CC8",
        strokeDasharray: "0, 343",
        strokeDashoffset: "90",
        strokeWidth: 5
    });
    
    descriptionTitle = s.text(centerX1, centerY * 2 + 5, "Normal accurancy");
    descriptionTitle.attr({
        x: centerX1 - descriptionTitle.getBBox().width / 2 - 5
    });
    descriptionTitle.addClass('svg-text');
    descriptionTitle2 = s.text(centerX1, centerY * 2 + 5, "High accurancy");
    descriptionTitle2.attr({
        x: centerX2 - descriptionTitle2.getBBox().width / 2 - 5
    });
    descriptionTitle2.addClass('svg-text');

    // Получаем нужный элемент
var element = document.querySelector('#viewer-diagram');
var step01 = document.querySelector('#decor');
var viewIcon = false;
var animDiagramComplete = false;
var animDecorComplete = false;

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    
    // console.clear();
    viewIcon = true;

    console.log('Вы видите элемент :)' + viewIcon);
    if (viewIcon && animDiagramComplete == false) {
      Snap.animate([0,343], [309, 44], function( value ) {
        diagramBlueProgress.attr({ 'stroke-dasharray': value[0] + ', ' + value[1]});
      }, 2000);
      // Snap.animate(90,140, function( value ){
      //   diagramBlueProgress2.attr({ 'strokeDashoffset': value });
      // },2000 );
      Snap.animate([0,343], [265, 88], function( value ) {
        diagramBlueProgress2.attr({ 'stroke-dasharray': value[0] + ', ' + value[1]});
      }, 2000);
      animDiagramComplete = true;
    }


    if (target == step01 && viewIcon && animDecorComplete == false) {
      // Snap.animate([10,137], [147, 0], function( value ) {
      //   lineDown.attr({ 'stroke-dasharray': value[0] + ', ' + value[1]});
      // }, 2000);

      
      animDecorComplete = true;
      // console.log(lineDown.getBBox());
    }
  } else {
    // Если элемент не видно, то запускаем этот код
    // console.clear();
    viewIcon = false;
  }
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
  Visible (step01);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);
Visible (step01);
