const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false;
let divCollect = document.querySelector('#toy-collection')

function getToys(){
  return fetch('http://localhost:3000/toys')
