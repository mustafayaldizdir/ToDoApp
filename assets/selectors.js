//Selecting Elements

// let val;

// val = document.getElementById('header');
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// val.style.fontSize= '45px';
// val.style.color= 'purple';
// val.style.fontWeight = 'bold';

// val = document.getElementById('header').innerHTML = '<b>Benim Todo</b>';

// console.log(val);

//document.querySelector()

// var val = document.querySelector('#header').id;

// val = document.querySelector('.card-header');

// console.log(document.querySelector('div'));
// document.querySelector('li').style.color = 'red';
// document.querySelector('li:last-child').style.color = 'blue';
// document.querySelector('li:nth-child(2)').style.color = 'yellow';
// console.log(val);

// document.querySelector('li').className='list-group-item list-group-item-primary';
// document.querySelector('li').classList.add('active')

//Multiple selector

//classname
let val;
// val = document.getElementsByClassName('list-group-item');

// // val = document.getElementsByClassName('list-group-item')[2];

// // val = val[2];

// val[1].style.color = 'blue';
// val[1].style.fontSize = '25px';
// val[2].textContent = 'Merhaba';

// for (let i = 0; i < val.length; i++) {
//     console.log(val[i].style.color = 'red');
    
// }

// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list').getElementsByTagName('a');

//querySelectorAll()

// val = document.querySelectorAll('li');

// val.forEach(function(item,index){
//    item.textContent = `${index} - hello`;
// })

// val = document.querySelectorAll('li:nth-child(even)');
//  val.forEach(function(item){
//     item.style.background = '#ccc';
//  })
// console.log(val);

//Multiple Selector

// val = document.getElementsByClassName('list-group-item');
// val[1].style.color = 'blue';
// val[1].style.fontSize = '25px';
// val[2].textContent = 'new item';

// for(let i=0; i<val.length; i++){
//    console.log(val[i].style.color='orange');
// }

//document.getElementsByTagName()
// val = document.getElementsByClassName('li');
// val = document.getElementById('task-list').getElementsByTagName('a');

// val = document.querySelectorAll('li');

// val.forEach(function(item,index){
// item.textContent = `${index} - hello`;
// })

// val = document.querySelectorAll('li:nth-child(odd)');

// val.forEach(function(item){
//    item.style.background = '#ccc';
// })
// let list = document.querySelector('.list-group');

// val = list;


// val = list.childNodes;

// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

// val = list.children;//text nodelar hesaba katılmaz
// val = list.children[0]
// val = list.children[2].textContent = 'new item'; 
// val = list.children[3].children;

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// val = list.parentNode;
// val = list.parentElement;
// val = list.parentElement.parentElement;

// val = list.children[0].nextSibling;
// val = list.children[0].nextElementSibling;

// val = list.children[0].previousSibling;
// val = list.children[1].previousElementSibling;

// // for (let i = 0; i < list.children.length; i++) {
// //    console.log(list.childNodes[i]);
     
// //   }
// for (let i = 0; i < list.childNodes.length; i++) {
//   if(list.childNodes[i].nodeType === 1)
//      {
//         console.log(list.childNodes[i]);
//      }
//   }

// console.log(val)


