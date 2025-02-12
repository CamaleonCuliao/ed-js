
let primos = [], palindromos = [], ambos = []; 

function primo(num) {
    //Funcion que comprueba que el numero introducido sea primo, devuelve true si lo es
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function listaPrimos(numero){
  //Funcion que comprueba que todos los numeros hasta la variable "numero" sean primos o no y los añade al array "primos"
  let contador = 0;
  for (let a = 0; a < numero; a++){
    if (primo(a) == true){
      primos[contador] = a;
      contador++;
    }  
  }
}

function palindromo(numero){
    //Funcion que comprueba si un numero es palindromo
    let numStr = numero.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}

function listaPalindromo(numero){

  //Funcion que comprueba que todos los numeros hasta la variable "numero" sean palindromos o no y los añade al array "palindromos"
  let contador = 0;

  for (let a = 0; a < numero; a++){
    
    let numStr = a.toString();
    let result = numStr.split('').reverse().join('');

    if (numStr == result){
      palindromos[contador] = a;
      contador++;
      
    }

  }
}

function ambos1(numero){
  //Funcion que comprueba si los numeros hasta la variable "numero" son primos y palindromos, si lo son los añade al array "ambos"
  let contador = 0;
  for (let a = 0; a < numero; a++){
    if(primo(a) == true && palindromo(a) == true){
      ambos[contador] = a;
      contador++;
    }
  }
}

function main(){
  
  let numero = prompt("Intoduco el numero X (de 1 hasta X)")
  listaPrimos(numero);
  listaPalindromo(numero);
  ambos1(numero);

  alert("Primos: " + primos + "\nPalindromos: " + palindromos + "\nAmbos: " + ambos)
  
}

main()