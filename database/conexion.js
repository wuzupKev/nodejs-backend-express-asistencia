const mysql = require ('mysql2');
const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'AdminDB123',
    database:'control_de_asistencia'
});
db.connect((error)=>{
    if(error){
        throw error;
    }
    console.log('todo bien');
});

module.exports=db;