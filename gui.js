//Name: Christina Lee
//Date: 12/10/2022
//Name: An Adding Program
//Description: Makes an HTML GUI the user can add 2 numbers together with


//create a text box
//based loosely on example shown here https://sebhastian.com/javascript-textbox/
function makeTxtBox(id)
{
	const numTxtBox = document.createElement("input");
	numTxtBox.type = "text";
	numTxtBox.id = id;
	document.body.appendChild(numTxtBox);
	return numTxtBox;
}

function addText(str)
{
	const newTxt = document.createTextNode(str);
	document.body.appendChild(newTxt);  
}

//creates an empty div
function addDiv(id)
{
   const newDiv = document.createElement("div");
   newDiv.id = id;
   document.body.appendChild(newDiv); 
}

//sets div with id = id to val
function setDiv(id, val)
{
	console.log('set id')
	const div = document.getElementById(id);
	console.log(div)
	//const myVal = document.createTextNode(val);
	//https://stackoverflow.com/questions/61136577/set-attribute-to-a-child-element
	div.innerHTML= val;
}

//functions clickButton and makeButton based loosely on example here https://herewecode.io/blog/create-button-javascript/
function clickButton()
{
  console.log('Clicked button');
  const t1 = document.getElementById('box1');
  const t2 = document.getElementById('box2');
  console.log('t1:');
  console.log(t1);
  let n1 = parseInt(t1.value);
  let n2 = parseInt(t2.value);
  console.log('n1 ' + n1);
  console.log('n2 ' + n2);
  let sum = n1 + n2;
  console.log("Sum: " + sum);
  setDiv('ans','Ans: ' + sum);
}

function makeButton(txt)
{
	const button = document.createElement('button')
	button.innerText = txt
	button.addEventListener('click', clickButton);
	document.body.appendChild(button);
	return button;
}

num1 = makeTxtBox('box1');
addText(' + ');
num2 = makeTxtBox('box2');
addButton = makeButton('Add');
addDiv('ans')




