// const taskList = document.querySelector('#task-list');

//removing element
//taskList.remove();
//taskList.childNodes[7].remove();
//taskList.children[3].remove();

//**Replacing Elements */
// const cardHeader = document.querySelector('.card-header');

//create element

// const h2 = document.createElement('h2');

// h2.setAttribute('class','card-header');

// h2.appendChild(document.createTextNode('My List'));
// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);

//** classes */

// let vall;

// var link  = taskList.children[0].children[0];

// val = link.className;
// val = link.classList[0];

// link.classList.add('new');
// link.classList.remove('new');

//Attribnutes

// vall = link.getAttribute('data-id');
// vall = link.getAttribute('href');
// vall = link.setAttribute('href','href://musti.dev')

// vall = link.getAttribute('href');
// vall = link.hasAttribute('href');
// console.log(vall);

//Event Listeners

// const btn = document.querySelector('#btnDeleteAll');
// const btn2 = document.querySelector('#btnAddNewTask');

// btn.addEventListener('click',function(){
//     console.log('btn clicked');
// })

// btn.addEventListener('click',btnClick);
// btn2.addEventListener('click',btnClick);

// btn.addEventListener('click',function(e){

//     let val;
//     val = e;

//     val = e.target;//hangi butona tıkladığımı getirir.
//     val = e.target.id//tıklanan butonun id sini alır
//     val = e.target.classList
//     val = e.type;
//     console.log(val)
// e.preventDefault();

// })

// function btnClick(){
//     console.log('btn clicked');
// }