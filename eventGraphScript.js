//script the visualizes event journal reports.

//last active event
var lastActive;
var paper;
var report=[];

var printLog = function(string) {
    var message = string.split(',');
    if (string.contains('is active')) {
console.log('is active');
        var x = parseX(string);
        var circle = paper.circle( x,50,4);
        circle.attr('fill','#ff9999');
        lastActive=[x,50];
    }
    else if (string.contains('Beginning alarm investigation')) {
        var x = parseX(string);
        var circle = paper.circle( x,40,4);
        circle.attr('fill','#00aa00');
        if (lastActive[1] === 50) {
            var line = paper.path('M'+lastActive[0]+' '+lastActive[1]+'L'+x+' 40');
            lastActive=[x,40];
        }
    }
    else if (string.contains('Log Message')) {
        var x = parseX(string);
        var circle = paper.circle( x,30,4);
        circle.attr('fill','#0000aa');
        if (lastActive[1] >= 40) {
            var line = paper.path('M'+lastActive[0]+' '+lastActive[1]+'L'+x+' 30');
            lastActive=[x,30];
        }
    }
};

var parseX = function (string) {
    var colon = string.search(':');
    var time = string.slice(colon-2,colon+3);
    var hour = parseInt(time.split(':')[0],10);
    var minute = parseInt(time.split(':')[1],10);
    
    return ( (hour*60)+minute );
};

var openCanvas = function(){
    $('body').html('');
        paper = Raphael(0,0,1500,60);
    paper.path('M0 50L1500 50');
    paper.path('M0 40L1500 40');
    paper.path('M0 30L1500 30');
};
var parseReport = function(){
    var raw = $('input').val().split(',');
    for (var i = 0; i <= raw.length; i+=6){
        report.push(raw[i]+raw[i+1]+raw[i+2]+raw[i+3]+raw[i+4]+raw[i+5]);
    }
    openCanvas();
    for (var j in report) {
        printLog(report[j]);
    }
};


$(document).ready(function(){
    $('div').click(parseReport);
})