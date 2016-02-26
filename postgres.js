// Postgres
var pg = require('pg');
var PG_CONNECTION_STRING = "postgres://bdoynxivzpqptc:zhvZRCXISqRmzkaJeZK9w0I0DO@ec2-54-204-12-25.compute-1.amazonaws.com:5432/d48sfpfmcshk59" + '?ssl=true';

var knex = require('knex');

var pg = knex({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING || PG_CONNECTION_STRING,
  searchPath: 'knex,public',
  debug: true
});

// pg.select('*')
//   .from('users')
//   .first()
//   .then(function (rows) {
//     console.log(rows);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });

// pg('users')
//   .where({
//     id: 1,
//   })
//   .update({
//     alias: 'irok'
//   })
//   .then(function (rows) {
//     console.log(rows);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });

// var user = {
//   alias: 'jund111dadaa',
//   email: 'jun.irok@gmadil.cdomd11a1asda',
//   steamid: "STEAM_1:1:d7623dd381aasd11a",
//   steamid64: "12312312312312123",
// };

// pg.insert(user)
//   .into('users')
//   .returning('id')
//   .then(function (user) {
//     console.log("INSERT", user[0]);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });


// pg.schema
//   .withSchema('public')
//   .createTableIfNotExists('users', function (table) {
//     table.increments('id').primary();
//     table.string('alias').unique();
//     table.string('email').unique();
//     table.text('avatar');
//     table.string('steamid').unique();
//     table.bigInteger('steamid64').unique();
//     table.timestamp('created_at').defaultTo(knex.raw('now()'));
//   })
//   .then(function (rows) {
//     console.log(rows);
//   });
