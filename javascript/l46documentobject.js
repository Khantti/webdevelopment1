let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links; // HTMLCollections
val = document.links[0];
val = document.links[3]; 
val = document.links[3].id; // delete-item4
val = document.links[5].id; // clearall

// val = document.links[3].classList; // undefined

val = document.links[3].className; // delete-item my-item
val = document.links[3].classList; // DOMToken List
val = document.links[3].classList[0]; // delete-item
val = document.links[3].classList[1]; // my-item

val = document.forms; // HTMLCollection
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action; // file:///E:/Data%20Land/wdfbatch9/hello
val = document.forms[0].method; // get

val = document.images;
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className;
val = document.images[0].classList;
val = document.images[0].classList[0];
val = document.images[0].src;
val = document.images[0].alt;

val = document.scripts; // HTMLCollection
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;

// console.log(val);

// => Change Styling

document.getElementById('tasktitle').style.backgroundColor = "green";
document.getElementById('tasktitle').style.color = "#fff";
document.getElementById('tasktitle').style.padding = "5px";

// => Change Content

document.getElementById('tasktitle').textContent = "My List";
document.getElementById('tasktitle').innerText = "My Tasks";
document.getElementById('tasktitle').innerHTML = "<span style='color:yellow;'>My Jobs</span>";

// => Call by Class Name

const lis = document.getElementsByClassName('list-group-item'); // HTMLCollection
console.log(lis);
console.log(lis[2].classList);
// lis[2].style.color="blue";
// lis[2].textContent= "Have to visit";
// lis[2].innerText = "Have to cook";
// lis[2].innerHTML = 'Have to read <a href="#" id="delete-item2" class="delete-item"><i class="fas fa-trash-alt"></i></a>';

// => Call by Tag Name

const litags = document.getElementsByTagName('li'); // HTMLCollection
console.log(litags);
console.log(litags[3]);
// litags[3].style.color = "red";
// litags[3].innerText = "Have to cook";
// litags[3].innerHTML = 'Have to cook <a href="#" id="delete-item2" class="delete-item"><i class="fas fa-trash-alt"></i></a>';

// Query Selector

