/********************************
*Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/



/******************************
*Output the time and the day
*/

function getTime() {
  currentTime = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var formatWeekDay = weekday[currentTime.getDay()];

          function getHour(currentTime) {
            var hour = currentTime.getHours();
            if (hour === 0) {
              return '12 AM';
            }else if ( hour < 12) {
              return hour + ' AM ';
            }else {
              return (hour - 12) + ' PM';
            }
          }

          function formatSeconds(currentTime) {
            seconds = currentTime.getSeconds();
            if (seconds < 10) {
              return '0' + seconds;
            } else {
              return seconds;
            }
          }

          function formatMinutes(currentTime) {
            minutes = currentTime.getMinutes();
            if (minutes < 10) {
              return '0' + minutes;
            } else {
              return minutes;
            }
          }

          function formatMonth(currentTime) {
            var month = new Array(12);
            month[0] = 'January';
            month[1] = 'February';
            month[2] = 'March';
            month[3] = 'April';
            month[4] = 'May';
            month[5] = 'June';
            month[6] = 'July';
            month[7] = 'August';
            month[8] = 'September';
            month[9] = 'October';
            month[10] = 'November';
            month[11] = 'December';

            return month[currentTime.getMonth()];
          }

  var dayElement = document.getElementById('day');
  dayElement.innerHTML = 'Hello, ';
  dayElement.innerHTML += 'Today is: ' + '<span>' + formatWeekDay + '</span>';
  dayElement.innerHTML += ', ' + '<span>' +formatMonth(currentTime) + '</span>';
  dayElement.innerHTML += '<span> ' + currentTime.getDate() + '</span> <span> ' + currentTime.getFullYear() + '</span>';
  var timeElement = document.getElementById('time');
  timeElement.innerHTML = '';
  timeElement.innerHTML += '<br \/> Current time is \: ' + getHour(currentTime) + ' : ' + formatMinutes(currentTime) + ' : ' + formatSeconds(currentTime);
  }

setInterval(getTime, 1000);

/********************************
* Calculate Leap year
*/

/*
function leapYear(currentYear) {
  currentYear = new Date();
  currentYear = currentYear.getFullYear();
  if ((currentYear % 100 === 0) ? (currentYear % 400 === 0) : (currentYear % 4 === 0)) {
    return  currentYear + ' is a leap year.';
} else {
  return currentYear + ' is not a leap year.';
  }
}

var leapElement = document.getElementById('leap-year');

leapElement.innerHTML = '<h4>Leap Year: </h4>';
leapElement.innerHTML +='<span>' + leapYear() + '</span>';
*/


/********************************
* Calculate when january 1st falls on a sunday between 2020 and 2100
*/
/*
sundayElement = document.getElementById('sunday-new-year');
sundayElement.innerHTML ='<h4>January 1st On A Sunday: </h4>';
sundayElement.innerHTML += '<ol>';
for (var year= 2020; year <= 2120; year ++) {
  var day = new Date(year, 0, 1);
  if (day.getDay() === 0) {
    sundayElement.innerHTML += '<li> ' + year + ' </li>';
  } else {
    continue;
  }
  };

  sundayElement.innerHTML += '</ol>';

*/
  /********************************
  * Function Statements and Expressions
  */
