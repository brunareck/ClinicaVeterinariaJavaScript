import Pessoa from "./Pessoa.js";
import Animal from "./Animal.js";

export default class Tutor extends Pessoa {
    #telefone;
    #animais;

    constructor(nome, telefone) {
        super(nome);
        this.#telefone = telefone;
        this.#animais = [];
    }

    getTelefone() {
        return this.#telefone;
    }

    setTelefone(telefone) {
        this.#telefone = telefone;
    }

    addAnimal(animal) {
        this.#animais.push(animal);
    }

    mostrarAnimais() {
        let aux = "Animais:";
        for (const animal of this.#animais) {
            aux += "\n" + animal.getNome();
        }
        return aux;
    }

    mostrarDados() {
        let aux = "---------------------------------\n" +
            "Dados do(a) Tutor(a): \n" +
            super.mostrarDados() + "\nTelefone: " + this.#telefone + "\n" +
            this.mostrarAnimais();
        return aux;
    }

    TipoPessoa() {
        return "Tutor";
    }
}