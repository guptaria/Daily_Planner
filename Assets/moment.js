// This is moment js(jquery liberary)
// its added to set time, date 

// this method will start execution when the page is loaded
$(document).ready(function(){  

var Day=moment();
// getting current day and date
$("#currentDay").text(Day.format("dddd, MMMM Do YYYY")); 
updateTime();
// updating time so that it will continue like clock without refreshing the page
setInterval(updateTime,1000);

})
// update method to update time.
function updateTime()
{
var now=moment();
$("#currentTime").text(now.format("h:mm:ss"));
}


    
    


