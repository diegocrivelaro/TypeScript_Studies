// Correto - Utilizando interface
interface pessoaProps {
  nome: string;
  idade: number;
}

const pessoa: pessoaProps = {
  nome: "Diego",
  idade: 22,
};

// Errado - Type '{ nome: string; idade: number; massa: number; }' is not assignable to type 'pessoaProps'. Object literal may only specify known properties, and 'massa' does not exist in type 'pessoaProps'.
const pessoa2: pessoaProps = {
  nome: "Diego",
  idade: 22,
  massa: 80,
};
