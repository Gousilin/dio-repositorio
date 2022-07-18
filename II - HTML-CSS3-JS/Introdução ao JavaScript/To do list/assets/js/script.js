 const item = document.querySelector('input')
 const adicionarItem = document.querySelector('button')
 const lista = document.querySelector('ul')

 var itensBancoDados = []

 adicionarItem.onclick = () => {
    if(adicionarItem.value != ''){
        setItemDB()
    }
 }

 function setItemDB() {
    itensBancoDados.push({'item': item.value, 'status': ''})
    atualizaBancoDados
 }

 function atualizaBancoDados(){
    localStorage.setItem('todolist', JSON.stringify(itensBancoDados))
    carregaItens()
 }

 function carregaItens(){
    lista.innerHTML = "";
    itensBancoDados = JSON.parse(localStorage.getItem('todolist')) ?? []
    itensBancoDados.forEach((item, i) => {
        inserirItemTela(item.item, item.status, i)
    })
 }

 function inserirItemTela(text, status, i){
    const li = document.createElement('li')

    li.innerHTML = `
        <div class="divLi">
            <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i});" />
            <span data-si=${i}>${text}</span>
        </div>
    `

    lista.appendChild(li)

    if (status){
        document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
    }
 }