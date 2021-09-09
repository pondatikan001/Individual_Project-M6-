var fs = require('fs');

const {rooms, Room} = require("./roomhotel");
const {customers, Customer} = require("./customerhotel");
const {booking, Booking} = require("./booking");


const regex_id = /^\d{1,}$/;
const regex_number = /^[0]\d{2}$/;
const regex_price = /^[1-9]{3}\d/;
const regex_text = /[a-zA-Z]$/; 
//เพิ่มห้อง
addRoom = (id, number, type, price, status) => {
    let boolean = false;
  if (
    regex_id.test(id) && regex_number.test(number) && regex_string.test(type) && regex_price.test(price) && regex_string.test(status)){
    rooms.forEach((room) => {
      if (room.room_number == number) {
        boolean = true;
      }
    });
    if (boolean == false) {
      rooms.push(new Room(id, number, type, price, status));
      console.log("Add Room successfully.");
      console.table(rooms);
      return rooms;
    } else if (boolean == true) {
      console.log(
        "This room has already been created."
      );
    }
  } else {
    console.log("Failed to create a room.");
  }
};

console.table(rooms);

//ลบห้อง
deleteRoom = (id) => {
    let boolean = false;
    let index;
    rooms.forEach((room) => {
        if (room.room_id == id) {
            boolean = true;
        }
    })
    index = rooms.findIndex(rooms => rooms.room_id == id)
    if (boolean == true) {
        rooms.splice(index, 1)
        console.log("This room is already remove");
        return rooms;
    } else if (boolean == false) {
        console.log("Don't have this room in hotel");
    }
}


const regex_name = /^[A-Z]\w{1,}$/;
const regex_address = /^[A-Z][a-zA-Z, ]{5,}$/;
const regex_phonenumber = /^[0][6,8,9]\d{8}$/;
//เพิ่มcustomer
createCustomer = (id, name, address, phonenumber) => {
    let boolean = false;
    if (regex_id.test(id) && regex_name.test(name) && regex_address.test(address) && regex_phonenumber.test(phonenumber)) {
        customers.forEach((customer) => {
            if (customer.customer_id == customer_id) {
                console.log("This customer is already in the system.");
                boolean = true;
            }
        })
        if (boolean == false) {
            customers.push(new Customer(id, customer_name, address, phonenumber))
            console.log("Create customer account success!");
            console.table(customers);
            return customers;
        }
    } else {
        console.log("Failed to create customer account.");
    }
}
console.table(customers);

//ลบcustomer
deleteCustomer = (id) => {
    let boolean = false;
    let index;
    customers.forEach((customer) => {
        if (customer.customer_id == id) {
            boolean = true;
            console.log("Delete sucess");
        }
    })
    index = customers.findIndex((customers) => customers.customer_id == id);
    if (boolean == true) {
        customers.splice(index, 1)
        console.table(customers);
        return customers;
    } else if (boolean == false) {
        console.log("Don't have customer");
    }
}

const regex_date = /^\d{4}-\d{2}-\d{2}$/;
//จองห้อง
bookRoom = (id, customer_id, room_id, date_in, date_out) => {
    let boolean = false;
    if (regex_id.test(id) && regex_id.test(customer_id) && regex_id.test(room_id) && regex_date.test(date_in) &&regex_date.test(date_out)
    ) {
      booking.forEach((book) => {
        if (
          book.booking_id == id ||
          book.room_id == room_id ||
          (book.date_in == date_in && book.date_out == date_out)
        ) {
          boolean = true;
        }
      });
      if (boolean == false) {
        booking.push(new Booking(id, customer_id, room_id, date_in, date_out));
        console.log("This booking id has been created successfully.");
        console.table(booking);
        return booking;
      } else if (boolean == true) {
        console.log("This booking for this id has already been reserved.");
      }
    } else {
      console.log("Failed to create a booking.");
    }
  };
  
  console.table(booking);
//ยกเลิกการจอง
deleteBooking = (id) => {
    let boolean = false;
    let index;
    if (regex_id.test(id)) {
    books.forEach((booking) => {
        if (booking.booking_id == id) {
            boolean = true;
        }
    })
    index = booking.findIndex(booking => booking.booking_id == id)
    if (boolean == true) {
        booking.splice(index, 1)
        console.log("Cancel booking!");
        console.table(booking);
        return booking;
    } else if (boolean == false) {
        console.log("Don't have room in hotel");
    }
    } else {
    console.log("Sorry cencel booking fail");
    }
}
//เช็คห้อง
checkBooking = (id) => {
    let boolean = false;
    if (regex_id.test(id)) {
    books.forEach((booking) => {
        if (booking.booking_id == id) {
            console.log("Booking success!");
            console.table(booking);
            boolean = true;
        }
    })
    if (boolean == false) {
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
