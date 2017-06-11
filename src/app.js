import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rendering = function (events, trainers) {
    ReactDOM.render(
        <App events={events} trainers={trainers} />,
         document.getElementById('root'));
};

class Request {
    getEvents() {
        fetch('http://128.199.53.150/events')
        .then(response => response.json())
        .then(events => this.getTrainers(events))
        .catch(err => console.log(err));
    }

    getTrainers(events) {
        fetch('http://128.199.53.150/trainers')
        .then(response => response.json())
        .then(trainers => rendering(events, trainers))
        .catch(err => console.log(err));
    }
}

const load = new Request();
load.getEvents();

Date.prototype.getWeek = function (dowOffset) {
    /* getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */

    dowOffset = typeof (dowOffset) === 'int' ? dowOffset : 0; // default dowOffset to zero
    const newYear = new Date(this.getFullYear(), 0, 1);
    let day = newYear.getDay() - dowOffset; // the day of week the year begins on
    day = (day >= 0 ? day : day + 7);
    const daynum = Math.floor((this.getTime() - newYear.getTime() -
    (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1;
    let weeknum;
    // if the year starts before the middle of a week
    if (day < 4) {
        weeknum = Math.floor((daynum + day - 1) / 7) + 1;
        if (weeknum > 52) {
            const nYear = new Date(this.getFullYear() + 1, 0, 1);
            let nday = nYear.getDay() - dowOffset;
            nday = nday >= 0 ? nday : nday + 7;
            /* if the next year starts before the middle of
              the week, it is week #1 of that year */
            weeknum = nday < 4 ? 1 : 53;
        }
    } else {
        weeknum = Math.floor((daynum + day - 1) / 7);
    }
    return weeknum;
};

Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

Date.prototype.getMonthName = function () {
    const month = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    return month[this.getMonth()];
};
