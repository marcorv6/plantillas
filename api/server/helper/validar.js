const moment = require('moment');
const validator = require('validator');

// Caractéres especiales permitidos en una string
const caracterEspecial = (char) => {
  const charset = [
    ' ',
    '.',
    ',',
    ':',
    ';',
    '?',
    '¿',
    '!',
    '¡',
    '(',
    ')',
    '"',
    "'",
    '-',
    '_',
    '/',
    '#',
    '%',
    '\n',
  ];

  for (let i = 0; i < charset.length; i++) if (charset[i] === char) return true;
  return false;
};

const yaExiste = (campo, m) => {
  throw new Error(`Ya se encuentra en uso ${m ? 'el' : 'la'} ${campo}.`);
};

const noValido = (campo, m, razon) => {
  throw new Error(
    `${m ? 'El' : 'La'} ${campo} no es valid${m ? 'o' : 'a'}, ${razon}.`
  );
};

/*
  Valida que la variable contenga un valor, de lo contrario saca un error.
*/
const noHay = (variable, campo, m) => {
  if (!variable) throw new Error(`No se mando ${m ? 'el' : 'la'} ${campo}.`);
};

/*
  Valida que la variable sea una string y, si se necesita, que mida igual 
  o menor que una longitud determinada.
*/
const validacionBasicaStr = (texto, campo, m, length) => {
  noHay(texto, campo, m);
  if (typeof texto !== 'string') noValido(campo, m, 'no se mando una string');
  if (length && texto.length > length)
    noValido(campo, m, 'tiene más carecteres de lo permitido');
  return texto;
};

/*
  Valida que la variable sea un numero entero, ya sea que recibe una string o
  un number. Usualmente se usa para validar ids.
*/
const validarNumeroEntero = (numero, campo, m = true) => {
  noHay(numero, campo, m);
  if (typeof numero === 'number') numero = numero.toString();
  if (typeof numero !== 'string')
    noValido(campo, m, 'no se mando una string o un number');
  if (!validator.isNumeric(numero, { no_symbols: true }))
    noValido(campo, m, 'no es un número entero valido');
  return Number(numero);
};

/*
  Valida que la stirng mandada sea un correo valido.
*/
const validarCorreo = (correo, campo = 'correo', m = true, length) => {
  validacionBasicaStr(correo, campo, m, length);
  if (!validator.isEmail(correo)) noValido(campo, m, 'no es un correo válido');
  return correo;
};

/*
  Valida que la stirng mandada sean caracteres del abcdario.
  Usualmente se usa para validar nombres, apellidos, etc.
*/
const validarTexto = (texto, campo, m, length) => {
  validacionBasicaStr(texto, campo, m, length);
  for (let i = 0; i < texto.length; i++)
    if (
      !validator.isAlpha(texto[i], 'es-ES') &&
      texto[i] != ' ' &&
      texto[i] != '.'
    )
      noValido(campo, m, 'contiene caracteres no validos');
  return texto;
};

/*
  Lo mismo que el de arriba pero este permite números y 
  caracteres especiales.
*/
const validarAlfanumerico = (texto, campo, m, length) => {
  validacionBasicaStr(texto, campo, m, length);
  for (let i = 0; i < texto.length; i++) {
    if (caracterEspecial(texto[i])) continue;
    if (!validator.isAlphanumeric(texto[i], 'es-ES'))
      noValido(campo, m, 'contiene caracteres no validos');
  }
  return texto;
};

/*
  Valida que la string sea un número menor a 9 dígitos.
*/
const validarNumeroCuenta = (
  numeroCuenta,
  campo = 'numero de cuenta',
  m = true
) => {
  validacionBasicaStr(numeroCuenta, campo, m, 9);
  if (!validator.isNumeric(numeroCuenta, { no_symbols: true }))
    noValido(campo, m, 'tiene caracteres que nos son números');
  return numeroCuenta;
};

/*
  Valida que la variable sea una fecha moment valida.
*/
const validarFecha = (fecha, campo, m) => {
  let fechaMoment = moment(fecha);

  noHay(fecha, campo, m);
  if (!fechaMoment.isValid()) noValido(campo, m, 'no es una fecha válida');
  return fechaMoment;
};

/*
  Valida que una string contenga solo números
*/
const validarNumero = (
  numero,
  campo,
  m,
  length,
  no_symbols = true,
  makeNumber = false
) => {
  validacionBasicaStr(numero, campo, m, length);
  if (!validator.isNumeric(numero, { no_symbols }))
    noValido(campo, m, 'tiene caracteres que no son números');
  if (makeNumber) return Number(numero);
  return numero;
};

// const validarAccesibilidad = (usuariosValidos = [], idTipoUsuario) => {
//   for (let i = 0; i < usuariosValidos.length; i++)
//     if (idTipoUsuario === usuariosValidos[i]) return;
//   throw new Error('Este usuario no tiene permitido usar esta linea de la API.');
// };

/*
  Te dice si un objeto esta vacio o no.
*/
const validarObjetoVacio = (obj) => {
  for (let key in obj) if (obj.hasOwnProperty(key)) return false;
  return true;
};

module.exports = {
  yaExiste,
  noValido,
  noHay,
  validacionBasicaStr,
  validarNumeroEntero,
  validarCorreo,
  validarTexto,
  validarAlfanumerico,
  validarNumeroCuenta,
  validarFecha,
  validarNumero,
  validarObjetoVacio,
};
