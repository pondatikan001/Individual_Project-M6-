var fs = require('fs');

const Customer = function(customerhotel_id, customerhotel_name, customerhotel_age, customerhotel_address, customerhotel_phonenumber) {
    this.customerhotel_id = customerhotel_id;
    this.customerhotel_name = customerhotel_name;
    this.customerhotel_age = customerhotel_age;
    this.customerhotel_address = customerhotel_address;
    this.customerhotel_phonenumber = customerhotel_phonenumber;
}

Customer.prototype.getCustomer = function() {
    return `
    ${this.customerhotel_id} 
    ${this.customerhotel_name} 
    ${customerhotel_age}
    ${this.customerhotel_address} 
    ${this.customerhotel_phonenumber}
    `;
}

var customers = new Array();
customers.push(new Customer(01, "Pangpond", "23", "Chiang Mai, Thailand", "0918516992"));
customers.push(new Customer(02, "Kanye","19", "Smart Illinois, United States of America", "2174561234"));
customers.push(new Customer(03, "Torres","20", "Fuenlabrada, Spain", "0013678962"));
customers.push(new Customer(04, "March","22", "ฺBangkok, Thailand", "0813864779"));
customers.push(new Customer(05, "Mel","18", "Chaing Rai, Thailand", "0838668068"));











module.exports = {
    customers: customers,
    Customer: Customer

};