import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "blog"
})

db.connect(function (err) {
  if (err) throw err
  console.log("Conexão bem-sucedida ao banco de dados!")
})