console.log(document.querySelector('#tasktitle'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h3'));

console.log(document.querySelector('li')); // only first li
console.log(document.querySelector('.list-group-item')); // only first li

// document.querySelector('li').style.color = "blue";
// document.querySelector('ul li').style.color = "violet";
// document.querySelector('ul li:nth-child(odd)').style.backgroundColor = 'silver';
// document.querySelector('ul li:nth-child(even)').style.backgroundColor = "silver";
// document.querySelector('ul li:last-child').style.backgroundColor = "silver";
// document.querySelector('ul li:last-of-type').style.backgroundColor = "silver";
// document.querySelector('ul li:nth-of-type(4)').style.backgroundColor = "silver";
// document.querySelector('ul li:nth-of-type(4)').textContent = "Have to watch";


// => QuerySelectorAll

console.log(document.querySelectorAll('#tasktitle')); // NodeList
console.log(document.querySelectorAll('#tasktitle')[0]);

console.log(document.querySelectorAll('li')); // NodeList
console.log(document.querySelectorAll('.list-group-item')); // NodeList

const itms = document.querySelectorAll('li');
console.log(itms); //NodeList
console.log(itms[1]);

const listitems = document.querySelector('ul').getElementsByClassName('list-group-item'); // HTMLCollection()
console.log(listitems);
console.log(typeof listitems);
// console.log(listitems[1]);

// const arritems = Array.from(listitems);
// console.log(arritems);

// arritems.forEach(function(arritem,idx){
// 	// console.log(arritem);
// 	// arritem.textContent = "Hello";

// 	// arritem.textContent = `${idx} = Hello`;

// 	arritem.textContent = `${++idx} = Hello`;
// });

const listitms = document.querySelectorAll('ul.list-group li.list-group-item'); // NodeList
console.log(listitms);
console.log(typeof listitms)
console.log(listitms[4]);

// listitms.forEach(function(listitm,idx){
// 	console.log(listitm);

// 	// listitm.innerText = "Hello World";
// 	// listitm.innerText = `${++idx} = Hello World`;
// });

const lisodds = document.querySelectorAll('li:nth-child(odd)');
// console.log(lisodds);
const lisevens = document.querySelectorAll('li:nth-child(even)');
// console.log(lisevens);

lisodds.forEach(function(lisodd){
	lisodd.style.backgroundColor = "gray";
});

lisevens.forEach(function(liseven){
	liseven.style.backgroundColor = "silver";
});

// for(let j=1; j<=lisevens.length; j++){
// 	// console.log(j); // 0 1
// 	lisevens[j].style.backgroundColor = 'silver'; 
// }

// Parent to Childern

// const getul = document.querySelector('ul.list-group');
// console.log(getul);

var getli = document.querySelector('ul li');
	getli = document.querySelector('li.list-group-item');
	getli = document.querySelector('li.list-group-item:first-child');
console.log(getli);


let chl;
const getul = document.querySelector('ul.list-group');
console.log(getul);

chl = getul.children; // HTMLCollection
console.log(chl); 
console.log(chl[2]);

// chl[1].textContent = "Have to go";
getul.children[3].innerText = "Have to cook";
chl[4].innerHTML = `Have to read <a href="#" id="delete-item5" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;

// Parent to children to children

chl = getul; // HTMLCollection
chl = getul.children[0]; // HTMLCollection
chl = getul.children[0].children;
		// ul    li        a
chl = getul.children[0].children[0];
chl = getul.children[0].children[0].id;
chl = getul.children[0].children[0].className;
chl = getul.children[0].children[0].classList;
chl = getul.children[0].children[0].classList[0];
chl = getul.children[0].children[0].href;

chl = getul.children[0].children[0].children; //HTMLCollection
		// ul      li         a           i
chl = getul.children[0].children[0].children[0];
console.log(chl);

// Child Element Count
chl = getul.children.length;
chl = getul.childElementCount;
console.log(chl);

chl = getul.children[0].childElementCount; // 1
chl = getul.children[0].children[0].childElementCount;
console.log(chl);

// => children to parent element

const getfirstli = document.querySelector('li.list-group-item:first-child');
// console.log(getfirstli);
					// li 			ul
let getparent = getfirstli.parentElement;
					// li 			ul  		div.cardaction
	getparent = getfirstli.parentElement.parentElement;
					// li 		ul  	div.cardaction	div.card
	getparent = getfirstli.parentElement.parentElement.parentElement;
console.log(getparent);

// => Next Element Sibling

let getsibling = getfirstli;
	getsibling = getfirstli.nextElementSibling;
	getsibling = getfirstli.nextElementSibling.nextElementSibling;
	getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
	getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
	getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
	getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(getsibling);

// => Previous Element Sibling

getsibling = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(getsibling);


// => Create Element

const newli = document.createElement('li');
console.log(newli);

// Add ID
newli.id = "new-item";

// Add Class
newli.className = "list-group-item";
newli.className = "delete-me";
newli.className = "list-group-item delete-me";

newli.classList.add("delete-i");
newli.classList.add("delete-you");
newli.classList.add("delete-we","delete-you","delete-they");

// Add attribute
// setAttribute(qualified name,value)
newli.setAttribute('title','newitem');
newli.setAttribute('abcd','hayhay');

// newli.textContent = "hay";
// newli.innerText = "hi";
// newli.innerHTML = `List Item 6 <a href="#" id="delete-item5" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;


// const newtext = document.createTextNode("Hello World");
// newli.appendChild(newtext);

newli.appendChild(document.createTextNode("Hello Thailand"));

console.log(newli);

const newlink = document.createElement('a');

// Add href
newlink.href = "#";

// Add ID
newlink.id = "delete-item6";

// Add Class
// newlink.className = "delete-item";
newlink.classList.add('delete-item');
console.log(newlink);


const newitalic = document.createElement("i");

// newitalic.className = "fas fa-trash-alt";
newitalic.classList.add("fas","fa-trash-alt");

console.log(newitalic);

newlink.appendChild(newitalic);
// console.log(newlink);

newli.appendChild(newlink);
console.log(newli);

document.querySelector('ul').appendChild(newli);

// => Replace Element
// replace(new,old);

const newtitleh2 = document.createElement('h2');
newtitleh2.id = "tasktitle";

const newcaption = document.createTextNode("All My List");
newtitleh2.appendChild(newcaption);

console.log(newtitleh2);

const oldtitleh4 = document.getElementById('tasktitle');
// console.log(oldtitleh4);

const getcardaction = document.querySelector('.card-action');
getcardaction.replaceChild(newtitleh2,oldtitleh4);

// const newestli = document.createElement('li');
// newestli.textContent = "Hello Thialand";
// const newtxt = document.createTextNode("Hello Myanmar");
// newestli.appendChild(newtxt);
// console.log(newestli);

// => Remove Element (self)

const getlis = document.querySelectorAll('li'); // Nodelist
// console.log(getlis);
// console.log(getlis[0]);

// getlis[0].remove();
// getlis[2].remove();

// console.log(getlis);

// => Remove Child Element 

const getfirstul = document.querySelector('ul');
// console.log(getfirstul);
// getfirstul.remove();

// getfirstul.removeChild(getfirstul.children[0]);
// getfirstul.removeChild(getlis[5]);
// getfirstul.removeChild(getlis[1]);

// => Attribute

const firstli = document.querySelector("li");
// console.log(firstli);

const firstlichild = firstli.children[0];
console.log(firstlichild);
// console.log(firstlichild.id);
console.log(firstlichild.href); // route/#
console.log(firstlichild.getAttribute('href')); // #
console.log(firstlichild.getAttribute('id'));  
console.log(firstlichild.title); // iamtitle
console.log(firstlichild.alt); // undefined
console.log(firstlichild.getAttribute('alt'));


// firstlichild.href = "https://google.com";
firstlichild.setAttribute("href","https://linkedin.com");

var hasatt = firstlichild.hasAttribute('href');
console.log(hasatt); // true

hasatt = firstlichild.hasAttribute('hay');
console.log(hasatt); // false

// => className vs classList

console.log(firstlichild.className); //delete-item
// firstlichild.className = "delete-myself"
// firstlichild.className = "delete-item delete-myself";
// firstlichild.className = "delete-item delete-myself delete-ourselves";
// console.log(firstlichild.className);

// console.log(firstlichild.classList); // DOMTokenList
// console.log(firstlichild.classList[0]); //delete-item
// console.log(firstlichild.classList[1]); //undefined

firstlichild.classList.add('delete-myself');
firstlichild.classList.add('delete-ourselves');
console.log(firstlichild.classList);

// firstlichild.classList.remove('delete-myself');
// firstlichild.classList.remove('delete-ourselves');
// firstlichild.classList.remove('delete-item','delete-ourselves');

// console.log(firstlichild.classList);

// Check Class Value
// console.log(firstlichild.className); 

if(firstlichild.className === "delete-item delete-myself delete-ourselves"){
	console.log("Yes");
}else{
	console.log("No");
}

console.log(firstlichild.classList); // DOMTokenList

if(firstlichild.classList.contains("delete-myselfs")){
	console.log("Yes");
}else{
	console.log("No");
}


// => addEventListener('eventtype',callbackfunction());

const clearbtn = document.querySelector('.clear-tasks');
console.log(clearbtn);

// clearbtn.addEventListener('click',function(e){
	// console.log("hay i am working");
	// console.log(clearbtn);
	// console.log(e);
	// console.log(e.target);
	// console.log(e.target.id);
	// console.log(e.target.className);
	// console.log(e.target.classList);

	// console.log(this); // if u want direct element, just use regular function

// });

// Method 2

clearbtn.addEventListener('click',myclick);

function myclick(e){
	// console.log("Hey i am working");
	// console.log(e);
	// console.log(e.target);
	// console.log(e.target.id);
	// console.log(e.target.className);
	// console.log(e.target.classList[0]);

	// console.log(this);

	// e.target.innerText = "Finished";

	// Coordinate Event - relative to the window
	const clientx = e.clientX;
	const clienty = e.clientY;

	// console.log(clientx,clienty);

	const offsetx = e.offsetX;
	const offsety = e.offsetY;

	// console.log(offsetx,offsety);

	e.preventDefault();
}

// => Pointer Event

const clbtn = document.querySelector('.clear-tasks');

// Single Click
// clbtn.addEventListener('click',mouseeventtype);

// Double Click
// clbtn.addEventListener('dblclick',mouseeventtype);

// mousedown
// clbtn.addEventListener('mousedown',mouseeventtype);

// mouseup
// clbtn.addEventListener('mouseup',mouseeventtype);

const card = document.querySelector('.card');

// mouse enter
// card.addEventListener('mouseenter',mouseeventtype);

// mouse over (action to each childs while mouse over)
// card.addEventListener('mouseover',mouseeventtype);

// mouse leave
// card.addEventListener('mouseleave',mouseeventtype);

// mouse out (action to each child while mouse leave)
// card.addEventListener('mouseout',mouseeventtype);

// mouse move
card.addEventListener('mousemove',mouseeventtype);

const headingh2 = document.querySelector('h2');


function mouseeventtype(e){
	// console.log("i am working");

	// console.log(`Event Type = ${e.type}`);

	// e.preventDefault();

	headingh2.textContent = `MouseX : ${e.clientX} MouseY : ${e.clientY}`;
	headingh2.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;

	// document.body.style.backgroundColor = `rgba(${e.clientX},${e.clientY},${clientX},0.5)`;

	// document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.offsetX},0.5)`;

}

// submit

// const getform = document.querySelector('form');

// getform.addEventListener('submit',inputeventtype);

// function inputeventtype(e){
// 	console.log(`Event Type = ${e.type}`);

// 	e.preventDefault();
// }


// => Input Event (Keyboard Event)

const getinput = document.querySelector('#task');

// keydown
// getinput.addEventListener('keydown',inputeventtype);

// keypress
// getinput.addEventListener('keypress',inputeventtype);

// keyup
// getinput.addEventListener('keyup',inputeventtype);

// input
// getinput.addEventListener('input',inputeventtype);

// focus
// getinput.addEventListener('focus',inputeventtype); // cursor in

// blur
// getinput.addEventListener('blur',inputeventtype); // cursor out

// cut (ctrl + x)
// getinput.addEventListener('cut',inputeventtype);

// paste (ctrl + v)
// getinput.addEventListener('paste',inputeventtype);


function inputeventtype(e){
	// console.log(`Event type = ${e.type}`);

	// console.log(e);
	// console.log(e.target);
	// console.log(this);

	// console.log(e.target.value);
	// console.log(this.value);
	console.log(getinput.value);
}

// => Event Bubbling
// document.querySelector('.card-title').addEventListener('click',function(){
// 	console.log("i am card-title");
// });

// document.querySelector('.card-content').addEventListener('click',function(){
// 	console.log("i am card-content");
// });

// document.querySelector('.card').addEventListener('click',function(){
// 	console.log("i am card");
// });

// => Event Delegation

const getdeleteitem = document.querySelector('.delete-item');
// console.log(getdeleteitem);

// getdeleteitem.addEventListener('click',function(e){
// 	// console.log('i am delete item');

// 	// console.log(e.target); // i tag

// 	e.preventDefault();
// 	// console.log(this); // a tag
// });

document.body.addEventListener('click',eventdeleg);

function eventdeleg(e){
	// console.log("i am working"); 

	// console.log(e.target); // tag 
	// console.log(this); // body

	// console.log(e.target.className);

	// if(e.target.className === "fas fa-trash-alt"){
	// 	console.log("hay i am trash can");
	// }

	// if(e.target.parentElement.className === "delete-item"){
	// 	console.log("hay i ma delete item by a tag");
	// }

	// if(e.target.parentElement.classList.contains('delete-item')){
	// 	console.log("hay i am delete item by a tag");
	// }

	if(e.target.parentElement.classList.contains('delete-item')){
		// console.log("hay i am delete item by a tag ");

		// i
		// e.target.remove();

		// i 		a
		// e.target.parentElement.remove();

		// i 		a 			li
		e.target.parentElement.parentElement.remove();
	}
}


document.querySelector('form').addEventListener('submit',function(e){
	// console.log("hay i am working");

	const getnewtask = document.getElementById('task').value;
	// console.log(getnewtask);

	// localStorage.setItem('mytasks',getnewtask);

	let alltasks;

	if(localStorage.getItem('mytasks') === null){
		// console.log('not value yet');

		alltasks = [];
	}else{
		// console.log('value already exists');

		// alltasks = localStorage.getItem('mytasks');
		// console.log(alltasks);
		// console.log(typeof alltasks);

		alltasks = JSON.parse(localStorage.getItem('mytasks'));
		// console.log(alltasks);
	}

	alltasks.push(getnewtask);

	console.log(alltasks);

	localStorage.setItem('mytasks',JSON.stringify(alltasks));
});

// console.log(localStorage.getItem('mytasks'));
// console.log(typeof localStorage.getItem('mytasks'));

// console.log(JSON localStorage.getItem('mytasks'));
// console.log(typeof JSON.localStorage.getItem('mytasks'));

const getmytasks = JSON.parse(localStorage.getItem('mytasks'));
// console.log(getmytasks);
// console.log(typeof getmytasks);

getmytasks.forEach(function(getmytask){
	// console.log(getmytask);
});