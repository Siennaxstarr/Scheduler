// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentDay = $("#currentDay")
  currentDay.text(dayjs().format('DD/MM/YYYY'))
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How might the id be useful when saving the description in local storage?

  var workTime = dayjs().hour();
  console.log(workTime)
  var timeblock = $(".time-block");

  timeblock.each(function () {
    var timeblockid = $(this).attr("id").split("-")[1]
    console.log(timeblockid)
    if (workTime > timeblockid) {
      $(this).addClass("past")
    }
    if (workTime < timeblockid) {
      $(this).addClass("future")
    }
    if (workTime == timeblockid) {
     $(this).addClass("present") 
    }
  })
$(".saveBtn").on ("click", function(){
console.log ("clicked")
var sibling= $(this).siblings("textarea").val()
console.log (sibling)
var parent =$(this).parent().attr("id")
console.log (parent)
localStorage.setItem(parent, sibling)
})

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // TODO: Add code to display the current date in the header of the page.
});

const calendarGrid = document.getElementById("calendarGrid");
const currentMonth = document.getElementById("currentMonth");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];