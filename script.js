moment(Date)
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var currentTime = moment();
// Returns current time but rounded down to the nearest hour
currentTime = currentTime.startOf("hour");
// Calculates the start of day + 9hr to return the start time (9am)
var dayStart = moment().startOf('day').add(9, "hours");

// var time1 = dayStart;
var timeNine = dayStart.add(0, "h");
// Populates time into html
timeNine = timeNine.format('hh:mm A');
$(".nineAM").text(timeNine);
// var timeTen = dayStart
var timeTen = dayStart.add(1, "h");
// Populates time into html
timeTen = timeTen.format("hh:mm A");
$(".tenAM").text(timeTen);
// var timeEleven = dayStart
var timeEleven = dayStart.add(1, "h");
// Populates time into html
timeEleven = timeEleven.format("hh:mm A")
$(".elevenAM").text(timeEleven);



function plannertTimes() {
    // Add timeNine 9AM
    timeNine = moment().startOf('day').add(9, "hours");
    // Rounds down to start of the current hour
    currentTime = currentTime.startOf("hour");
    // Add timeNine if/else to adjust if time is past,future, or present. 
    if (currentTime.isAfter(timeNine)) {
        $(".control9").addClass("past");
    }
    else if (currentTime.isBefore(timeNine)) {
        $(".control9").addClass("future");
    }
    else if (currentTime.isSame(timeNine)) {
        $(".control9").addClass("present");
    };       
    // Add timeTen 10am
    timeTen = moment().startOf('day').add(10, "hours");
    // Rounds down to start of the current hour
    currentTime = currentTime.startOf("hour");
    // Add timeTen if/else to adjust if time is past,future, or present. 
    if (currentTime.isAfter(timeTen)) {
        $(".control10").addClass("past");
    }
    else if (currentTime.isBefore(timeTen)) {
        $(".control10").addClass("future");
    }
    else if (currentTime.isSame(timeTen)) {
        $(".control10").addClass("present");
    };
    // Add timeEleven 11am
    timeEleven = moment().startOf('day').add(11, "hours");
    // Rounds down to start of the current hour
    currentTime = currentTime.startOf("hour");
    // Add timeEleven if/else to adjust if time is past,future, or present. 
    if (currentTime.isAfter(timeEleven)) {
        $(".control11").addClass("past");
    }
    else if (currentTime.isBefore(timeEleven)) {
        $(".control11").addClass("future");
    }
    else if (currentTime.isSame(timeEleven)) {
        $(".control11").addClass("present");
    };
}   











plannertTimes();
// Loops to pull time slots from local storage
var t = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
// Test loop:
for (var i = 0; i < t.length; i++) {
    var timeHour = localStorage.getItem(t[i]);
    // form - control
    $(".control" + t[i]).val(timeHour);
}
// Event listener for saving to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});