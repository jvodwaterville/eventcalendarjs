exports.getMonth = function (date, calStartDay) {
    //get all details about current date, day, month and year
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    //get first day of month, last day of month and lenght of month
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    var monthLength = Math.round((monthEnd - monthStart) / (1000 * 60 * 60 * 24));

    //array to hold days of the week
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    //check what day of the week first day of the month is
    var firstDay = weekday[monthStart.getDay()];

    //variable to hold how many weeks will be on calendar
    var numWeeks = 5;

    //set starting date for month on calendar
    if (firstDay == "Monday") {
        var startingDay = 1;

        //if the month starts on a monday and has less than 29 days then an week less is required on calendar
        if (monthLength < 29) {
            //change number of weeks to 6
            numWeeks = 4;
        }
    } else if (firstDay == "Tuesday") {
        var startingDay = 2;
    } else if (firstDay == "Wednesday") {
        var startingDay = 3;
    } else if (firstDay == "Thursday") {
        var startingDay = 4;
    } else if (firstDay == "Friday") {
        var startingDay = 5;
    } else if (firstDay == "Saturday") {
        var startingDay = 6;

        //if the month starts on a saturday and has 31 days then an extra week is required on calendar
        if (monthLength > 30) {
            //change number of weeks to 6
            numWeeks = 6;
        }
    } else if (firstDay == "Sunday") {
        var startingDay = 7;

        //if the month starts on a sunda and has 30 or more days then an extra week is required on calendar
        if (monthLength > 29) {
            //change number of weeks to 6
            numWeeks = 6;
        }
    }

    //get first day of the week
    //first day of week = date - (day of week-1) to start week on mondays
    var w1 = 1;
    var w2 = w1 + 7;
    var w3 = w2 + 7;
    var w4 = w3 + 7;
    var w5 = w4 + 7;
    var w6 = w5 + 7;

    //get a day from each week
    var week1day = new Date(date.setDate(w1));
    var week2day = new Date(date.setDate(w2));
    var week3day = new Date(date.setDate(w3));
    var week4day = new Date(date.setDate(w4));
    var week5day = new Date(date.setDate(w5));
    var week6day = new Date(date.setDate(w6));

    var calendar = {
        firstDay: firstDay,
        monthLenght: monthLength,
        calendarWeeks: numWeeks
    };

    calendar.week1 = getWeek(week1day, calStartDay);
    calendar.week2 = getWeek(week2day, calStartDay);
    calendar.week3 = getWeek(week3day, calStartDay);
    calendar.week4 = getWeek(week4day, calStartDay);
    if (numWeeks > 4) {
        calendar.week5 = getWeek(week5day, calStartDay);
    }
    if (numWeeks > 5) {
        calendar.week6 = getWeek(week6day, calStartDay);
    }

    return calendar;
}

