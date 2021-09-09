var fs = require('fs');

const {roomhotel} = require("./roomhotel")
const {customerhotel} = require("./customerhotel");

const Booking = function(booking_id, customerhotel_id, roomhotel_id, date_in, date_out) {
    this.booking_id = booking_id;
    this.customerhotel_id = customerhotel_id;
    this.roomhotel_id = roomhotel_id;
    this.date_in = date_in;
    this.date_out = date_out;
}

Booking.prototype.getBooking = function() {
    return `
    ${this.booking_id} 
    ${this.customerhotel_id} 
    ${this.roomhotel_id} 
    ${this.date_in} 
    ${this.date_out}
    `;
}

var booking = new Array();
booking.push(new Booking(1, 1, 1, "2021-09-09", "2021-09-12"));
booking.push(new Booking(2, 2, 2, "2021-09-10", "2021-09-14"));
booking.push(new Booking(3, 3, 3, "2021-09-13", "2021-09-16"));
booking.push(new Booking(4, 4, 4, "2021-09-15", "2021-09-19"))
booking.push(new Booking(5, 5, 5, "2021-09-19", "2021-09-22"));







module.exports = {
    booking: booking,
    Booking: Booking
    
};