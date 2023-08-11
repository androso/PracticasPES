const edad = Number(prompt("Introduzca su edad"));

if (edad <= 0) {
    alert("La edad no puede ser menor o igual a 0");
} else if (edad > 100) {
    alert("La edad no puede ser mayor a 100");
} else if (edad === 18) {
    alert("El usuario tiene 18");
} else if (edad > 18) {
    alert("El usuario es mayor de edad");
} else {
    alert("El usuario es menor de edad");
}