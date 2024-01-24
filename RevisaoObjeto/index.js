const Address = require("./Address");
const Person = require("./person");

const add = new Address(
  "São João Gualberto",
  414,
  "Apartamento 301",
  "Rio de Janeiro",
  "RJ"
);

const per = new Person("Nathalia Fernandes", add, 31);
console.log(per);
console.log(per.address.fullAddress());
