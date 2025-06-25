import Pessoa from "./Pessoa.js";

export default class Veterinario extends Pessoa {
    #crvm;

    constructor(nome, crvm) {
        super(nome);
        this.#crvm = crvm;
    }

    getCrvm() {
        return this.#crvm;
    }

    setCrvm(crvm) {
        this.#crvm = crvm;
    }

    mostrarDados() {
        let aux = "---------------------------------\n" +
            "Dados do Veterinário: \n" +
            super.mostrarDados() +
            "\nCRVM: " + this.#crvm;
        return aux;
    }

    TipoPessoa() {
        return "Veterinário";
    }
}