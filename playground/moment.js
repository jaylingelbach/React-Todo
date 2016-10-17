var moment = require('moment');

// figure out current time
//call moment as a function, then format (returns a formatted string)
console.log(moment().format());

//Unix time stamps. 1st shows where they start. second 60 would be 12:01am
//because 60 seconds in a minute. -60 would be Dec 31st 1969 11:59pm
// Jan 1st 1970 @ 12:00am -> 0
// Jan 1st 1970 @ 12:01am -> 60

var now = moment();
//create unix timestamp - now.unix()
console.log('Current timestamp', now.unix());

var timestamp = 1476723601;

// convert back into moment obj
var currentMoment = moment.unix(timestamp);
console.log('current moment ', currentMoment.format('MMMM Do, YYYY @ H:mm A'));

//define how you want to represent time. Docs display on momentjs.com/docs
console.log('current moment ', currentMoment.format('MMM D, YY @ H:mm a '));
