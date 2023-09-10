// getting current time from dayjs() and storing in variables
const year = dayjs().year();
const month = dayjs().month() + 1;
const date = dayjs().date();
const hour = 9 // dayjs().hour();
const currentDay = dayjs(year + "-" + month + "-" + date).format('dddd, MMMM DD'); //displays today's date in format like "Saturday, September 09"

//creating variables that control the start hour and end hour of the day
const startHour = 9; //9am
const endHour = 17;  //5pm

$(function () {

  // event listener that saves what the user typed in local storage. uses the hour as the key and the text as the value
  $('button').on('click', function(event) {

    // this code checks if the user clicked on the big button or the small save icon and updates the variable "theEvent" so that way it is always the button element
    if ($(event.target)[0].tagName === 'I') {
      theEvent = $(event.target).parent();
    } else if ($(event.target)[0].tagName === 'BUTTON') {
      theEvent = $(event.target);
    }

    let hourId = theEvent.parent().attr('id');     // gets the ID from the parent element to use as the key name
    let note = theEvent.siblings('textarea').val()    // gets the value of what the user typed in
    localStorage.setItem(hourId, note);    // add it to local storage
  });
  
  // populating array with elements that have the id like hour-10
  const timeBlocks = [];
  for (let i = startHour; i <= endHour; i++) {
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

  // function that checks local storage and pull the content if it has any, then places it in the text box
  function init() {
    for (let i = startHour; i <= endHour; i++) {
      let id = timeBlocks[i].attr('id');
      let userInput = localStorage.getItem(id);

      if (userInput) {
        $(timeBlocks[i]).children('textarea').val(userInput);
      }
    }
  }
  // need function to run when page starts
  init();

  //getting element with id currentDay and updating its value with today's date
  const currentDayEl = $('#currentDay');
  currentDayEl.text(currentDay);

});



