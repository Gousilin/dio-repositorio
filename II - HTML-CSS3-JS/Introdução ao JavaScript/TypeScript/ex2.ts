enum Job {
    Atriz,
    Padeiro
}

type Human = {
    nome: string,
    idade: number,
    profissao: Job
}


let pessoa1: Human = {
    nome: "Maria",
    idade: 29,
    profissao: Job.Atriz
};


let pessoa2: Human = {
    nome: "Roberto",
    idade: 19,
    profissao: Job.Padeiro
}


let pessoa3: Human = {
    nome: "Laura",
    idade: 32,
    profissao: Job.Atriz
};

let pessoa4: Human = {
    nome: "Carlos",
    idade: 19,
    profissao: Job.Padeiro
}