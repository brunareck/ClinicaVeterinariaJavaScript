import Animal from "./Animal.js";
import Veterinario from "./Veterinario.js";

export default class Consulta {
    #data;
    #motivo;
    #animal;
    #veterinario;
    #atendida = false;

    constructor(animal, data, motivo, veterinario) {
        this.#animal = animal;
        this.#data = new Date(data);
        this.#motivo = motivo;
        this.#veterinario = veterinario;
    }

    getData() {
        return this.#data;
    }

    setData(data) {
        this.#data = data;
    }

    getMotivo() {
        return this.#motivo;
    }

    setMotivo(motivo) {
        this.#motivo = motivo;
    }

    getAnimal() {
        return this.#animal;
    }

    setAnimal(animal) {
        this.#animal = animal;
    }

    StatusConsulta() {
        const atual = new Date();
        if (atual > this.#data) {
            this.#atendida = true;
        }
        return this.#atendida;
    }

    mostrarDados() {
        const formato = { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
        let aux = "---------------------------------\n" +
            "Dados da Consulta:\n" +
            "Animal: " + this.#animal.getNome() + "\n" +
            "Tutor: " + this.#animal.getTutor().getNome() + "\n" +
            "Data: " + this.#data.toLocaleString("pt-BR", formato) + "\n" +
            "Motivo: " + this.#motivo + "\n" +
            "Veterinário: " + this.#veterinario.getNome() + "\n" +
            "CRVM: " + this.#veterinario.getCrvm() + "\n";

        if (this.StatusConsulta()) {
            aux += "Status: Consulta atendida";
        } else {
            aux += "Status: Consulta pendente";
        }
        return aux;
    }

    getVeterinario() {
        return this.#veterinario;
    }

    setVeterinario(veterinario) {
        this.#veterinario = veterinario;
    }
}