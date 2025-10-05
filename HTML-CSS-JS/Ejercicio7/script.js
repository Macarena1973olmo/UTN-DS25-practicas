// 1. Sumar 5 a un número
function sumar5() {
  let num = Number(prompt("Ingrese un número:"));
  document.getElementById("resultado").innerText = "Resultado: " + (num + 5);
}

// 2. Concatenar cadenas
function concatenarCadenas() {
  let str1 = prompt("Ingrese la primera cadena:");
  let str2 = prompt("Ingrese la segunda cadena:");
  document.getElementById("resultado").innerText = str1 + " " + str2;
}

// 3. Comparar números con if/else
function compararNumeros() {
  let a = Number(prompt("Ingrese el primer número:"));
  let b = Number(prompt("Ingrese el segundo número:"));
  let res;
  if(a === b) res = "Son iguales";
  else if(a > b) res = "El primero es mayor";
  else res = "El segundo es mayor";
  document.getElementById("resultado").innerText = res;
}

// 4. Grupo por número usando switch
function grupoPorNumero() {
  let num = Number(prompt("Ingrese un número entre 1 y 10:"));
  let grupo;
  switch(true){
    case (num >=1 && num <=3): grupo = "Grupo 1"; break;
    case (num >=4 && num <=6): grupo = "Grupo 2"; break;
    case (num >=7 && num <=10): grupo = "Grupo 3"; break;
    default: grupo = "Número inválido"; break;
  }
  document.getElementById("resultado").innerText = grupo;
}

// 5. Sumatoria 0 a 10
function sumatoria() {
  let suma = 0;
  for(let i=0;i<=10;i++) suma += i;
  document.getElementById("resultado").innerText = "Sumatoria: " + suma;
}

// 6. Producto de un array
function productoArray() {
  let arr = [1,2,3,4,5,6,7,8,9,10];
  let prod = arr.reduce((a,b)=>a*b,1);
  document.getElementById("resultado").innerText = "Producto total: " + prod;
}

// 7. Función producto de dos valores
function producto(a,b){ return a*b; }

// 8. Función concatenar cadenas
function concatenar(a,b){ return a + b; }

// 9. Función mostrar mayor
function mostrarMayor(a,b){
  if(a===b) return "Son iguales";
  return (a>b)?a+" es mayor":b+" es mayor";
}

// 10. Función mostrar asteriscos
function mostrarAsteriscos(n){
  let res = "*".repeat(n).split("").join(" ");
  document.getElementById("resultado").innerText = res;
}

// 11. Función monto con descuento
function calcularMonto(monto, medio){
  if(monto < 200) return monto;
  let descuento = 0;
  if(monto <=400){
    if(medio==='E') descuento=0.3;
    else if(medio==='D') descuento=0.2;
    else if(medio==='C') descuento=0.1;
  } else descuento = 0.4;
  return monto*(1-descuento);
}

// 12. Función medio-árbol
function medioArbol(altura){
  let res = "";
  for(let i=1;i<=altura;i++){
    res += "* ".repeat(i) + "\n";
  }
  document.getElementById("resultado").innerText = res;
}

// 13. Función día de la semana
function diaSemana(num){
  switch(num){
    case 1: return "Lunes";
    case 2: return "Martes";
    case 3: return "Miércoles";
    case 4: return "Jueves";
    case 5: return "Viernes";
    case 6:
    case 7: return "Fin de semana";
    default: return "Número inválido";
  }
}

// 14. Función promedio de array ingresado por usuario
function promedioArray(){
  let input = prompt("Ingrese números separados por espacio:");
  let arr = input.split(" ").map(Number);
  let promedio = arr.reduce((a,b)=>a+b,0)/arr.length;
  document.getElementById("resultado").innerText = "Promedio: " + promedio;
}

// Portero eléctrico y teclado en pantalla requieren HTML + JS adicional según interfaz
