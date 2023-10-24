let nombre
let documento
let telefono
let edad
let ciudad 
let cupoMaximo 
let valorPersona
let descuentoMenorEdad 
let reservas 



class Persona {
   nombre=nombre;
   documento=documento;
   telefono=telefono;
   edad=edad;
}

class PaqueteTuristico {
    
        ciudad = ciudad;
        cupoMaximo = cupoMaximo;
        valorPersona = valorPersona;
        descuentoMenorEdad = descuentoMenorEdad;
        reservas = [];
    

    hacerReserva(personas) {
        if (personas.length <= cupoMaximo) {
            reservas.push(...personas);
            console.log("Reserva realizada con éxito");
        } else {
            console.log(`Lo siento, solo se permiten ${cupoMaximo} personas para el paquete a ${ciudad}.`);
        }
    }

    calcularGanancias() {
        let totalGanancias = reservas * valorPersona;
        if (this.descuentoMenorEdad > 0) {
            const menoresEdad = reservas.filter(persona => persona.edad < 18).length;
            totalGanancias -= (menoresEdad * valorPersona * descuentoMenorEdad);
        }
        return totalGanancias;
    }
}

const paqueteMexico = new PaqueteTuristico("Ciudad de México", 5, 5000000);
const paqueteBrasil = new PaqueteTuristico("Brasil", 2, 4500000);
const paqueteAmsterdam = new PaqueteTuristico("Ámsterdam", 2, 7500000, 0.25);

const persona1 = new Persona("Jorge", "12345", "1234567890", 25);
const persona2 = new Persona("Samanta", "67890", "9876543210", 20);
const persona3 = new Persona("Francisco", "54321", "4567890123", 15);
const persona4 = new Persona("Amanda", "98765", "3210987654", 22);

paqueteMexico.hacerReserva([persona1, persona2, persona3]);
paqueteBrasil.hacerReserva([persona4]);
paqueteAmsterdam.hacerReserva([persona2]);


const output = document.getElementById("output");
output.innerHTML = `
    <p>Ganancias para el paquete a Ciudad de México: ${paqueteMexico.calcularGanancias()}</p>
    <p>Ganancias para el paquete a Brasil: ${paqueteBrasil.calcularGanancias()}</p>
    <p>Ganancias para el paquete a Ámsterdam: ${paqueteAmsterdam.calcularGanancias()}</p>
    <p>Personas viajarán a México: ${paqueteMexico.reservas.length}</p>
    <p>Personas viajarán a Brasil: ${paqueteBrasil.reservas.length}</p>
    <p>Personas viajarán a Ámsterdam: ${paqueteAmsterdam.reservas.length}</p>
    <p>Personas menores de edad: ${paqueteMexico.reservas.concat(paqueteBrasil.reservas, paqueteAmsterdam.reservas)
    .filter(persona => persona.edad < 18).length}</p>`;

