function comparaNumeros(a ,b) {
    const primeiraFrase = criaPrimeiraFrase(a, b);
    const segundaFrase = criaSegundaFrase(a, b);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(a, b){
    var Iguais = '';

    if(a != b) {
        Iguais = 'Não';
    }

    return `Os números ${a} e ${b} ${Iguais} são iguais.`
}

function criaSegundaFrase(a, b){
    const soma = a + b;

    var teste10 = 'menor';
    var teste20 = 'maior';

    const maiorQue10 = soma > 10;
    const menorQue20 = soma < 20;

    if(maiorQue10) {
        teste10 = 'maior';
    }

    if(menorQue20) {
        teste20 = 'menor';
    }

    return `Sua soma é ${soma}, que é ${teste10} que 10 e ${teste20} que 20.`
}

console.log(comparaNumeros(15, 15))