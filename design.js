//This script controls aesthetic and functional graphics in the App
var $sideBar;
var $fireDoc;
var $dataBox;


//==============================================================================
//                          DOCUMENT READY FUNCTION
//==============================================================================
$(document).ready(function(){
//  elements
//      side bar
    $('body').append('<div class="sideBar"></div>');
//      fire panels
    $('body').append('<div class="dataBox" id="firePanelBox"></div>');
    var fireString ='<div class="statusBar">Fire Panel</div>\
<table><tr><th>Building</th><th style="background-color:#ee\
f">Start Date</th><th>Start Time</th><th style="background-color:#eef">End Date<\
/th><th>End Time</th><th style="background-color:#eef">Contact</th><th>Company</\
th><th style="background-color:#eef">Phone</th>></tr>';
    for (var i in fireDoc) {
        if (fireDoc[i][11] !== '') {
            continue;
        }
        fireString+='<tr>';
        for (var j in fireDoc[i]) {
            if ( j > 7) { continue; }
            fireString+= j%2===0 ? '<td>' : '<td style="background-color:#eef">';
            fireString+=fireDoc[i][j];
            fireString+='</td>';
        }
        fireString+='</tr>';
    }
    fireString+='</table>';
    $('#firePanelBox').html(fireString);
//      dispatch
    $('body').append('<div class="dataBox" id="dispatchBox"></div>');
    var dispatchString = '<form name="dispatchShift>';
    for (var i in dispatchList) {
        dispatchString += '<input type="radio" name="shift" id="'+i+'">'+i;
    }
    dispatchString += '</form><br><select id="dispatchOptions"></select>';
    $('#dispatchBox').append(dispatchString);
    var optionString= '';
        for (var i in dispatchList['day']) {
            var name = dispatchList['day'][i].name;
            optionString += '<option value="'+name+'">'+name+'</option>';
        }
        $('#dispatchOptions').html(optionString);
    
    //Variables
    $sideBar = $('.sideBar');
    $dataBox = $('.dataBox');
    $fireDoc = $('#fireDoc');
    
    
    //functions
    $sideBar.mouseenter(function() {
        $(this).animate({'right':'-10px'},500);
    });
    $sideBar.mouseleave(function() {
        $(this).animate({'right':'-95px'},500);
    });
    
    $dataBox.click(function() {
        $('.selected').removeClass('selected');
        $(this).children('.statusBar').addClass('selected');    
    });
    $('#dispatchOptions').select(function(){
        
    });
    
    
});