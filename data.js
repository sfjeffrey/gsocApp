//This script demonstrates how data taken from a google doc would be encoded to
//be used by the static scripts to be displayed. In the live version this data 
//would be accessed by the server side script and then passed to the client side
//script


//This is an excerpt from the fire panel document encoded in comma delimited data.
//This script transforms this into something usable and eventually displayable by
//the client side script.
var rawFireDoc = 
"1201 Charleston,10/29/2013,0615,10/29/2013,1700,Jeremy,XL Construction,707-718-0816,#12,Jeremy,Foliaki/Jeremy,,,RTS P ,Howard;\
B40 and Garage,10/29/2013,0616,10/29/2013,1500,Mike Ingram,Novo,650-207-6563,#10,Helfrich,Mike/Hung,1550,,Iplex1 ,Howard;\
1215 Charleston,10/29/2013,0707,10/29/2013,1700,Sal,XL Construction,209-595-1416,#77,Sal,Sal/Hung,,3,Sal,Rudy;\
B41,10/29/2013,800,10/29/2013,1700,roger shuler,paris extreme builders,408 469 0731,10,Roger,Jose,1700,,Mobile1,eric;\
B43,10/29/2013,800,10/29/2013,1700,roger shuler,paris extreme builders,408 469 0731,10,Roger,Jose,,,Mobile1 ,eric;\
1500 Salado (GWC4),10/29/2013,0839,10/29/2013,1200,David Portillo,ASI,650-468-3967,77,David P.,Ortiz,1200,77,David P.,rdeocampo;\
1501 Salado (GWC2),10/29/2013,0852,10/29/2013,1500,Dustin,VFMC,650-265-8566,#4,Dustin,rdeocampo,1534,,GW1,Howard;\
2015,10/29/2013,1045,1029/2013,1500,Chris,RTS,925 250 5847,10,Chris,Rudy,1256,#12,Chris,rdeocampo;\
1395 Charleston,10/29/2013,1100,10/29/2013,1400,Nino Petrone,Devcon,408-210-5547,#4,Nino,Gurrola,1358,#4,Nino,Gurrola;\
CL2,10/29/2013,1900,10/29/2013,2030,Moses Herrera,Facilities ,(650)265-8405,177,Young ,Eric ,2045,,CRover,Howard;\
1758 Shoreline,10/29/2013,1817,10/29/2013,2200,Kurt,RTS,(925)580-8678,#3,Kurt,Mikhail/Kurt,,,HubR,Howard;";

var fireDoc = [];
for (var i in rawFireDoc.split(';')) {
    fireDoc.push(rawFireDoc.split(';')[i].split(','));
}



//This is the data for dispatch. It allows the dispatched to quickly find the 
//appropriate officer for the right building on the right shift.
var dispatchList = {
    day : [
        {
            name:"B50",
            officers:'Mobile1, uPlex'
        },
        {
            name:"B51",
            officers:'Mobile1, uPlex'
        },
        {
            name:"B52",
            officers:'Mobile2, uPlex'
        },
        {
            name:"pyramid1",
            officers:'Mobile2, Bub Rover'
        },
        {
            name:"pyramid2",
            officers:'Mobile2, Bub Rover'
        },
        {
            name:"3011",
            officers:'Mobile3, Hiccup1'
        },
        {
            name:"3081",
            officers:'Mobile3, Hiccup2'
        }
    ],
    grave : [
        {
            name:"B50",
            officers:'Mobile1, uPlex'
        },
        {
            name:"B51",
            officers:'Mobile1, uPlex'
        },
        {
            name:"B52",
            officers:'Mobile1, uPlex'
        },
        {
            name:"pyramid1",
            officers:'Mobile1'
        },
        {
            name:"pyramid2",
            officers:'Mobile3'
        },
        {
            name:"3011",
            officers:'Mobile3, Hiccup1'
        },
        {
            name:"3081",
            officers:'Mobile3, Hiccup2'
        }
    ],
};


