const alunos = [
	{
		nome: 'Eduardo',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Ana',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'João',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Marina',
		nota: 4,
		turma: '2C',
	},
];

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){
        
        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome)
        }
    }

    return aprovados;

}

console.log(alunosAprovados(alunos, 5))