

let s = Snap('#figure'),
    mtElemnts = 68,
    widthWindow = document.documentElement.clientWidth;
    console.log('window width: ' + widthWindow + 'px');

    diagram =  s.circle(widthWindow / 4, mtElemnts, 65);
    diagram.attr({
        fill: "white",
        stroke: "#E0E0E0",
        strokeWidth: 3
    });
    diagram2 =  s.circle(widthWindow / 4 * 3, mtElemnts, 65);
    diagram2.attr({
        fill: "white",
        stroke: "#E0E0E0",
        strokeWidth: 3
    });
    description = s.text(widthWindow / 4, mtElemnts, "7-10");
    description.attr({
        x: widthWindow / 4 - description.getBBox().width / 2
    });
    description.addClass('svg-text');
    description2 = s.text(widthWindow / 4 *3 , mtElemnts, "10-15");
    description2.attr({
        x: widthWindow / 4 * 3 - description2.getBBox().width / 2
    });
    description2.addClass('svg-text');
    descriptionSec = s.text(widthWindow / 4, mtElemnts + 15, "sec");
    descriptionSec.attr({
        x: widthWindow / 4 - descriptionSec.getBBox().width / 2,
    });
    descriptionSec.addClass('svg-text');
    descriptionSec2 = s.text(widthWindow / 4, mtElemnts + 15, "sec");
    descriptionSec2.attr({
        x: widthWindow / 4 * 3 - descriptionSec2.getBBox().width / 2,
    });
    descriptionSec2.addClass('svg-text');



    diagramBlueProgress = s.circle(widthWindow / 4, mtElemnts, 65);
    diagramBlueProgress.attr({
        fill: "none",
        stroke: "#1B3CC8",
        strokeDasharray: "10, 390",
        strokeDashoffset: "90",
        strokeWidth: 5
    });

    diagramBlueProgress2 = s.circle(widthWindow / 4 * 3, mtElemnts, 65);
    diagramBlueProgress2.attr({
        fill: "none",
        stroke: "#1B3CC8",
        strokeDasharray: "10, 390",
        strokeDashoffset: "90",
        strokeWidth: 5
    });
    
    descriptionTitle = s.text(widthWindow / 4, mtElemnts * 2 + 30, "Normal accurancy");
    descriptionTitle.attr({
        x: widthWindow / 4 - descriptionTitle.getBBox().width / 2 - 10
    });
    descriptionTitle.addClass('svg-text');
    descriptionTitle2 = s.text(widthWindow / 4, mtElemnts * 2 + 30, "High accurancy");
    descriptionTitle2.attr({
        x: widthWindow / 4 * 3 - descriptionTitle2.getBBox().width / 2 - 10
    });
    descriptionTitle2.addClass('svg-text');

    // Получаем нужный элемент
var element = document.querySelector('#viewer-diagram');
var viewIcon = false;
var animComplete = false;

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
    console.clear();
    viewIcon = true;
    console.log('Вы видите элемент :)' + viewIcon);
    if (viewIcon && animComplete == false) {
      Snap.animate([10,390], [350, 50], function( value ) {
        diagramBlueProgress.attr({ 'stroke-dasharray': value[0] + ', ' + value[1]});
      }, 2000);
      Snap.animate(90,140, function( value ){
        diagramBlueProgress2.attr({ 'strokeDashoffset': value });
      },2000 );
      Snap.animate([10,390], [350, 100], function( value ) {
        diagramBlueProgress2.attr({ 'stroke-dasharray': value[0] + ', ' + value[1]});
      }, 2000);
      animComplete = true;
    }
  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear();
    viewIcon = false;
  }
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);
