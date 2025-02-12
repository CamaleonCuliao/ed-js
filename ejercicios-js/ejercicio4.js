//La programacion orientada a objetos cada dia me da mas miedo
class autobus{
    constructor(capacidad, pasajeros, matricula, listadoConductores){
        this.capacidad = capacidad
        this.pasajeros = pasajeros
        this.matricula = matricula
        this.listadoConductores = new Array()
    }

    asignar(){
        this.capacidad = parseInt(prompt("Que capacidad tiene el autobus?: "))    

        //Bucle do while que impida que existan mas pasajeros que capacidad al crear un objeto autobus
        do{
            this.pasajeros = parseInt(prompt("Cuantos pasajeros transporta?: "))

            if (this.capacidad < this.pasajeros){
                console.log("No pueden haber mas pasajeros que capacidad")
            }

        }while(this.capacidad < this.pasajeros);

        this.matricula = prompt("Que matricula tiene el autobus?: ")

        //ListadoConductores es un array de objetos de la clase conductores
        for(let a = 0; a < conductores.length; a++){
            this.listadoConductores[a] = conductores[a]
        }
    }

    mostrarDatosAutobus(){

        //Se crea un array y se le introducen los numeros de licencia de los conductores
        let arr = new Array()
        for(let a = 0; a < this.listadoConductores.length; a++){
            arr[a] = this.listadoConductores[a].licencia
        }

        //Se imprimen los datos
        console.log("Capacidad del autobus: " + this.capacidad +  "\nCantidad de pasajeros: " + this.pasajeros +  "\nMatricula del autobus: " + this.matricula +  "\nConductores del autobus: " + arr);
    }

    subirNumPas(){

        let pas_nuevos = parseInt(prompt("Numero de pasajero que añadir: "))

        //Si los nuevos pasajeros sumados con los pasajeros actuales superan la capacidad, se establecela misma cantidad de pasajeros y capacidad
        if (this.capacidad < pas_nuevos + parseInt(this.pasajeros)){

            this.pasajeros += parseInt(this.capacidad) - parseInt(this.pasajeros) 

        //Si no es el caso, se suma de manera normal
        } else{
            this.pasajeros = parseInt(this.pasajeros) + parseInt(pas_nuevos)
        }

    }

    bajarNumPas(pasajeros){

        let pas_nuevos = parseInt(prompt("Numero de pasajero que eliminar: "))

        //Si los pasajeros a eliminar son menos que la capacidad, se establecen los pasajeros como 0
        if (pas_nuevos > this.capacidad){

            this.pasajeros = 0

        //Si no, se les resta al numero de pasajeros actuales
        } else{
            this.pasajeros -= pas_nuevos 
        }
    }
}

class conductor{
    constructor(nombre, licencia){
        this.nombre = nombre;
        this.licencia = licencia;
    }

    asignar(){
        this.nombre = prompt("Nombre del conductor: ")
        this.licencia = prompt("Licencia del conductor: ")
    }

    mostrarDatos(){
        console.log("Nombre del conductor: " + this.nombre + "\nLicencia del conductor: " + this.licencia)
    }
}

//Se crean los objetos y se introducen a un array
conductor01 = new conductor()
conductor02 = new conductor()
conductor03 = new conductor()
conductor04 = new conductor()
    
const conductores = [conductor01, conductor02, conductor03, conductor04]

//Se insertan y muestran los datos en la consola
for(let a = 0; a < conductores.length; a++){
    conductores[a].asignar()
    conductores[a].mostrarDatos()
}

function main(){

    //Se crea un objeto autobus y se comprueban los metodos
    autobus01 = new autobus()
    autobus01.asignar()
    
    autobus01.mostrarDatosAutobus()   
    
    autobus01.subirNumPas()

    autobus01.mostrarDatosAutobus()

    autobus01.bajarNumPas()

    autobus01.mostrarDatosAutobus()
    
}

main()