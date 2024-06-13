const express= require ('express');
const router= express.Router();
const asistenciaController = require('../controllers/asistenciaController');

router.get('/',asistenciaController.consultar);

router.post('/',asistenciaController.ingresar);

router.get('/',asistenciaController.consultar);

router.post('/',asistenciaController.ingresar);



router.route("/:idAsistencia")
    .put(asistenciaController.actualizar)
    .get(asistenciaController.consultarDetalle);

module.exports=router;