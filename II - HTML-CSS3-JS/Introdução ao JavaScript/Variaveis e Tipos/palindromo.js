//solução1

/*function verificaPalindromo(string){
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("anna"))*/

//solução2

function verificaPalindromo2(string){
    if(!string) return "String inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 - i]){
            return console.log(false);
        }
    }
    return console.log(true);
}


verificaPalindromo2("abba");