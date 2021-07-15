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