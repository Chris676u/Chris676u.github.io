'use strict'

const $ = document.querySelector.bind(document);


function createNewTodo(){
   var d = document.createElement('div'); // create div, d
   $('.items').appendChild( d )
   d.innerHTML = $('.newtodo').value;
   $('.newtodo').value = '';
   // add onclick functionality to d
   d.onclick = function(){
      d.className = 'done';
    };
}
onload=function (){
    this.alert("hello");
}
function hello(){
    alert("hello!");
}