const express = require("express");
const db = require("../database/conexion.js");
class AsistenciaController {
  constructor() {}

  consultar(req, res) {
    try {
      db.query(
        `SELECT * FROM control_de_asistencia.asistencia;`,
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          res.status(200).json(rows);
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  consultarDetalle(req, res) {
    const { idAsistencia } = req.params;
    try {
      db.query(
        `SELECT * FROM control_de_asistencia.asistencia where  control_de_asistencia.asistencia.idAsistencia=?;`,
        [idAsistencia],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          res.status(200).json(rows[0]);
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  ingresar(req, res) {
    try {
      const { horaEntrada,horaSalidaAlmuerzo,horaEntradaAlmuerzo,
        horaSalida,idPersona } = req.body;
      db.query(
        `INSERT INTO control_de_asistencia.asistencia(horaEntrada,horaSalidaAlmuerzo,horaEntradaAlmuerzo,
        horaSalida,idPersona) VALUES (?,?,?,?,?);`,
        [horaEntrada,horaSalidaAlmuerzo,horaEntradaAlmuerzo,
            horaSalida,idPersona],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          res.status(201).json(rows);
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  actualizar(req, res) {
    res.json({ msg: "se actualizo la asitencia" });
  }
}

module.exports = new AsistenciaController();
