menu = document.getElementsByClassName('menu')[0]
function abrirmenu(event){
    event.preventDefault()
    menu.classList.remove('fechado')
    menu.classList.add('aberto')
}
fm = document.getElementById('fm')
function fecharmenu(){
    menu.classList.add('fechado')
    menu.classList.remove('aberto')
}
