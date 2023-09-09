// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// getting current time from dayjs() and storing in variables
const year = dayjs().year();
const month = dayjs().month() + 1;
const date = dayjs().date();
const hour = 9 // dayjs().hour();
const currentDay = dayjs(year + "-" + month + "-" + date).format('dddd, MMMM DD'); //displays today's date in format like "Saturday, September 09"


// let now = dayjs();
// console.log(now);

//creating variables that control the start hour and end hour of the day
const startHour = 9; //9am
const endHour = 17;  //5pm
const workHours = endHour - startHour; //number of hours in working day

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

  // populating array with elements that have the class like hour-10
  const timeBlocks = [];
  for (let i = startHour; i <= endHour; i++) {
    // console.log('#hour-' + i);
    timeBlocks[i] = $('#hour-' + i);
  }

  //  for loop that updates the past/present/future class in element based on "hour" variable
  for (let i = startHour; i <= endHour; i++) {
    // gets the current class from element and then removes it
    let currentClass = timeBlocks[i].attr('class').slice(15); // need to use slice since there are multiple classes
    timeBlocks[i].removeClass(currentClass); 

    // updates class in element to have status of past, present, future
    if (i < hour) {
      timeBlocks[i].addClass('past');
    } else if (i === hour) {
      timeBlocks[i].addClass('present');
    } else if (i > hour) {
      timeBlocks[i].addClass('future');
    }
  }



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.
  // prints the current date to the web page
  const currentDayEl = $('#currentDay');
  currentDayEl.text(currentDay);


});



