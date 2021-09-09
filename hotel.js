var fs = require('fs');

const {rooms, Room} = require("./roomhotel");
const {customers, Customer} = require("./customerhotel");
const {booking, Booking} = require("./booking");

const reg_text = /[a-zA-Z]$/;
const reg_number = /^[0]\d/;
const reg_price = /^[1-9]{3}\d/;
const reg_id = /\d/;
const reg_phone = /^[0][6789]\d{8}$/;
const reg_date = /\d{4}-\d{2}-\d{2}/;
//เพิ่มห้อง
addRoom = (room_id, number, type, price, status) => {
    let check = false;

    if (reg_id.test(room_id)&&reg_number.test(number)&&reg_text.test(type)&&reg_price.test(price)&&reg_text.test(status)) {
        rooms.forEach((room) => {
            if (room.room_number == number) {
                console.log("already have this room");
                check = true;
            }
        })
        if (check == false) {
            rooms.push(new Room(room_id, number, type, price, status))
            console.log("Create Room already!");
            console.table(rooms);
            return rooms;
        }
    } else {
            console.log("Failed to create a room");
        }
}
//ลบห้อง
deleteRoom = (id) => {
    let check = false;
    let index;
    rooms.forEach((room) => {
        if (room.room_id == id) {
            check = true;
        }
    })
    index = rooms.findIndex(rooms => rooms.room_id == id)
    if (check == true) {
        rooms.splice(index, 1)
        console.log("This room is already remove");
        return rooms;
    } else if (check == false) {
        console.log("Don't have this room in hotel");
    }
}
//เพิ่มcustomer
createCustomer = (customer_id, customer_name, address, phone) => {
    let check = false;
    if (reg_id.test(customer_id) && reg_text.test(customer_name) && reg_text.test(address) && reg_phone.test(phone)) {
        customers.forEach((customer) => {
            if (customer.customer_id == customer_id) {
                console.log("This customer is already in the system.");
                check = true;
            }
        })
        if (check == false) {
            customers.push(new Customer(customer_id, customer_name, address, phone))
            console.log("Create customer account success!");
            console.table(customers);
            return customers;
        }
    } else {
        console.log("Failed to create customer account.");
    }
}

//ลบcustomer
deleteCustomer = (id) => {
    let check = false;
    let index;
    customers.forEach((customer) => {
        if (customer.customer_id == id) {
            check = true;
            console.log("Delete sucess");
        }
    })
    index = customers.findIndex(customers => customers.customer_id == id)
    if (check == true) {
        customers.splice(index, 1)
        console.table(customers);
        return customers;
    } else if (check == false) {
        console.log("Don't have customer");
    }
}
//จองห้อง
bookRoom = (booking_id, customer_id, room_id, date) => {
    let check = false;
    if (reg_id.test(book_id) && reg_id.test(customer_id) && reg_id.test(room_id) && reg_date.test(date)) {
    books.forEach((booking) => {
        if (booking.booking_id == booking_id || booking.room_id == room_id && booking.date == date) {
            check = true;
        }
    })
    if (check == false) {
        booking.push(new Booking(booking_id, customer_id, room_id, date))
        console.log("Booking success!");
        console.table(booking);
        return books;
    } else if (check == true) {
        console.log("Sorry this room is already booking");
    }
    } else {
    console.log("Sorry booking fail");
    }
}
//ยกเลิกการจอง
deleteBooking = (id) => {
    let check = false;
    let index;
    if (reg_id.test(id)) {
    books.forEach((booking) => {
        if (booking.booking_id == id) {
            check = true;
        }
    })
    index = booking.findIndex(booking => booking.booking_id == id)
    if (check == true) {
        booking.splice(index, 1)
        console.log("Cancel booking!");
        console.table(booking);
        return booking;
    } else if (check == false) {
        console.log("Don't have room in hotel");
    }
    } else {
    console.log("Sorry cencel booking fail");
    }
}
//เช็คห้อง
checkBooking = (id) => {
    let check = false;
    if (reg_id.test(id)) {
    books.forEach((booking) => {
        if (booking.booking_id == id) {
            console.log("Booking success!");
            console.table(booking);
            check = true;
        }
    })
    if (check == false) {
        console.log("NO booking");
    }else {
        console.log("Error your input id is wrong");
    }
  }
}

module.exports = {
    addRoom: addRoom,
    deleteRoom: deleteRoom,
    createCustomer: createCustomer,
    deleteCustomer: deleteCustomer,
    bookRoom, bookRoom,
    deleteBooking: deleteBooking,
    checkBooking: checkBooking
}
