const objs = [
    {
        nome: "Jhonata",
        idade: 22,
        esta_trabalhando: false,
        detalhes_profissão: {
            profissão: "Desenvolvedor web",
            empresa: "A procura de uma oportunidade",
        },
        hobbies: ["Carros", "Academia", "Programação", "Animes"],
    },
    {
        nome: "João",
        idade: 25,
        esta_trabalhando: false,
        detalhes_profissão: {
            profissão: null,
            empresa: null,
        },
        hobbies: ["Jogar", "Academia"],
    }
]

// JSON3
// Converter objeto para JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// Converter JSON para objeto
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) =>{
    console.log(pessoa.nome)
})