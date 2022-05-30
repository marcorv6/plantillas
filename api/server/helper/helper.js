const fs = require('fs');
const moment = require('moment');

const crearDDMMAAAA = (date) => {
  const fechaMoment = moment(date);
  let ddmmaaaa = '';

  if (fechaMoment.isValid())
    ddmmaaaa = `${fechaMoment.date()}/${
      fechaMoment.month() + 1
    }/${fechaMoment.year()}`;
  return ddmmaaaa;
};

const eliminarArchivo = (path) => {
  return new Promise((resolve, reject) => {
    fs.unlink(path, (err) => {
      if (err) reject(err);
      resolve({ message: 'Se elimino el archivo correctamente.' });
    });
  });
};

const crearArchivo = (path, texto) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, texto, (err) => {
      if (err) reject(err);
      resolve({ message: 'Se creo el archivo correctamente.' });
    });
  });
};

module.exports = {
  crearDDMMAAAA,
  eliminarArchivo,
  crearArchivo,
};
