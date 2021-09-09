var fs = require('fs');

const Room = function(room_id, room_number, room_type, room_price, room_status) {
    this.room_id = room_id;
    this.room_number = room_number;
    this.room_type = room_type;
    this.room_price = room_price;
    this.room_status = room_status;
}

Room.prototype.getRoom = function() {
    return `
    ${this.room_id} 
    ${this.room_number} 
    ${this.room_type} 
    ${this.room_price} 
    ${this.room_status}
    `;
}

var rooms = new Array();
rooms.push(new Room(1, "001","standard", 1000, "occupied clean"));
rooms.push(new Room(2, "034","superior", 2300, "occupied don't disturb"));
rooms.push(new Room(3, "070","suite", 1800, "occupied no need to clean"));
rooms.push(new Room(4, "198","deluxe", 1500, "occupied "));
rooms.push(new Room(5, "077","suite", 1800, "occupied dirty"));




module.exports = {
    rooms: rooms,
    Room: Room  
};