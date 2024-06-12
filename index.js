const express= require ('express');
const app= express();
const personasRoutes=require('./routes/personaRoutes.js');
const asistenciaRoutes=require('./routes/asistenciaRoutes.js');

app.use('/asistencia',asistenciaRoutes);
app.use('/personas',personasRoutes);

app.listen(8080,()=>
    {
        console.log("servidor activo");
    }
);