moment(Date)
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var currentTime = moment();
// Returns current time to the nearest hour - 12:30 becomes 12:00
currentTime = currentTime.startOf("hour");
// Calculates the start of day + 9 to return the start time (9am)
var dayStart = moment().startOf('day').add(9, "hours");

// var time1 = beforeTime;
var timeNine = dayStart.add(0, "h");
// Populates time formula into html
timeNine = timeNine.format('hh:mm A');
$(".nineAM").text(timeNine);

function testTime() {
    // Add time1 9AM
    timeNine = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time1 if/else
    if (currentTime.isAfter(timeNine)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(timeNine)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(timeNine)) {
        $(".form9").addClass("present");
    };
}
