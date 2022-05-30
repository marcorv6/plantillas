require('../config/config');
const colors = require('colors');
// const encriptar = require('../helper/encriptar');
const TipoUsuario = require('./tablas/TipoUsuario');
const Usuario = require('./tablas/Usuario');

const drop = async () => {
  console.log('\nPaso 1) Desinstalando la db.'.bold.blue);

  await Usuario.drop();
  console.log('La tabla Usuario se desinstalo correctamente.'.magenta);

  await TipoUsuario.drop();
  console.log('La tabla TipoUsuario se desinstalo correctamente.'.magenta);
};

const sync = async () => {
  console.log('\nPaso 2) Instalando la db.'.bold.blue);

  await TipoUsuario.sync();
  console.log('La tabla TipoUsuario se instalo correctamente.'.magenta);

  await Usuario.sync();
  console.log('La tabla Usuario se instalo correctamente.'.magenta);
};

const dataTipoUsuario = async () => {
  const data = ['admin', 'alumno', 'profesor'];

  console.log('\nPaso 3) Instalando catalogo tipo usuario.'.bold.blue);
  for (let i = 0; i < data.length; i++)
    await TipoUsuario.create({ tipoUsuario: data[i] });
};

const exe = async () => {
  await drop();
  await sync();
  await dataTipoUsuario;
  console.log(
    '\nSe ha instalado exitosamente la base de datos.\n'.underline.bold.green
  );

  process.exit();
};

exe();
