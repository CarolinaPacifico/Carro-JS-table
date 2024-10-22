const alunos = [
    {
        rm: "123456",
        nome: "Eu mesmo",
        curso: "SI",
        sala: "1SIA",
        status: "Matriculado"
    },

    {
        rm: "6554321",
        nome: "Você mesmo",
        curso: "SI",
        sala: "1SIA",
        status: "Matriculado"
    },

    {
        rm: "998877",
        nome: "Ele mesmo",
        curso: "SI",
        sala: "1SIA",
        status: "Trancado"
    },

    {
        rm: "223355",
        nome: "Nós mesmos",
        curso: "SI",
        sala: "1SIA",
        status: "Trancado"
    },
];

console.log(alunos);
console.table(alunos);

console.table(alunos[2]);
console.log(alunos[2].nome);