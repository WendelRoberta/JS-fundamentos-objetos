const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12365242266",
    email: "andre@email.com",
    fones: ["55899898555", "5521988743124"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";
console.log(cliente);


