/*
This script helps you generate a lot of customers really quickly.
Put this file in an empty folder, then type:

npm init -y
npm add chance

Then run script to generate SQL statements to create data: node mkdata.js
*/

const Chance = require("chance");
const chance = new Chance();
const println = console.log;

const createTable = `CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  uuid UUID DEFAULT gen_random_uuid() NOT NULL,
  email varchar NULL,
  firstname varchar NULL,
  lastname varchar NULL,
  dob date NULL,
  balance decimal NULL,
  state varchar NULL,
postcode varchar NULL
);`;

const ccTemplate = `INSERT INTO customers (email, firstname, lastname, dob, balance, state, postcode) VALUES `;
const MAX_LINES = 10000;

const createCustomers = () => {
  println(ccTemplate);

  for (var i = 0; i < MAX_LINES; i++) {
    const firstname = chance.first({ nationality: "en" });
    const lastname = chance.last({ nationality: "en" });
    const email = `${firstname}.${lastname}@example.com`.replace(" ", "_");
    const dob = chance.birthday({ string: true, american: true });
    const balance = Math.floor(Math.random() * 10000 - 3000) / 100;
    state = chance.state();
    postcode = chance.postcode();

    const eol = i===MAX_LINES-1 ? ';' : ',' 
    println(`('${email}', '${firstname}', '${lastname}', '${dob}', ${balance}, '${state}', '${postcode}')${eol}`);
  }
};

const main = () => {
  println(createTable);
  createCustomers();
};

main();
