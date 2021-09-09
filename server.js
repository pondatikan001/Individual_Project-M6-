var http = require('http');
var url = require('url');
var fs = require("fs");

const { addRoom, createCustomer, bookingRoom, deleteBooking, checkBooking } = require('./hotel');



http.createServer(function (req, res) {

    var request_path = url.parse(req.url, true);
    var message = '';
    var data;
    var status = 200;

    switch(request_path.pathname) {
        case '/addRoom': 
            try {
                let Room = addRoom(parseInt(request_path.query.room_id), request_path.query.room_number, request_path.query.room_type,
                parseInt(request_path.query.room_price) , request_path.query.status);
                message += `Add room no.${request_path.query.room_number} status ${request_path.query.status} `;
                data += JSON.stringify(Room);
            } catch(err) {
                status = 400;
                message += err;
                console.log(err);
            }
            break;

        case '/createCustomer': 
            try {
                let Customer = createCustomer(parseInt(request_path.query.customer_id), request_path.query.customer_name, 
                request_path.query.address,request_path.query.phone);
            message += `Create customer ${request_path.query.customer_name} already! `;
            data += JSON.stringify(Customer);

            } catch(err) {
                status = 400;
                message += err;
                console.log(err);
            }
            break;

        case '/bookingRoom':
            try {
                let Book = bookingRoom(parseInt(request_path.query.booking_id), parseInt(request_path.query.customer_id), 
                request_path.query.room_id,request_path.query.date);
                message += `Booking id: ${request_path.query.booking_id} is already! `;
                data += JSON.stringify(Book);

            } catch(err) {
                status = 400;
                message += err;
                console.log(err);
            }
            break;

        case '/deleteBooking': 
            try {
                deleteBooking(parseInt(request_path.query.booking_id));
                message += `Booking id: ${request_path.query.booking_id} already delete`;
            } catch(err) {
                status = 400;
                message += err;
                console.log(err);
            }
            break;

        case '/checkBooking': 
            try {
                checkBooking(
                    request_path.query.booking_id
                  );
                  message += `Check booking id ${request_path.query.booking_id}!`
            } catch(err) {
                status = 400;
                message += err;
                console.log(err);
            }
            break;

        default:
            status = 404;
            message = 'path not found!'
            break;

    }
    let response_object = {
        status: status,
        message: message,
        data: data
    }

 

	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(response_object));

}).listen(8080);
console.log('Hotel booking is running on port 8080.');