function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1, 13, 43, 27, 31, 10, 2, 8];

console.log(filtraPares(meuArray));