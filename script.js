let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = list.length // conta quantos items tem (3)
let active = 0

next.onclick = () => {
    let activeOld = document.querySelector('.ativo')
    activeOld.classList.remove('ativo')

    active = active >= count -1 ? 0 : active + 1 //IF de forma mais prática, serviu para mostrar as três telas de forma correta.
    list[active].classList.add('ativo')
}

prev.onclick = () => {
    let activeOld = document.querySelector('.ativo')
    activeOld.classList.remove('ativo')

    active = active <= 0 ? count -1 : active - 1
     list[active].classList.add('ativo')
}
