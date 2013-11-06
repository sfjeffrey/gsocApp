//script the visualizes event journal reports.

//last active event
var lastActive=[0,0];
var paper;
var report=[];
var xMod=0;
var yMod= -70;
var currentDate = '1/1/0';

//Function which calls the graphical functions based on the message
var printLog = function(string) {
    if ( !isNaN(string[0]) ) {
        var date = string.slice(0,string.search(' '));
        if (date !== currentDate) {
            currentDate = date;
            yMod += 70;
            setDay();
        }
    }
    drawNode(string);
};

//Function that draws a dot according to the journal message and ajoining line
//when appropriate
var drawNode = function(string) {
    var y;
    var color;
    if (string.contains('is active')) {
        y = 50+yMod;
        color = '#22d';
    }
    else if (string.contains('Beginning alarm investigation')) {
        y = 40+yMod;
        color = '#dd0';
    }
    else if (string.contains('Log Message')) {
        y = 30+yMod;
        color = '#2d2';
    }
    else if (string.contains('acknowledge Event')) {
        y = 20+yMod;
        color = '#000';
    }
    else {
        return;
    }
    
    var x = parseX(string);
    var circle = paper.circle( x,y,4).attr('fill',color);
    
//  Function for mousing over the nodes. Moves the popup DIV and changes the text
//  and background color.
    circle.mouseover(function() {
        var messege = string.split(',').slice(0,3).toString();
        $('#popup').css('left',x);
        $('#popup').css('top',y);
        $('#popup').css('background-color',color);
        $('#popup').html(messege);
    });
    
    if (lastActive[1] >= y-10) {
        paper.path('M'+lastActive[0]+' '+lastActive[1]+'L'+x+' '+y);
    }
    lastActive=[x,y];
};


//Function that parses the time of the message into an X coordinate
var parseX = function (string) {
    var colon = string.search(':');
    var time = string.slice(colon-2,colon+3);
    var hour = parseInt(time.split(':')[0],10);
    var minute = parseInt(time.split(':')[1],10);
    
    var output = ( (hour*60)+minute );
    if (xMod === 0) {
        xMod = output - 10;
    }
    
    return output;// - xMod;
};

//Function that sets up the Raphael canvas
var openCanvas = function(){
    $('body').html('');
    paper = Raphael(0,0,1500,80);
    $('body').append('<div id="popup"></div>');
    //setDay();

};

//Function that adds a new row for a new day's worth of alarms
var setDay = function() {
    paper.setSize(1700, paper.height+70);
    paper.text(50,10+yMod,currentDate);
    paper.path('M0 '+(50+yMod)+'L1500 '+(50+yMod)).attr('stroke','orange');
    paper.path('M0 '+(40+yMod)+'L1500 '+(40+yMod)).attr('stroke','orange');
    paper.path('M0 '+(30+yMod)+'L1500 '+(30+yMod)).attr('stroke','orange');
    paper.path('M0 '+(20+yMod)+'L1500 '+(20+yMod)).attr('stroke','orange');
    paper.path('M0 '+(70+yMod)+'L1500 '+(70+yMod)).attr('stroke','black');
    
    for (var i = 1; i <= 24; ++i) {
        paper.path('M'+i*60+' '+(20+yMod)+'L'+i*60+' '+(60+yMod)).attr('stroke','#fd9');
        paper.text( (i*60), 60+yMod, i+":00" );
    }
};

//Function that initiates the App. Converts the plain text of the report into an
//array, sets up the canvas, and then iterates through the array calling the
//print function
var parseReport = function(){
    report = $('textarea').val().split('\n');
    openCanvas();
    for (var j in report) {
        printLog(report[j]);
    }
};
////////////////////////////////////////////////////////////////////////////////
//                            DOCUMENT READY FUNCTION
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
    $('div').click(parseReport);
    
//  Function that removes the popup DIV when the document is clicked.
    $(document).click(function() {
        $('#popup').css('left','-500px');
        $('#popup').css('top','-500px');
        $('#popup').html('');
    });
});



