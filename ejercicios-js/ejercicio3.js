function main(){

    const numeros = [];
    let a = 1, suma = 0, maximo = 0, minima = 100, total = 0, pares = 0, impares = 0;
    
    //Bucle que le pregunta al usuario los numeros a introducir
    while(a >= 1){
        a = parseInt(prompt("Di un numero (menos de 1 para termianr)"));
        
        //Si el numero es 0 no se introduce al array
        if (a != 0){
            numeros[total] = a; 
        }
    
        suma = suma + a;
        total++;
    }
    
    //Bucle donde se sacan el numero maximo, minmo, pares e impares
    for(a = 0; a < numeros.length; a++){
    
        if (numeros[a] > maximo){
            maximo = numeros[a];
        }
    
        if (numeros[a] < minima){
            minima = numeros[a];
        }
    
        if (numeros[a] % 2 == 0){
            pares++;
        } else if (numeros[a] & 2 != 0){
            impares++;
        }
    
    }

    let media = suma / total;

    alert("Los numeros del array son: " + numeros + "\nNumeros pares: " + pares + "\nNumeros impares: " + impares + "\nSuma total: " + suma + "\nMedia: " + media + "\nMaxima: " + maximo + "\nMinima: " + minima)
}

main()