export function crearUsuario(nombre, rol)
{
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = hoy.getMonth() + 1;
    const año = hoy.getFullYear();
    const fecha = dia + "/" + mes + "/" + año;
    
    const usuario = 
    {
        nombre: nombre,
        rol: rol,
        fechaRegistro: fecha
    };
    
    return usuario;
}