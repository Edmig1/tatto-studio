menu = document.getElementsByClassName('menu')[0]
botao = document.getElementsByClassName('botao')[0]
function abrirmenu(event){
    event.preventDefault()
    menu.classList.remove('fechado')
    menu.classList.add('aberto')
    botao.style.visibility = 'hidden'
}
fm = document.getElementById('fm')
function fecharmenu(){
    menu.classList.add('fechado')
    menu.classList.remove('aberto')
    botao.style.visibility = 'visible'
}