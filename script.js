let currentDate = dayjs();
let currentTime = dayjs().hour();

let timeArray = [
  dayjs().hour('9').format('H'),
  dayjs().hour('10').format('H'),
  dayjs().hour('11').format('H'),
  dayjs().hour('12').format('H'),
  dayjs().hour('13').format('H'),
  dayjs().hour('14').format('H'),
  dayjs().hour('15').format('H'),
  dayjs().hour('16').format('H'),
  dayjs().hour('17').format('H')
];

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $('#currentDay').text(currentDate.format('MMMM D, YYYY'));  


  populateLocalStorage()
  setTimeBlock()

  // TODO: Add a listener for click events on the save button. This code should
  $('.saveBtn').click(function(){
    localStorage.setItem($(this).parent().attr('id'), $(this).parent().children('textarea').val())

  })


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
function populateLocalStorage(){
  let hour9 = localStorage.getItem('hour-9')
  if(!hour9) {
    localStorage.setItem('hour-9','')
    hour9=''
}
  $('#hour-9').children('textarea').val(hour9)

  let hour10 = localStorage.getItem('hour-10')
  if(!hour10) {
    localStorage.setItem('hour-10','')
    hour10=''
}
  $('#hour-10').children('textarea').val(hour10)

  let hour11 = localStorage.getItem('hour-11')
  if(!hour11) {
    localStorage.setItem('hour-11','')
    hour11=''
}
  $('#hour-11').children('textarea').val(hour11)

  let hour12 = localStorage.getItem('hour-12')
  if(!hour12) {
    localStorage.setItem('hour-12','')
    hour12=''
}
  $('#hour-12').children('textarea').val(hour12)

  let hour1 = localStorage.getItem('hour-1')
  if(!hour1) {
    localStorage.setItem('hour-1','')
    hour1=''
}
  $('#hour-1').children('textarea').val(hour1)

  let hour2 = localStorage.getItem('hour-2')
  if(!hour2) {
    localStorage.setItem('hour-2','')
    hour2=''
}
  $('#hour-2').children('textarea').val(hour2)

  let hour3 = localStorage.getItem('hour-3')
  if(!hour3) {
    localStorage.setItem('hour-3','')
    hour3=''
}
  $('#hour-3').children('textarea').val(hour3)

  let hour4 = localStorage.getItem('hour-4')
  if(!hour4) {
    localStorage.setItem('hour-4','')
    hour4=''
}
  $('#hour-4').children('textarea').val(hour4)

  let hour5 = localStorage.getItem('hour-5')
  if(!hour5) {
    localStorage.setItem('hour-5','')
    hour5=''
}
  $('#hour-5').children('textarea').val(hour5)
}

function setTimeBlock(){
  for (let i = 0; i < timeArray.length; i++) {
    let tense
    if(dayjs().format('H')==timeArray[i]) tense='present'
    if(dayjs().format('H')<timeArray[i]) tense='future'
    if(dayjs().format('H')>timeArray[i]) tense='past'
    console.log(timeArray[0])
    console.log(tense)
    console.log(dayjs().format('H')<timeArray[i])
    if(i==0) $('#hour-9').addClass(tense)
    if(i==1) $('#hour-10').addClass(tense)
    if(i==2) $('#hour-11').addClass(tense)
    if(i==3) $('#hour-12').addClass(tense)
    if(i==4) $('#hour-1').addClass(tense)
    if(i==5) $('#hour-2').addClass(tense)
    if(i==6) $('#hour-3').addClass(tense)
    if(i==7) $('#hour-4').addClass(tense)
    if(i==8) $('#hour-5').addClass(tense)    
  }
}