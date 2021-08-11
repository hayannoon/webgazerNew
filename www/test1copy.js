var i = 0;
var file;
var dot_count = 0;

webgazer.setGazeListener((data) =>{
    //console.log(data,  timestamp)

    if (data != null){
        if (i%5 == 0) {
            var curTime = new Date();
            console.log("x : " + data.x + ", y : " + data.y + ", time stamp : " + curTime.getTime()+ ", count: " + dot_count);
            mydata.push("x : " + data.x + ", y : " + data.y + ", time stamp : " + curTime.getTime()+ ", count: " +  dot_count + "\n");
        //    console.log(i);
            dot_count++;
        }
    }
    i++;


})
.begin()

function save_file() {
    var sFileName = "file_test.html";

    var properties = {type: 'text/plain'}; // Specify the file's mime-type.
    try {
        // Specify the filename using the File constructor, but ...
        file = new File(data, sFileName, properties);
    } catch (e) {
        // ... fall back to the Blob constructor if that isn't supported.
        file = new Blob(mydata, properties);
    }
    var url = URL.createObjectURL(file);
    document.getElementById('link').href = url;


}


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

    console.log("width : " + window.outerWidth);
    console.log("height : " + window.outerHeight);
    mydata.push("width : " + window.outerWidth + ", height: " + window.outerHeight + "\n");


    logger.disableLogger();
    save_file();
}



function change_dot_color() {
    var gazeDot = document.getElementById("webgazerGazeDot");

    if (gazeDot.style.background == 'black'){
        gazeDot.style.background = '#00ff0000';
    } else{
        gazeDot.style.background = 'black';
    }

}

function get_position_of_mousePointer ( event ) {
    event = event || window.event;

    var x = 0; // 마우스 포인터의 좌측 위치
    var y = 0; // 마우스 포인터의 위쪽 위치

    if ( event.pageX ) { // pageX & pageY를 사용할 수 있는 브라우저일 경우
        x = event.pageX;
        y = event.pageY;
    }
    else { // 그외 브라우저용
        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    console.log( " -> x position : " + x + ", y position : " + y);
    //return { positionX : x, positionY : y };



    document.onkeydown = noEvent;
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
function noEvent() {
    if (event.keyCode == 116) {
        event.keyCode= 2;
        return false;
    }
    else if(event.ctrlKey && (event.keyCode==78 || event.keyCode == 82))
    {
        return false;
    }
}

function openNew(){
    mydata.push("Meeting Start!\n");
    mydata.push("width : " + window.outerWidth + ", height: " + window.outerHeight + "\n");
    console.log("Meeting Start!\n");
    console.log("width : " + window.outerWidth);
    console.log("height : " + window.outerHeight);
}



