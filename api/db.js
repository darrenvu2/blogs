import mysql from "mysql";

export const dv = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Wasd1234",
  database: "blog",
});
