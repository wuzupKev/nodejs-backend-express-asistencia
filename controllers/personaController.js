const { response } = require('express')
const db=require('../database/conexion.js')
class PersonaController {
    constructor(){

    }

    consultar(req,res){
        try {
            db.query(`SELECT * FROM control_de_asistencia.persona;`,
            (err,rows)=>{
                if(err){
                    res.status(400).send(err);
                }
                res.status(200).json(rows);
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
        

    consultarDetalle(req,res){
        const {idPersona}=req.params;
        try {
            
            db.query(`SELECT * FROM control_de_asistencia.persona where  idPersona=?;`,[idPersona],
            (err,rows)=>{
                if(err){
                    res.status(400).send(err);
                }
                res.status(200).json(rows[0]);
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    ingresar(req,res){
        try {
            const{nombreCompleto,cip,direccion,email,codigoSecreto}=req.body;
            db.query(`INSERT INTO control_de_asistencia.persona 
        (nombreCompleto,cip,direccion,email,estado,codigoSecreto,autorizacion)
        VALUES(?,?,?,?,true,?,false);`,[nombreCompleto,cip,direccion,email,codigoSecreto],(err,rows)=>{
            if(err){
                res.status(400).send(err);
            }
            res.status(201).json(rows);
        });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    actualizar(req,res){
        const {idPersona}=req.params;
        try {
            const{nombreCompleto,cip,direccion,email,estado,codigoSecreto,autorizacion}=req.body;
            db.query(`UPDATE control_de_asistencia.persona
            SET nombreCompleto =?,cip = ?,direccion =?,email = ?,estado =?,codigoSecreto =?,autorizacion =? WHERE idPersona = ?;`,[nombreCompleto,cip,direccion,email,estado,codigoSecreto,autorizacion,idPersona],(err,rows)=>{
            if(err){
                res.status(400).send(err);
            }
            res.status(201).json(rows);
        });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports= new PersonaController();