function getWeek(date, calStartDay) {

    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    //get first day of the week
    if(calStartDay == 0)
    {
        var d0 = date.getDate() - (date.getDay());    
    }
    else if (calStartDay == 1)
    {
        //first day of week = date - (day of week-1) to start week on mondays
        var d0 = date.getDate() - (date.getDay() - 1);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() + 6);
        }
    }
    else if (calStartDay == 2)
    {
        //first day of week = date - (day of week-2) to start week on tuesday
        var d0 = date.getDate() - (date.getDay() - 2);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() + 5);
        }
    }
    else if (calStartDay == 3)
    {
        //first day of week = date - (day of week-3) to start week on wednesday
        var d0 = date.getDate() - (date.getDay() - 3);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() + 4);
        }
    }
    else if (calStartDay == 4)
    {
        //first day of week = date - (day of week-4) to start week on thursday
        var d0 = date.getDate() - (date.getDay() - 4);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() + 3);
        }
    }
    else if (calStartDay == 5)
    {
        //first day of week = date - (day of week-5) to start week on friday
        var d0 = date.getDate() - (date.getDay() - 5);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() + 2);
        }
    }
    else if (calStartDay == 6)
    {
        //first day of week =  date - (day of week+1) to start week on saturday
        var d0 = date.getDate() - (date.getDay() + 1);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() - 1);
        }
    }
    
    
    //get rest of the days of the week
    var d1 = d0 + 1;
    var d2 = d0 + 2;
    var d3 = d0 + 3;
    var d4 = d0 + 4;
    var d5 = d0 + 5;
    var d6 = d0 + 6;

    //create the date objects
    var monday = new Date(year, month, d0);
    var tuesday = new Date(year, month, d1);
    var wednesday = new Date(year, month, d2);
    var thursday = new Date(year, month, d3);
    var friday = new Date(year, month, d4);
    var saturday = new Date(year, month, d5);
    var sunday = new Date(year, month, d6);
    
    //get todays date
    var today = new Date();
    var todayDay = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();
    
    //first set all days to not being todays date
    var d0Today = 'No';
    var d1Today = 'No';
    var d2Today = 'No';
    var d3Today = 'No';
    var d4Today = 'No';
    var d5Today = 'No';
    var d6Today = 'No';
    
    //check if day is todays date
    if(year == todayYear)
    {
        if(month == todayMonth)
            {
                if(d0 == todayDay)
                {
                        d0Today = 'Yes';
                }
                else if(d1 == todayDay)
                {
                        d1Today = 'Yes';
                }
                else if(d2 == todayDay)
                {
                        d2Today = 'Yes';
                }
                else if(d3 == todayDay)
                {
                        d3Today = 'Yes';
                }
                else if(d4 == todayDay)
                {
                        d4Today = 'Yes';
                }
                else if(d5 == todayDay)
                {
                        d5Today = 'Yes';
                }
                else if(d6 == todayDay)
                {
                        d6Today = 'Yes';
                }
            }
    }

    //add to week object
    var newWeek = {
        day1: {
            day: monday.getDate(),
            month: monday.getMonth(),
            year: year,
            date: monday,
            isToday: d0Today
        },
        day2: {
            day: tuesday.getDate(),
            month: tuesday.getMonth(),
            year: year,
            date: tuesday,
            isToday: d1Today
        },
        day3: {
            day: wednesday.getDate(),
            month: wednesday.getMonth(),
            year: year,
            date: wednesday,
            isToday: d2Today
        },
        day4: {
            day: thursday.getDate(),
            month: thursday.getMonth(),
            year: year,
            date: thursday,
            isToday: d3Today
        },
        day5: {
            day: friday.getDate(),
            month: friday.getMonth(),
            year: year,
            date: friday,
            isToday: d4Today
        },
        day6: {
            day: saturday.getDate(),
            month: saturday.getMonth(),
            year: year,
            date: saturday,
            isToday: d5Today
        },
        day7: {
            day: sunday.getDate(),
            month: sunday.getMonth(),
            year: year,
            date: sunday,
            isToday: d6Today
        }
    };

    //return week
    return newWeek;
}

