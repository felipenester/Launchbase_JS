const dev = {
    nome: "Carlos",
    idade: "32",
    tecnologia : [
        {
            linguagem: "C++",
            especialidade: "Desktop"
        },
        {
            linguagem: "Python",
            especialidade: "Data Sciente"
        },
        {
            linguagem: "JavaScript",
            especialidade: "Web/Mobile"
        }
    ]
}

console.log(`O usuário ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.tecnologia[0].linguagem} com especialidade em ${dev.tecnologia[0].especialidade}`)
