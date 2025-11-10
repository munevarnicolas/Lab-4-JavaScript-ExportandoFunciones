import {ROLES} from "./usuariosConstantes.js";
import {crearUsuario} from "./usuarios.js";

const usuario1 = crearUsuario("Pedro", ROLES.ADMIN);
const usuario2 = crearUsuario("Carlos", ROLES.CLIENTE);

console.log(usuario1);
console.log(usuario2);
