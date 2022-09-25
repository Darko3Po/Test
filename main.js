/*
alert('Hellooo');
var x = document.getElementById('hello');


x.innerHTML = "Niste ulogovani pokusajte ponovo";

//Novi blok koda


let names = ['Ana','Marija','Dunja','Marko','Ana','David','Ana'];

let obj = {};

for (var i = 0; i < names.length; i++) {
	obj[names[i]] =  (obj[names[i]] +1) || 1;
}


console.log(obj);



var a = "Volvo";
var b = "Audi";

[a,b] = [b,a];



console.log(a,b)



let num = [2,6,4,7,9,1];

let numSorted = num.sort();

let words = ['Bbb','ddd','ccc','aaa'];

let wordsSorted = words.sort( function mojaPravila(a,b) {
	// moja pravila
	let firstWord = a.toLowerCase();
	let secondWord = b.toLowerCase();
	if (firstWord < secondWord) {
		return -1;
	}else if(firstWord > secondWord){
		return 1;
	}else{ return 0;}
} );

console.log(wordsSorted);
*/
 var btn = document.getElementById('btn');
 
 btn.onclick = function() {



var input = prompt('Unesi paran broj');









