function encontrarPatron(cadena, patron){

    cadena = cadena.toUpperCase();

    //Devuelve el numero de veces que x patron salga en la cadena
    //Elimina todos los caracteres de la cadena que no sean el patron (en este caso aa) y devuelve la longitud de la cadena
    return cadena.split(patron).length-1;
}

function totalPatrones(cadena, patrones){

    let total = 0;

    cadena = cadena.toUpperCase();
    //Se crea una copia de la cadena de texto
    let copia_cadena = cadena;

    for(let a = 0; a < patrones.length; a++){

        //Se añade a la variable total la cantidad de veces que el patron del array aparezca en la cadena de texto
        total += cadena.split(patrones[a]).length-1;

        //Se le vuelve a dar el valor original a la cadena de texto
        cadena = copia_cadena;
    }

    return total;
}

function main(){
    
    let patrones = ["AA", "BCA", "JT", "RTB"];

    let cadena = prompt("Introduce una cadena de texto: ");

    alert("Cadena de texto introducida: " + cadena + "\nPatrones a buscar: " + patrones + "\nAparecen: " + totalPatrones(cadena, patrones) + " veces")

}

main()