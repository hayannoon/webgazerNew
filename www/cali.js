var i = 0;
webgazer.setGazeListener((data, timestamp) =>{
    //console.log(data,  timestamp)
    /*
     if (data != null){
         console.log("x : " + data.x + ", y : " + data.y);
     }
     */

    if (data != null){
        if (i%5 == 0) {
            console.log("x : " + data.x + ", y : " + data.y + ", time stamp : " + timestamp);
            //    console.log(i);
        }
    }
    i++;


})
    .begin()


function button_click(str) {
    console.log("Button " + str + " click");
}


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

function startlog(){
    logger.enableLogger();
}

function stoplog() {
    logger.disableLogger();
}

var version_IE = "0";
var ieLower = navigator.userAgent.match( /MSIE [0-9]{1,}/ );
if ( ieLower != null ){  version_IE = ieLower.toString().replace( "MSIE " , "" );  }

function get_position_of_mousePointer ( event ) {
    event = event || window.event;

    var x = 0; // 마우스 포인터의 좌측 위치
    var y = 0; // 마우스 포인터의 위쪽 위치

    if ( 0 < version_IE && version_IE < 7 ) { // 인터넷 익스플로러 (ie) 6 이하 버전일 경우 적용될 내용
        x = event.offsetX;
        y = event.offsetY;
    }
    else if ( event.pageX ) { // pageX & pageY를 사용할 수 있는 브라우저일 경우
        x = event.pageX;
        y = event.pageY;
    }
    else { // 그외 브라우저용
        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    console.log( " -> x position : " + x + ", y position : " + y);
    //return { positionX : x, positionY : y };
}

function colorChange(id) {

    console.log(id);
    var bodyTag = document.getElementById(id);

    if (window.getComputedStyle(bodyTag).backgroundColor == "rgb(255, 255, 255)"){
        bodyTag.style.backgroundColor = "#ffd400";
    } else{
        bodyTag.style.backgroundColor = "#FFFFFF";
    }

}

function mytest() {
    var past50 = webgazer.getStoredPoints(); // retrieve the stored points
    var precision_measurement = calculatePrecision(past50);
    console.log(precision_measurement);
}