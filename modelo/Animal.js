export default class Animal {
    #nome;
    #especie;
    #raca;
    #idade;
    #peso;
    #tutor;

    constructor(nome, especie, raca, idade, peso, tutor) {
        this.#nome = nome;
        this.#especie = especie;
        this.#raca = raca;
        this.#idade = idade;
        this.#peso = peso;
        this.#tutor = tutor;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getEspecie() {
        return this.#especie;
    }

    setEspecie(especie) {
        this.#especie = especie;
    }

    getRaca() {
        return this.#raca;
    }

    setRaca(raca) {
        this.#raca = raca;
    }

    getIdade() {
        return this.#idade;
    }

    setIdade(idade) {
        this.#idade = idade;
    }

    getPeso() {
        return this.#peso;
    }

    setPeso(peso) {
        this.#peso = peso;
    }

    getTutor() {
        return this.#tutor;
    }

    setTutor(tutor) {
        this.#tutor = tutor;
    }

    mostrarDados() {
        let aux = "---------------------------------\n" +
            "Dados do Animal:\n" +
            "Nome: " + this.#nome + "\n" +
            "Espécie: " + this.#especie + "\n" +
            "Raça: " + this.#raca + "\n" +
            "Idade: " + this.#idade + " anos\n" +
            "Peso: " + this.#peso + " kg\n" +
            "Tutor: " + (this.#tutor ? this.#tutor.getNome() : "Sem Tutor");
        return aux;
    }
}