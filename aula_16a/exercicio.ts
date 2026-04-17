const tela = require('prompt-sync')();

// Declarando as variáveis
let nome: string;
let idade: number;

// Setando os valores
nome = tela('Qual é o seu nome? ');
idade = Number(tela('Qual é a sua idade? '));
