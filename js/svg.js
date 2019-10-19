

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
        strokeDasharray: "351.92, 50",
        strokeDashoffset: "100",
        strokeWidth: 5
    });
    diagramBlueProgress2 = s.circle(widthWindow / 4 * 3, mtElemnts, 65);
    diagramBlueProgress2.attr({
        fill: "none",
        stroke: "#1B3CC8",
        strokeDasharray: "351.92, 100",
        strokeDashoffset: "150",
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
