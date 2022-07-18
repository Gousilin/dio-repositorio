function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Mariana",
    idade: 27,
};

const pessoa2 = {
    nome: "Giovana",
    idade: 27,
};

const animal = {
    nome: "Guto",
    idade: 9,
    raça: "Lhasa apso",
};

console.log(calculaIdade.apply(animal, [3]));