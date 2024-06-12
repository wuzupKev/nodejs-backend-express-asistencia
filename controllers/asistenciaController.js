const express= require ('express');
class AsistenciaController {
    constructor(){

    }

    consultar(req,res){
        res.json({msg:'consulta asistencia'})
    }
        

    consultarDetalle(req,res){
        res.json({msg:'consulta asistencia por id'})
    }

    ingresar(req,res){
        res.json({msg:'ingresar registro de asistencia'})
    }

    actualizar(req,res){
        res.json({msg:'se actualizo la asitencia'})
    }
}

module.exports= new AsistenciaController();