'use strict';
const input = document.querySelector('input')
input.focus()

function randomFunc(){
    return Math.trunc(Math.random() * 20 + 1)
}
console.log(randomFunc());

document.querySelector("form").addEventListener('submit' , (e)=>{
    e.preventDefault()

    console.log(e);
})
