import Tutor from "../modelo/Tutor.js";
import Animal from "../modelo/Animal.js";
import Veterinario from "../modelo/Veterinario.js";
import Consulta from "../modelo/Consulta.js";

function ClinicaVeterinaria() {
    const tutor1 = new Tutor("João", "1234-5678");
    const tutor2 = new Tutor("Bruna", "8765-4321");

    const animal1 = new Animal("Rex", "Cachorro", "Labrador", 5, 30.0, tutor1);
    const animal2 = new Animal("Meg", "Cachorro", "Shitzu", 12, 6.0, tutor2);
    const animal3 = new Animal("Maya", "Gato", "SR", 3, 3.0, tutor2);

    tutor1.addAnimal(animal1);
    tutor2.addAnimal(animal2);
    tutor2.addAnimal(animal3);

    const veterinario1 = new Veterinario("Laura Dias", "12345");
    const veterinario2 = new Veterinario("Joao Camargo", "54321");

    const consulta1 = new Consulta(animal1, "2025-05-15T15:30:00", "Coceira", veterinario2);
    const consulta2 = new Consulta(animal2, "2025-06-30T15:30:00", "Infecção Urinária", veterinario1);

    console.log(tutor1.mostrarDados());
    console.log(tutor2.mostrarDados());
    console.log(animal1.mostrarDados());
    console.log(animal2.mostrarDados());
    console.log(animal3.mostrarDados());
    console.log(veterinario1.mostrarDados());
    console.log(veterinario2.mostrarDados());
    console.log(consulta1.mostrarDados());
    console.log(consulta2.mostrarDados());
}

ClinicaVeterinaria();