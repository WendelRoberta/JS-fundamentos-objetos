const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12365242266",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

// console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]))
// quando tenta acessar uma chave de objeto que 
// não existe, ele da undefined
console.log(cliente["conta"]);