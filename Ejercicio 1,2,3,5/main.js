import { PI, IVA, DIAS_SEMANA, DESCUENTO } from "./constantes.js";
import { sumar, restar, multiplicar, areaCirculo, calcularTotal, aplicarImpuestos, aplicarDescuento, aplicarDescuentoPorRol } from "./operacionesmatematicas.js";


// Ejer 1
console.log("Ejercicio 1 = ");
const radio = 5;
const area = PI * (radio * radio);
console.log("Area del circulo: " + area);

const precioSinIva = 100;
const precioConIva = precioSinIva + (precioSinIva * IVA);
console.log("Precio con IVA: " + precioConIva);

console.log("Tercer dia: " + DIAS_SEMANA[2] + "\n");


// Ejer 2

console.log("Ejercicio 2 = ");
console.log("Suma: " + sumar(10, 5));
console.log("Resta: " + restar(10, 5));
console.log("Multiplicacion: " + multiplicar(10, 5));
console.log("Area circulo: " + areaCirculo(7) + "\n");


// Ejer 3

console.log("Ejercicio 3 = ");
const precio = 50;
const cantidad = 3;
const total = calcularTotal(precio, cantidad);
const totalConIva = aplicarImpuestos(total);
const totalFinal = aplicarDescuento(totalConIva);

console.log("Total: " + total);
console.log("Total con IVA: " + totalConIva);
console.log("Total final con descuento: " + totalFinal + "\n");

// Ejer 5

console.log("Ejercicio 5 = ");

const admin = { nombre: "Pedro", rol: "admin" };
const cliente = { nombre: "Carlos", rol: "cliente" };

console.log("COMPRA DEL ADMIN:");
const precioAdmin = 25;
const cantidadAdmin = 4;
const subtotalAdmin = calcularTotal(precioAdmin, cantidadAdmin);
const conIvaAdmin = aplicarImpuestos(subtotalAdmin);
const finalAdmin = aplicarDescuentoPorRol(conIvaAdmin, admin);

console.log("Precio: " + precioAdmin);
console.log("Cantidad: " + cantidadAdmin);
console.log("Subtotal: " + subtotalAdmin);
console.log("Con IVA: " + conIvaAdmin);
console.log("Total con descuento (20%) del admin: " + finalAdmin + "\n");

console.log("COMPRA DEL CLIENTE:");
const precioCliente = 50;
const cantidadCliente = 3;
const subtotalCliente = calcularTotal(precioCliente, cantidadCliente);
const conIvaCliente = aplicarImpuestos(subtotalCliente);
const finalCliente = aplicarDescuentoPorRol(conIvaCliente, cliente);

console.log("Precio: " + precioCliente);
console.log("Cantidad: " + cantidadCliente);
console.log("Subtotal: " + subtotalCliente);
console.log("Con IVA: " + conIvaCliente);
console.log("Total con descuento (10%) del cliente: " + finalCliente);