const express= require ('express');
const router= express.Router();
const personaController= require('../controllers/personaController');

router.get('/',personaController.consultar);

router.post('/',personaController.ingresar);



router.route("/:id")
    .put(personaController.actualizar)
    .get(personaController.consultarDetalle);

module.exports=router;