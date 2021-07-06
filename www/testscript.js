
var logger = function()
{
    var oldConsoleLog = null;
    var pub = {};

    pub.enableLogger =  function enableLogger()
    {
        if(oldConsoleLog == null)
            return;

        window['console']['log'] = oldConsoleLog;
    };

    pub.disableLogger = function disableLogger()
    {
        oldConsoleLog = console.log;
        window['console']['log'] = function() {};
    };

    return pub;
}();

var myListner = webgazer.setGazeListener((data,  timestamp) => {
    console.log(data,  timestamp)
});

logger.disableLogger();

myListner.begin();

function stoplog() {

    var section = document.getElementById("top_section");
    section.style.top = "5%";
    section.style.left = "5%";
    section.style.width = "90%"
    section.style.height = "90%";

    btn1 = document.getElementById("red_button");
    btn2 = document.getElementById("blue_button");
    btn3 = document.getElementById("green_button");
    btn4 = document.getElementById("gold_button");
    btn1.disabled = 'disabled';
    btn2.disabled = 'disabled';
    btn3.disabled = 'disabled';
    btn4.disabled = 'disabled';

    //logger.enableLogger();
    console.log("TEST END!!!")
    test_begin = true;
}

function startlog() {

    var section = document.getElementById("top_section");
    section.style.top = "0";
    section.style.left = "0";
    section.style.width = "100%"
    section.style.height = "100%";

    btn1 = document.getElementById("red_button");
    btn2 = document.getElementById("blue_button");
    btn3 = document.getElementById("green_button");
    btn4 = document.getElementById("gold_button");
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;

    //logger.enableLogger();
    console.log("TEST BEGIN!!!")
    test_begin = true;


}

var test_begin = new Boolean(false);


function red_button_click() {

    if (test_begin) { //start test
        logger.enableLogger();
        test_begin = false;
        console.log("red button clicked\nx : 0px ~ 895px, y : 135px ~ 627px");

    } else{
        test_begin = true;
        console.log("red button test end");
        logger.disableLogger();
    }

}

function blue_button_click() {
    if (test_begin) { //start test
        logger.enableLogger();
        test_begin = false;
        console.log("blue button clicked\nx : 895px ~ 1791px, y : 135px ~ 627px");

    } else{
        test_begin = true;
        console.log("blue button test end");
        logger.disableLogger();
    }

}

function green_button_click() {
    if (test_begin) { //start test
        logger.enableLogger();
        test_begin = false;
        console.log("green button clicked\nx : 0px ~ 895px, y : 627px ~ 1119px");

    }else{
        test_begin = true;
        console.log("green button test end");
        logger.disableLogger();
    }

}

function gold_button_click() {
    if (test_begin) { //start test
        logger.enableLogger();
        test_begin=false;
        console.log("gold button clicked\nx : 895px ~ 1791px, y : 627 ~ 1119px");

    }
    else{
        test_begin = true;
        console.log("gold button test end");
        logger.disableLogger();
    }
}