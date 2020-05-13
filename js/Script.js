var CellSelected_x;
var CellSelected_y;
var Moves;
var Options;

var secs;
var mins;
var cronometer;

var board = new Array(8);
	 
function ResetTime(){
    clearInterval(cronometer);
}

function IniciaTime(){
    secs =59;
    mins =9;
    s = document.getElementById("seconds");
    m = document.getElementById("minutes");

    cronometer = setInterval(
        function(){
            if(secs==-1){
                secs=59;
                mins--;
                if (mins<10) m.innerHTML ="0"+mins;
                else m.innerHTML = mins;

                if(mins==60) mins=0;
            }
            if (secs<10) s.innerHTML ="0"+secs;
            else s.innerHTML = secs;

            secs--;
        }
        ,1000);
}
