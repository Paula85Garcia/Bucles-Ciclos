for (let opcion = ""; opcion !== "salir"; ) {
    opcion = prompt(`ingrese una opcion \n notas - \n salir`);
    if (opcion == "notas") {
        let nota = Number(prompt(`Ingrese la nota de su asignatura`));
        nota > 3 ? alert(`su nota de ${nota}, es aprobado`) : alert(`su nota de ${nota}, No es aprobado`);
    } else if (opcion == "salir") {
    } else {
        alert(`opcion invalida.. `);
    }
}