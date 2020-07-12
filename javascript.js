var col1 = document.getElementById('color1');
var col2 = document.getElementById('color2');
var body = document.getElementById('body');
var css = document.getElementById('css');
conts getColor = () => {
body.style.background = "linear-gradient(to right, "+col1.value+", "+col2.value+")";
css.textContent = body.style.background+";";
}

getColor();
col1.addEventListener("input", getColor);
col2.addEventListener("input", getColor);


// function moveCommand(direction){
// 	var whathappens;
// 	switch(direction){
// 		case "forward": 
// 		whathappens = "you are going away";
// 		break;
// 		case "back":
// 		whathappens = "Welcome Home";
// 		break;
// 		case "right": 
// 		whathappens = "River infront";
// 		break;
// 		case "left":
// 		whathappens = "Beware of Trolls";
// 		break;
// 		default:
// 		whathappens="Please enter a correct direction";
// 	}
// 	return whathappens;
// }




// function first(){
// 	var greet ="Hi";
// 	function second(){
// 		alert(greet);
// 	}
// 	return second;
// };
// var newfunc = first();
// newfunc();

// const first = () => {
// 	const greet = "Hi";
// 	const second = () =>{
// 		alert(greet);
// 	}
// 	return second;
// }

// const newfunc = first();
// newfunc();






// //===============Advanced Array =============================\\

// const array = [3,5,7,11,13];

// //======Map=====\\

// const mapArray = array.map((num)=>num*2);
// console.log('map', mapArray);

// //======Filter=======\\

// const filterArray = array.filter((num) => num > 5);
// console.log('Filter', filterArray);

// //=========Reduce========\\

// const reduceArray = array.reduce((accumulator,num)=>accumulator+num,0);
// console.log('Reduce', reduceArray);



// //===============================Advanced loops=====================================\\

// const basket = ['apple', 'banana', 'palm', 'peach'];

// for (item of basket){  //is used for array
// 	console.log(item)
// }


// const grosery = {
// 	apple : 5,
// 	banana : 12,
// 	palm: 15,
// 	peach: 20
// }

// for (item in grosery){ // is used for objects
// 	console.log(item)
// }