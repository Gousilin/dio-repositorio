function retornarNomeAdmin(map){
    let admins = [];
    for([key, value] of map){
        if(value === "Admin"){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiza', 'Admin');
usuarios.set('Ana', 'Admin');
usuarios.set('Pedro', 'User');
usuarios.set('João', 'Admin');

console.log(retornarNomeAdmin(usuarios));