# 🐾 Sistema de Gerenciamento para Clínica Veterinária (JavaScript)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![OOP](https://img.shields.io/badge/Paradigma-OOP-blue)
![Clean Code](https://img.shields.io/badge/Prática-Clean%20Code-lightgrey)

### 📄 Sobre o Projeto

Este projeto é uma implementação em **JavaScript** de um sistema de gerenciamento básico para uma clínica veterinária. Ele foca na aplicação de conceitos de **Programação Orientada a Objetos (POO)**, utilizando a sintaxe moderna do ES6 para criar um código modular, organizado e de fácil leitura.

---

### ✨ Destaques Técnicos

* **Classes Modernas (ES6)**: Utilização da sintaxe `class` e `constructor` do ES6 para criar classes como `Pessoa`, `Tutor`, `Veterinario`, `Animal` e `Consulta`, demonstrando o domínio de recursos modernos da linguagem.
* **Encapsulamento com Campos Privados**: O uso de campos privados (`#`) para atributos como `_telefone` e `_nome` garante o encapsulamento, restringindo o acesso direto aos dados e promovendo a integridade do estado dos objetos.
* **Modularização com ES Modules**: As classes são organizadas em arquivos separados e importadas/exportadas usando `import` e `export default`, o que torna o código mais modular e facilita a manutenção.
* **Herança de Classes**: A classe `Pessoa` é estendida por `Tutor` e `Veterinario`, ilustrando a aplicação de herança para evitar duplicação de código e modelar a hierarquia de forma eficiente.
* **Manipulação de Datas**: Utilização do objeto `Date` para gerenciar datas e horários de consultas, incluindo a verificação do status da consulta com base na data atual.

---

### 🚀 Como Executar

Para rodar este projeto, você precisará de um ambiente de execução JavaScript, como o Node.js.

1.  Clone o repositório:
    ```sh
    git clone [https://github.com/seu-usuario/seu-projeto.git](https://github.com/seu-usuario/seu-projeto.git)
    cd seu-projeto
    ```
2.  Execute o arquivo principal (`ClinicaVeterinaria.js`) com Node.js:
    ```sh
    node ClinicaVeterinaria.js
    ```
---

### 📂 Estrutura do Projeto

* `modelo/`: Contém as classes de modelo (`Animal.js`, `Pessoa.js`, `Tutor.js`, `Veterinario.js`, `Consulta.js`) que definem as entidades do sistema.
* `ClinicaVeterinaria.js`: Arquivo principal que demonstra a criação e o uso das classes, servindo como ponto de entrada para testes.

---
