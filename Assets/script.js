
$(document).ready(function(){
var currentHour = parseInt(moment().format("HH"));
$("textarea").each(function(){
    var timeBlockHour = parseInt($(this).attr("id"));
    if(timeBlockHour>currentHour)
    $(this).addClass("future");
    if(timeBlockHour<currentHour)
    $(this).addClass("past");
     if(timeBlockHour===currentHour)
    $(this).addClass("present");
})
$("button").on("click",function(){
    var time=$(this).attr("id");
    var value=$(this).siblings("textarea").val();
    localStorage.setItem(time,value);   
})
var dateArray = ["9", "10", "11","12","13","14","15","16","17"];

for (var i = 0; i < dateArray.length; i++) {
    $(`#${dateArray[i]}`).append(localStorage.getItem(`${dateArray[i]}AM`));
}
for (var i = 0; i < dateArray.length; i++) {
    $(`#${dateArray[i]}`).append(localStorage.getItem(`${dateArray[i]}PM`));
}
})