exports.getWeek = function (date, calStartDay) {
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    //get first day of the week
    if(calStartDay == 0)
    {
        var d0 = date.getDate() - (date.getDay());    
    }
    else if (calStartDay == 1)
    {
        //first day of week = date - (day of week-1) to start week on mondays
        var d0 = date.getDate() - (date.getDay() - 1);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() + 6);
        }
    }
    else if (calStartDay == 2)
    {
        //first day of week = date - (day of week-2) to start week on tuesday
        var d0 = date.getDate() - (date.getDay() - 2);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() + 5);
        }
    }
    else if (calStartDay == 3)
    {
        //first day of week = date - (day of week-3) to start week on wednesday
        var d0 = date.getDate() - (date.getDay() - 3);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() + 4);
        }
    }
    else if (calStartDay == 4)
    {
        //first day of week = date - (day of week-4) to start week on thursday
        var d0 = date.getDate() - (date.getDay() - 4);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() + 3);
        }
    }
    else if (calStartDay == 5)
    {
        //first day of week = date - (day of week-5) to start week on friday
        var d0 = date.getDate() - (date.getDay() - 5);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() + 2);
        }
    }
    else if (calStartDay == 6)
    {
        //first day of week =  date - (day of week+1) to start week on saturday
        var d0 = date.getDate() - (date.getDay() + 1);
        //unless it starts on a sunday, then add 6
        if (date.getDay() == 0) {
            var d0 = date.getDate() - (date.getDay() - 1);
        }
    }
    
    
    //get rest of the days of the week
    var d1 = d0 + 1;
    var d2 = d0 + 2;
    var d3 = d0 + 3;
    var d4 = d0 + 4;
    var d5 = d0 + 5;
    var d6 = d0 + 6;

    //create the date objects
    var monday = new Date(year, month, d0);
    var tuesday = new Date(year, month, d1);
    var wednesday = new Date(year, month, d2);
    var thursday = new Date(year, month, d3);
    var friday = new Date(year, month, d4);
    var saturday = new Date(year, month, d5);
    var sunday = new Date(year, month, d6);
    
    //get todays date
    var today = new Date();
    var todayDay = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();
    
    //first set all days to not being todays date
    var d0Today = 'No';
    var d1Today = 'No';
    var d2Today = 'No';
    var d3Today = 'No';
    var d4Today = 'No';
    var d5Today = 'No';
    var d6Today = 'No';
    
    //check if day is todays date
    if(year == todayYear)
    {
        if(month == todayMonth)
            {
                if(d0 == todayDay)
                {
                        d0Today = 'Yes';
                }
                else if(d1 == todayDay)
                {
                        d1Today = 'Yes';
                }
                else if(d2 == todayDay)
                {
                        d2Today = 'Yes';
                }
                else if(d3 == todayDay)
                {
                        d3Today = 'Yes';
                }
                else if(d4 == todayDay)
                {
                        d4Today = 'Yes';
                }
                else if(d5 == todayDay)
                {
                        d5Today = 'Yes';
                }
                else if(d6 == todayDay)
                {
                        d6Today = 'Yes';
                }
            }
    }

    //add to week object
    var newWeek = {
        day1: {
            day: monday.getDate(),
            month: monday.getMonth(),
            year: year,
            date: monday,
            isToday: d0Today
        },
        day2: {
            day: tuesday.getDate(),
            month: tuesday.getMonth(),
            year: year,
            date: tuesday,
            isToday: d1Today
        },
        day3: {
            day: wednesday.getDate(),
            month: wednesday.getMonth(),
            year: year,
            date: wednesday,
            isToday: d2Today
        },
        day4: {
            day: thursday.getDate(),
            month: thursday.getMonth(),
            year: year,
            date: thursday,
            isToday: d3Today
        },
        day5: {
            day: friday.getDate(),
            month: friday.getMonth(),
            year: year,
            date: friday,
            isToday: d4Today
        },
        day6: {
            day: saturday.getDate(),
            month: saturday.getMonth(),
            year: year,
            date: saturday,
            isToday: d5Today
        },
        day7: {
            day: sunday.getDate(),
            month: sunday.getMonth(),
            year: year,
            date: sunday,
            isToday: d6Today
        }
    };

    //return week
    return newWeek;
}

