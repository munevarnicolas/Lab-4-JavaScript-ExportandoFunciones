
import { PI, IVA, DESCUENTO } from "./constantes.js";


// Funciones ejer 2

export function sumar(a, b) 
{
    return a + b;
}

export function restar(a, b) 
{
    return a - b;
}

export function multiplicar(a, b)
{
    return a * b;
}

export function areaCirculo(radio)
{
    return PI * (radio * radio);
}


// Funciones ejer 3

export function calcularTotal(precio, cantidad)
{
    return precio * cantidad;
}

export function aplicarImpuestos(total)
{
    return total + (total * IVA);
}

export function aplicarDescuento(total)
{
    return total - (total * DESCUENTO);
}

// Funciones ejer 5

export function aplicarDescuentoPorRol(total, usuario)
{
    if (usuario.rol === "admin")
    {
        const descuentoAdmin = total * 0.20;
        return total - descuentoAdmin;
    }
    else
    {
        const descuentoCliente = total * DESCUENTO;
        return total - descuentoCliente;
    }
}