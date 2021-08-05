var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
var universalTime= dateToday.getUTCMilliseconds();
console.log(" Millsecond according to Universal Time from a given date object : "+ universalTime);
// Expected Output -
// Millsecond according to Universal Time from a given date object : 77 