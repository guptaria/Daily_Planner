// var $txt=$("#textArea");


// $(document).ready(function(){
// $(".saveBtn").on("click",function(){
// txt=txt.val();
// alert("yay got timeblock " + txt);
// localStorage.setItem("timeblock",JSON.stringify(txt));
// var final=JSON.parse(localStorage.getItem("timeblock"));
// $txt.append(final);
// })
// });

// console.log(JSON.stringify(final));
//  console.log("this is txt" + inLocal);



// mystorage=localStorage.setItem("what",JSON.stringify(value9am));
// var final=JSON.parse(localStorage.getItem("what"));

$(document).ready(function(){
let currentHour = moment().format("H");
$("textarea").each(function(){
    var timeBlockHour = $(this).attr("id");
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
    localStorage.getItem("time");
})
 $("#9").append(localStorage.getItem("9AM"));
 $("#10").append(localStorage.getItem("10AM"));
 $("#11").append(localStorage.getItem("11AM"));
 $("#12").append(localStorage.getItem("12AM"));
 $("#13").append(localStorage.getItem("13AM"));
 $("#14").append(localStorage.getItem("14AM"));
 $("#15").append(localStorage.getItem("15AM"));
 $("#16").append(localStorage.getItem("16AM"));
 $("#17").append(localStorage.getItem("17AM"));

})
