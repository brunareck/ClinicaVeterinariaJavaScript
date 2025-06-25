export default class Pessoa {
    #nome;

    constructor(nome = "") {
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    mostrarDados() {
        return "Nome: " + this.#nome;
    }

    toString() {
        return this.#nome;
    }

    TipoPessoa() {
        throw new Error("Método abstrato 'TipoPessoa' deve ser implementado");
    }
}