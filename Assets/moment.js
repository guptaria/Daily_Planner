
$(document).ready(function(){

var Day=moment();
$("#currentDay").text(Day.format("dddd, MMMM Do YYYY"));
updateTime();
setInterval(updateTime,1000);

})

function updateTime()
{
var now=moment();
$("#currentTime").text(now.format("h:mm:ss"));
}


    
    


