'use strict'
console.log('h');

const id = document.querySelector('#id');
const pw = document.querySelector('#password');
const loginbtn = document.querySelector('#login-button');

console.log(id, pw, loginbtn);
loginbtn.addEventListener("click",login);
function login(){
    const req = {
        id : id.value,
        pw : pw.value,
    };
    console.log(req);
}