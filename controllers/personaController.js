const db=require('../database/conexion.js')
class PersonaController {
    constructor(){

    }

    consultar(req,res){
        res.json({msg:'consulta personas'})
    }
        

    consultarDetalle(req,res){
        res.json({msg:'consulta persona por id'})
    }

    ingresar(req,res){
        res.json({msg:'ingresar registro'})
    }

    actualizar(req,res){
        res.json({msg:'se actualizo'})
    }
}

module.exports= new PersonaController();