moment(Date)
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Current time = moment which pulls the date
var currentTime = moment();
// Returns current time but rounded down to the nearest hour
currentTime = currentTime.startOf("hour");
// Calculates the start of day + 9hr to return the start time of planner (9am)
var dayStart = moment().startOf('day').add(9, "hours");

// var timeNine = dayStart
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
// var timeTwelve = dayStart
var timeTwelve = dayStart.add(1, "h");
// Populates time into html
timeTwelve = timeTwelve.format("hh:mm A")
$(".twelvePM").text(timeTwelve);
// var timeOne = dayStart
var timeOne = dayStart.add(1, "h");
// Populates time into html
timeOne = timeOne.format("hh:mm A")
$(".onePM").text(timeOne);
// var timeTwo = dayStart
var timeTwo = dayStart.add(1, "h");
// Populates time into html
timeTwo = timeTwo.format("hh:mm A")
$(".twoPM").text(timeTwo);
// var timeThree = dayStart
var timeThree = dayStart.add(1, "h");
// Populates time into html
timeThree = timeThree.format("hh:mm A")
$(".threePM").text(timeThree);
// var timeFour = dayStart
var timeFour = dayStart.add(1, "h");
// Populates time into html
timeFour = timeFour.format("hh:mm A")
$(".fourPM").text(timeFour);
// var timeFive = dayStart
var timeFive = dayStart.add(1, "h");
// Populates time into html
timeFive = timeFive.format("hh:mm A")
$(".fivePM").text(timeFive);
// var timeSix = dayStart
var timeSix = dayStart.add(1, "h");
// Populates time into html
timeSix = timeSix.format("hh:mm A")
$(".sixPM").text(timeSix);


function plannertTimes() {
    // timeNine = start of day + 9 hrs
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
    // timeTen = start of day + 10 hrs
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
    // timeEleven = start of day + 11 hrs
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
    // timeTweleve = start of day + 12 hrs
    timeTwelve = moment().startOf('day').add(12, "hours");
    // Rounds down to start of the current hour
    currentTime = currentTime.startOf("hour");
    // Add timeTwelve if/else to adjust if time is past,future, or present. 
    if (currentTime.isAfter(timeTwelve)) {
        $(".control12").addClass("past");
    }
    else if (currentTime.isBefore(timeTwelve)) {
        $(".control12").addClass("future");
    }
    else if (currentTime.isSame(timeTwelve)) {
        $(".control12").addClass("present");
    };
    // timeOne = start of day + 13 hrs
    timeOne = moment().startOf('day').add(13, "hours");
    // Rounds down to start of the current hour
    currentTime = currentTime.startOf("hour");
    // Add timeTwelve if/else to adjust if time is past,future, or present. 
    if (currentTime.isAfter(timeOne)) {
        $(".control1").addClass("past");
    }
    else if (currentTime.isBefore(timeOne)) {
        $(".control1").addClass("future");
    }
    else if (currentTime.isSame(timeOne)) {
        $(".control1").addClass("present");
    };
    // timeTwo = start of day + 14 hrs
    timeTwo = moment().startOf('day').add(14, "hours");
    // Rounds down to start of the current hour
    currentTime = currentTime.startOf("hour");
    // Add timeTwo if/else to adjust if time is past,future, or present. 
    if (currentTime.isAfter(timeTwo)) {
        $(".control2").addClass("past");
    }
    else if (currentTime.isBefore(timeTwo)) {
        $(".control2").addClass("future");
    }
    else if (currentTime.isSame(timeTwo)) {
        $(".control2").addClass("present");
    };
    // timeThree = start of day + 15 hrs
    timeThree = moment().startOf('day').add(15, "hours");
    // Rounds down to start of the current hour
    currentTime = currentTime.startOf("hour");
    // Add timeThree if/else to adjust if time is past,future, or present. 
    if (currentTime.isAfter(timeThree)) {
        $(".control3").addClass("past");
    }
    else if (currentTime.isBefore(timeThree)) {
        $(".control3").addClass("future");
    }
    else if (currentTime.isSame(timeThree)) {
        $(".control3").addClass("present");
    };
    // timeFour = start of day + 16 hrs
    timeFour = moment().startOf('day').add(16, "hours");
    // Rounds down to start of the current hour
    currentTime = currentTime.startOf("hour");
    // Add timeFour if/else to adjust if time is past,future, or present. 
    if (currentTime.isAfter(timeFour)) {
        $(".control4").addClass("past");
    }
    else if (currentTime.isBefore(timeFour)) {
        $(".control4").addClass("future");
    }
    else if (currentTime.isSame(timeFour)) {
        $(".control4").addClass("present");
    };
    // timeFive = start of day + 17 hrs
    timeFive = moment().startOf('day').add(17, "hours");
    // Rounds down to start of the current hour
    currentTime = currentTime.startOf("hour");
    // Add timeFive if/else to adjust if time is past,future, or present. 
    if (currentTime.isAfter(timeFive)) {
        $(".control5").addClass("past");
    }
    else if (currentTime.isBefore(timeFive)) {
        $(".control5").addClass("future");
    }
    else if (currentTime.isSame(timeFive)) {
        $(".control5").addClass("present");
    };
    // timeSix = start of day + 17 hrs
    timeSix = moment().startOf('day').add(17, "hours");
    // Rounds down to start of the current hour
    currentTime = currentTime.startOf("hour");
    // Add timeFive if/else to adjust if time is past,future, or present. 
    if (currentTime.isAfter(timeSix)) {
        $(".control6").addClass("past");
    }
    else if (currentTime.isBefore(timeSix)) {
        $(".control6").addClass("future");
    }
    else if (currentTime.isSame(timeSix)) {
        $(".control6").addClass("present");
    };
}   

plannertTimes();
// Loops to pull time slots from local storage
var t = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
// Loop to cycle through the time slots
for (var i = 0; i < t.length; i++) {
    var timeHour = localStorage.getItem(t[i]);
    // form - control
    $(".control" + t[i]).val(timeHour);
}

// Event listener for saving to local storage
$(".saveBtn").click(function () {
    preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("Success");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});







