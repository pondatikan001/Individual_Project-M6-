var fs = require('fs');

const Customer = function(customer_id, customer_name, customer_age, customer_address, customer_phonenumber) {
    this.customer_id = customer_id;
    this.customer_name = customer_name;
    this.customer_age = customer_age;
    this.customer_address = customer_address;
    this.customer_phonenumber = customer_phonenumber;
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