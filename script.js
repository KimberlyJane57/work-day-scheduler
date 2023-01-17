const saveBtn = document.getElementsByClassName('saveBtn');
let currentDate = dayjs();
let currentTime = dayjs().hour();
const hour9 = document.getElementById('hour-9');
const hour10 = document.getElementById('hour-10');
const hour11 = document.getElementById('hour-11');
let timeBlock = document.getElementsByClassName('time-block')
let past = document.getElementsByClassName('past');
let present = document.getElementsByClassName('present');
let future = document.getElementsByClassName('future');

$('#currentDay').text(currentDate.format('	MMMM D, YYYY'));

let hour = timeArray [
  dayjs('9').format('hA'),
  dayjs('10').format('hA'),
  dayjs('11').format('hA'),
  dayjs('12').format('hA'),
  dayjs('1').format('hA'),
  dayjs('2').format('hA'),
  dayjs('3').format('hA'),
  dayjs('4').format('hA'),
  dayjs('5').format('hA')
];

let time = dayjs($(timeBlock).text().trim(), 'hA').hour();
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
