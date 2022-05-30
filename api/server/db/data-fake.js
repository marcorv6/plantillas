const Usuario = require('./tablas/Usuario');
const { encriptar } = require('../helper/encriptar');

const dataUsuarios = async () => {
  let usuario = ['416313221', '111111111', '222222222'];
  let nombre = [
    'Adriana De Luna Ramirez',
    'Nombre Falso 1',
    'Nombre Falso 2',
  ];

  for (let i = 0; i < usuario.length; i++) {
    await Usuario.create({
      usuario: usuario[i],
      nombre: nombre[i],
      password: encriptar('holi'),
      idTipoUsuario: 2,
    });
    console.log(`Se insertó el usuario ${usuario[i]}.`.magenta);
  }
};

const exec = async () => {
  await dataUsuarios();
  console.log(
    '\nSe ha instalado exitosamente la información falsa en la base de datos.\n'
      .underline.bold.green
  );
  process.exit();
};

exec();
