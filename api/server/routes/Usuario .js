const express = require('express');
const app = express();
const { verificaToken } = require('../middleware/autentificacion');
const route = '/usuario';
// const controllerPath = '../controller/Usuario';
// const login = require(`${controllerPath}/login`);

// app.post(`${route}/login`, (req, res) => {
//   return login(req.body)
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       res.status(400).json({ message: err.message });
//     });
// });

module.exports = app;
