
const input = document.querySelector('input')
input.focus()
let random = Math.trunc(Math.random() * 20 + 1)
let shot = 20
let win = 0
//FUNCS


function mesageFunc(word) {
    document.querySelector('.message').textContent = word
}

function gameover() {
    input. setAttribute('disabled', true)
    document.querySelector('.check').style.display = 'none'
}


//FUNCS END


document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault()
    let num = Number(input.value)

    if (!num) {
        mesageFunc('Raqam kiriting..🔢🔢')
    } else if (num === random ) {
        mesageFunc('Random raqam topildi. 🏆')
        document.body.style.background = 'rgb(88, 165, 10)'
        document.querySelector('.number').textContent = random
        gameover()
        if (win  < shot) {
            win = shot
            document.querySelector('.highscore').textContent = shot
        }
    }else if (num !== random) {
        if (shot > 1) {
        mesageFunc(num > random ? 'Kichikroq Raqam kiriting..🔢🔢' : 'Katta son kiriting 🔢')
        shot--
        document.querySelector('.score').textContent = shot
        }else {
            mesageFunc("SIz mag'lib bo'dingiz 🤦‍♂️ ")
            document.querySelector('.score').textContent = 0
            gameover()
        }
    }
    input.value = ''
})

let a =  document.querySelector('.btn').addEventListener('click' , ()=>{
    random = Math.trunc(Math.random() * 20 + 1)
    shot = 20 
    document.querySelector('.score').textContent = shot

     mesageFunc('Start guessing...')

    input.removeAttribute('disabled', false)
    document.querySelector('.check').style.display = 'inline-block'
    input.focus()

    document.body.style.background = ''

    document.querySelector('.number').textContent = '?'

    
})

document.addEventListener('keydown' , (e)=>{

    if (e.key == ' ') {
        document.querySelector('.btn').click()
    }
})
