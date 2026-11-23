function sumar() {
  let a = parseFloat(document.getElementById('num1').value);
  let b = parseFloat(document.getElementById('num2').value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById('resultado').value = 'Ingresa los dos números.';
  } else {
    document.getElementById('resultado').value = a + b;
  }
}

function restar() {
  let a = parseFloat(document.getElementById('num1').value);
  let b = parseFloat(document.getElementById('num2').value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById('resultado').value = 'Ingresa los dos números.';
  } else {
    document.getElementById('resultado').value = a - b;
  }
}

function multiplicar() {
  let a = parseFloat(document.getElementById('num1').value);
  let b = parseFloat(document.getElementById('num2').value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById('resultado').value = 'Ingresa los dos números.';
  } else {
    document.getElementById('resultado').value = a * b;
  }
}

function dividir() {
  let a = parseFloat(document.getElementById('num1').value);
  let b = parseFloat(document.getElementById('num2').value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById('resultado').value = 'Ingresa los dos números.';
  } else if (b === 0) {
    document.getElementById('resultado').value = 'No se puede dividir entre cero.';
  } else {
    document.getElementById('resultado').value = a / b;
  }
}

function raiz() {
  let a = parseFloat(document.getElementById('num1').value);

  if (isNaN(a)) {
    document.getElementById('resultado').value = 'Ingresa el primer número.';
  } else {
    document.getElementById('resultado').value = Math.sqrt(a);
  }
}

function multiplo() {
  let a = parseFloat(document.getElementById('num1').value);
  let b = parseFloat(document.getElementById('num2').value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById('resultado').value = 'Ingresa los dos números.';
  } else if (a % b === 0) {
    document.getElementById('resultado').value = a + ' es múltiplo de ' + b + '.';
  } else {
    document.getElementById('resultado').value = a + ' no es múltiplo de ' + b + '.';
  }
}

function compara() {
  let a = parseFloat(document.getElementById('num1').value);
  let b = parseFloat(document.getElementById('num2').value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById('resultado').value = 'Ingresa los dos números.';
  } else if (a > b) {
    document.getElementById('resultado').value = 'El primer número es mayor.';
  } else if (a < b) {
    document.getElementById('resultado').value = 'El segundo número es mayor.';
  } else {
    document.getElementById('resultado').value = 'Los números son iguales.';
  }
}

function comparar_cadenas() {
  let c1 = document.getElementById('campocadena1').value;
  let c2 = document.getElementById('campocadena2').value;

  if (c1 === '' || c2 === '') {
    document.getElementById('camporesultado').value = 'Ingresa las dos cadenas.';
  } else if (c1.length > c2.length) {
    document.getElementById('camporesultado').value = '"' + c1 + '" es mayor que "' + c2 + '".';
  } else if (c2.length > c1.length) {
    document.getElementById('camporesultado').value = '"' + c2 + '" es mayor que "' + c1 + '".';
  } else {
    document.getElementById('camporesultado').value = 'Las dos cadenas son iguales.';
  }
}

function contarcaracter() {
  let c1 = document.getElementById('campocadena1').value;
  let c2 = document.getElementById('campocadena2').value;
  let i = 0;
  let cont = 0;

  if (c1 === '' || c2 === '') {
    document.getElementById('camporesultado').value = 'Ingresa las dos cadenas.';
    return;
  }

  while (i < c1.length) {
    if (c1[i] === c2) {
      cont = cont + 1;
    }
    i = i + 1;
  }

  if (cont === 0) {
    document.getElementById('camporesultado').value = 'El carácter no se encontró.';
  } else {
    document.getElementById('camporesultado').value = 'El carácter aparece ' + cont + ' veces.';
  }
}

function espacios() {
  let c1 = document.getElementById('campocadena1').value;

  if (c1 === '') {
    document.getElementById('camporesultado').value = 'Ingresa una cadena.';
  } else {
    document.getElementById('camporesultado').value = c1.replaceAll(' ', '');
  }
}

function insertar() {
  let c1 = document.getElementById('campocadena1').value;
  let c2 = document.getElementById('campocadena2').value;

  if (c1 === '' || c2 === '') {
    document.getElementById('camporesultado').value = 'Ingresa las dos cadenas.';
  } else {
    let mitad = Math.ceil(c1.length / 2);
    document.getElementById('camporesultado').value = c1.slice(0, mitad) + c2 + c1.slice(mitad);
  }
}

let vector = [];

function crearVector() {
  let texto = document.getElementById('vectorInput').value;

  if (texto === '') {
    document.getElementById('resultadoVector').value = 'Ingresa números separados por coma.';
    return;
  }

  let partes = texto.split(',');
  vector = [];

  for (let i = 0; i < partes.length; i++) {
    vector.push(parseFloat(partes[i]));
  }

  document.getElementById('resultadoVector').value = '[' + vector.join(', ') + ']';
}

function sumarVector() {
  let suma = 0;

  for (let i = 0; i < vector.length; i++) {
    suma = suma + vector[i];
  }

  document.getElementById('resultadoVector').value = suma;
}

function pares() {
  let producto = 1;

  for (let i = 0; i < vector.length; i = i + 2) {
    producto = producto * vector[i];
  }

  document.getElementById('resultadoVector').value = producto;
}
