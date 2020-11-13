
$(document).ready(function(){
    // changing current hour in integer
var currentHour = parseInt(moment().format("HH"));
// going through each function in textarea
$("textarea").each(function(){
    // changing timeblockhour in integer so that it can be compared eith current hour
    var timeBlockHour = parseInt($(this).attr("id"));
    // if its future time, time block will show green color
    if(timeBlockHour>currentHour)
    $(this).addClass("future");
    // if its past time, time block will show grey color
    if(timeBlockHour<currentHour)
    $(this).addClass("past");
    // if its current time, time block will show red color
     if(timeBlockHour===currentHour)
    $(this).addClass("present");
})
// setting event listener on click
$("button").on("click",function(){
    // getting the id of current button through "this" and moving it to time variable
    var time=$(this).attr("id");
    // getting the value of textarea through sibling "this" and moving it to value variable
    var value=$(this).siblings("textarea").val();
    // setting the time and value to local storage
    localStorage.setItem(time,value);   
})
// creating array
var dateArray = ["9", "10", "11","12","13","14","15","16","17"];
// creting for loops to display time and value on the daily planner
for (var i = 0; i < dateArray.length; i++) {
    $(`#${dateArray[i]}`).append(localStorage.getItem(`${dateArray[i]}AM`));
}
for (var i = 0; i < dateArray.length; i++) {
    $(`#${dateArray[i]}`).append(localStorage.getItem(`${dateArray[i]}PM`));
}
})
