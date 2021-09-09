var fs = require('fs');

const Room = function(roomhotel_id, roomhotel_number, roomhotel_type, roomhotel_price, roomhotel_status) {
    this.roomhotel_id = roomhotel_id;
    this.roomhotel_number = roomhotel_number;
    this.roomhotel_type = roomhotel_type;
    this.roomhotel_price = roomhotel_price;
    this.roomhotel_status = roomhotel_status;
}

Room.prototype.getRoom = function() {
    return `
    ${this.roomhotel_id} 
    ${this.roomhotel_number} 
    ${this.roomhotel_type} 
    ${this.roomhotel_price} 
    ${this.roomhotel_status}
    `;
}

var rooms = new Array();
rooms.push(new Room(1, "001","standard", 1000, "occupied clean"));
rooms.push(new Room(2, "034","superior", 2300, "occupied don't disturb"));
rooms.push(new Room(3, "070","suite", 1800, "occupied no need to clean"));
rooms.push(new Room(4, "198","deluxe", 1500, "occupied "))
rooms.push(new Room(5, "077","suite", 1800, "occupied dirty"));




module.exports = {
    rooms: rooms,
    Room: Room
    
};