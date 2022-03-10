/* const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12365242266",
    email: "andre@email.com"
}
console.log(cliente);

cliente.fone = "988548855";

console.log(cliente);

cliente.fone = "978548855";
console.log(cliente); */

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem) //undefined


 // ou

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

console.log(objPersonagem) 
