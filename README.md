getMonth(date, startingDay) function returns a calendar object for the month of date object passed in, and startingDay is the day of the week you want your calendar to start on (0 = Sunday, 1 = Monday, 2 = Tuesday,3 = Wednesday,4 = Thursday,5 = Friday,6 = Saturday). 

Calendar object includes details of first day of the month, number of days in month, and number of weeks required to display month on calendar with a break down off all weeks and days of the week. If the first and/or last week of the month include dates from previous/next month details of those days are also included.

each day has an "isToday". "Yes" signals that the day is todays date.

Sample month returned:
    
    {
    "firstDay": "Friday",
    "monthLenght": 30,
    "calendarWeeks": 5,
    "week1": {
        "day1": {
            "day": 28,
            "month": 2,
            "year": 2016,
            "date": "2016-03-27T23:00:00.000Z",
            "isToday": "No"
        },
        "day2": {
            "day": 29,
            "month": 2,
            "year": 2016,
            "date": "2016-03-28T23:00:00.000Z",
            "isToday": "No"
        },
        "day3": {
            "day": 30,
            "month": 2,
            "year": 2016,
            "date": "2016-03-29T23:00:00.000Z",
            "isToday": "No"
        },
        "day4": {
            "day": 31,
            "month": 2,
            "year": 2016,
            "date": "2016-03-30T23:00:00.000Z",
            "isToday": "No"
        },
        "day5": {
            "day": 1,
            "month": 3,
            "year": 2016,
            "date": "2016-03-31T23:00:00.000Z",
            "isToday": "No"
        },
        "day6": {
            "day": 2,
            "month": 3,
            "year": 2016,
            "date": "2016-04-01T23:00:00.000Z",
            "isToday": "Yes"
        },
        "day7": {
            "day": 3,
            "month": 3,
            "year": 2016,
            "date": "2016-04-02T23:00:00.000Z",
            "isToday": "No"
        }
    },
    "week2": {
        ... etc.
    
Sample code to loop through and print out calendar

    //variable to hold table body
    var tableBody = "";
    //jQuery AJAX call for JSON
    $.getJSON('month/1/' + month + '/' + year, function (data) {
        //loop through weeks (based on how many weeks are needed to print full month)
        for (var weekNo = 1; weekNo <= data['calendarWeeks']; weekNo++) {
            //Print out details for each day of week
            tableBody += '<tr>';
                tableBody += '<td><div class="dateNumber">' + data['week' + weekNo]['day1']['day'] + '</div></td>';            
                tableBody += '<td><div class="dateNumber">' + data['week' + weekNo]['day2']['day'] + '</div></td>';            
                tableBody += '<td><div class="dateNumber">' + data['week' + weekNo]['day3']['day'] + '</div></td>';         
                tableBody += '<td><div class="dateNumber">' + data['week' + weekNo]['day4']['day'] + '</div></td>';            
                tableBody += '<td><div class="dateNumber">' + data['week' + weekNo]['day5']['day'] + '</div></td>';            
                tableBody += '<td><div class="dateNumber">' + data['week' + weekNo]['day6']['day'] + '</div></td>';            
                tableBody += '<td><div class="dateNumber">' + data['week' + weekNo]['day7']['day'] + '</div></td>';            
            tableBody += '</tr>';
        }
        //print out calendar
        document.getElementById('tableBody').innerHTML = tableBody;
    });
    
    
Similarily the getWeek(date, startingDay) function returns a week object, starting on a chosen day, with a break down of each day based on date passed in