exports.printTable = function(date, calStartDay, dateNumber, todayDateNumber)
{
    //get calendar head details
    var tableOutput = "<table><thead>";
    tableOutput+= getTableHead(calStartDay);
    tableOutput += "</thead>";
    
        //get all details about date, day, month and year
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        //get first day of month, last day of month and lenght of month
        var monthStart = new Date(year, month, 1);
        var monthEnd = new Date(year, month + 1, 1);
        var monthLength = Math.round((monthEnd - monthStart) / (1000 * 60 * 60 * 24));

        //array to hold days of the week
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        //check what day of the week first day of the month is
        var firstDay = weekday[monthStart.getDay()];

        //variable to hold how many weeks will be on calendar
        var numWeeks = 5;

        //set starting date for month on calendar
        if (firstDay == "Monday") {
            var startingDay = 1;

            //if the month starts on a monday and has less than 29 days then an week less is required on calendar
            if (monthLength < 29) {
                //change number of weeks to 6
                numWeeks = 4;
            }
        } else if (firstDay == "Tuesday") {
            var startingDay = 2;
        } else if (firstDay == "Wednesday") {
            var startingDay = 3;
        } else if (firstDay == "Thursday") {
            var startingDay = 4;
        } else if (firstDay == "Friday") {
            var startingDay = 5;
        } else if (firstDay == "Saturday") {
            var startingDay = 6;

            //if the month starts on a saturday and has 31 days then an extra week is required on calendar
            if (monthLength > 30) {
                //change number of weeks to 6
                numWeeks = 6;
            }
        } else if (firstDay == "Sunday") {
            var startingDay = 7;

            //if the month starts on a sunda and has 30 or more days then an extra week is required on calendar
            if (monthLength > 29) {
                //change number of weeks to 6
                numWeeks = 6;
            }
        }

        //get first day of the week
        //first day of week = todays date - (day of week-1) to start week on mondays
        var w1 = 1;
        var w2 = w1 + 7;
        var w3 = w2 + 7;
        var w4 = w3 + 7;
        var w5 = w4 + 7;
        var w6 = w5 + 7;

        //get a day from each week
        var week1day = new Date(date.setDate(w1));
        var week2day = new Date(date.setDate(w2));
        var week3day = new Date(date.setDate(w3));
        var week4day = new Date(date.setDate(w4));
        var week5day = new Date(date.setDate(w5));
        var week6day = new Date(date.setDate(w6));

        var calendar = {
            firstDay: firstDay,
            monthLenght: monthLength,
            calendarWeeks: numWeeks
        };

        calendar.week1 = getWeek(week1day, calStartDay);
        calendar.week2 = getWeek(week2day, calStartDay);
        calendar.week3 = getWeek(week3day, calStartDay);
        calendar.week4 = getWeek(week4day, calStartDay);
        if (numWeeks > 4) {
            calendar.week5 = getWeek(week5day, calStartDay);
        }
        if (numWeeks > 5) {
            calendar.week6 = getWeek(week6day, calStartDay);
        }
    
    var calArray = [getWeek(week1day, calStartDay),getWeek(week2day, calStartDay),getWeek(week3day, calStartDay),getWeek(week4day, calStartDay), ];
    if (numWeeks > 4) {
            calArray.push(getWeek(week5day, calStartDay));
        }
        if (numWeeks > 5) {
            calArray.push(getWeek(week5day, calStartDay));
        }
    
    //get todays date details
    var today = new Date();
    var thisDay = today.getDate();
    var thisMonth = today.getMonth();
    var thisYear = today.getFullYear();
    
    //print table body
    var weekNo = 1;
    var tableBody = "<tbody>";

        for (weekNo = 0; weekNo <= calendar.calendarWeeks-1; weekNo++) {
            tableBody+= "<tr>";
            
            if (calArray[weekNo].day1.day == thisDay && calArray[weekNo].day1.month == thisMonth && calArray[weekNo].day1.year == thisYear) {
                tableBody += '<td><div class="'+todayDateNumber+'">' + calArray[weekNo].day1.day + '</div>';
                tableBody += '</td>';
            } else {
                tableBody += '<td><div class="'+dateNumber+'">' + calArray[weekNo].day1.day + '</div>';
                tableBody += '</td>';
            }
            if (calArray[weekNo].day2.day == thisDay && calArray[weekNo].day2.month == thisMonth && calArray[weekNo].day2.year == thisYear) {
                tableBody += '<td><div class="'+todayDateNumber+'">' + calArray[weekNo].day2.day + '</div>';
                tableBody += '</td>';
            } else {
                tableBody += '<td><div class="'+dateNumber+'">' + calArray[weekNo].day2.day + '</div>';
                tableBody += '</td>';
            }
            if (calArray[weekNo].day3.day == thisDay && calArray[weekNo].day3.month == thisMonth && calArray[weekNo].day3.year == thisYear) {
                tableBody += '<td><div class="'+todayDateNumber+'">' + calArray[weekNo].day3.day + '</div>';
                tableBody += '</td>';
            } else {
                tableBody += '<td><div class="'+dateNumber+'">' + calArray[weekNo].day3.day + '</div>';
                tableBody += '</td>';
            }
            if (calArray[weekNo].day4.day == thisDay && calArray[weekNo].day4.month == thisMonth && calArray[weekNo].day4.year == thisYear) {
                tableBody += '<td><div class="'+todayDateNumber+'">' + calArray[weekNo].day4.day + '</div>';
                tableBody += '</td>';
            } else {
                tableBody += '<td><div class="'+dateNumber+'">' + calArray[weekNo].day4.day + '</div>';
                tableBody += '</td>';
            }
            if (calArray[weekNo].day5.day == thisDay && calArray[weekNo].day5.month == thisMonth && calArray[weekNo].day5.year == thisYear) {
                tableBody += '<td><div class="'+todayDateNumber+'">' + calArray[weekNo].day5.day + '</div>';
                tableBody += '</td>';
            } else {
                tableBody += '<td><div class="'+dateNumber+'">' + calArray[weekNo].day5.day + '</div>';
                tableBody += '</td>';
            }
            if (calArray[weekNo].day6.day == thisDay && calArray[weekNo].day6.month == thisMonth && calArray[weekNo].day6.year == thisYear) {
                tableBody += '<td><div class="'+todayDateNumber+'">' + calArray[weekNo].day6.day + '</div>';
                tableBody += '</td>';
            } else {
                tableBody += '<td><div class="'+dateNumber+'">' + calArray[weekNo].day6.day + '</div>';
                tableBody += '</td>';
            }
            if (calArray[weekNo].day7.day == thisDay && calArray[weekNo].day7.month == thisMonth && calArray[weekNo].day7.year == thisYear) {
                tableBody += '<td><div class="'+todayDateNumber+'">' + calArray[weekNo].day7.day + '</div>';
                tableBody += '</td>';
            } else {
                tableBody += '<td><div class="'+dateNumber+'">' + calArray[weekNo].day7.day + '</div>';
                tableBody += '</td>';
            }
            
            tableBody += '</tr>';
        }
        
    tableBody += "</tbody>";
    tableOutput += tableBody;
    tableOutput += "</table>";

    
    return tableOutput;
}

function getTableHead(calStartDay)
{
    var tableHead = "";
    if(calStartDay == 0)
    {
        tableHead+= "<tr><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr>";
    }
    else if (calStartDay == 1)
    {
        tableHead+= "<tr><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></tr>";
    }
    else if (calStartDay == 2)
    {
        tableHead+= "<tr><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th><th>Monday</th></tr>";
    }
    else if (calStartDay == 3)
    {
        tableHead+= "<tr><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th><th>Monday</th><th>Tuesday</th></tr>";
    }
    else if (calStartDay == 4)
    {
        tableHead+= "<tr><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th></tr>";
    }
    else if (calStartDay == 5)
    {
        tableHead+= "<tr><th>Friday</th><th>Saturday</th><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th></tr>";
    }
    else if (calStartDay == 6)
    {
       tableHead+= "<tr><th>Saturday</th><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th></tr>";
    }
    
    return tableHead;
}