/********************************
*Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
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
              return hour + ' PM';
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

  var dayElement = document.getElementById('day');
  dayElement.innerHTML = 'Hello, ';
  dayElement.innerHTML += 'Today is: ' + '<span>' + formatWeekDay + '</span>';
  var timeElement = document.getElementById('time');
  timeElement.innerHTML = '';
  timeElement.innerHTML += '<br \/> Current time is \: ' + getHour(currentTime) + ' : ' + formatMinutes(currentTime) + ' : ' + formatSeconds(currentTime);
  }

setInterval(getTime, 1000);
