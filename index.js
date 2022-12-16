fetch("http//localhost:3000/films")
.then(x => x.text())
.then(y => myDisplay(y));

async function getText(file) {
  let x = await fetch("http//localhost:3000/films");
  let y = await x.text();
  myDisplay(y);
}

async function getText(file) {
  let myObject = await fetch("http//localhost:3000/films");
  let myText = await myObject.text();
  myDisplay(myText);
}

let html =document.getElementById("myP").innerHTML
document.getElementById("demo").innerHTML ="I have changed"
let Html =document.getElementById("myList").innerHTML;
Element.innerHTML =""

let text = "Hello Movies";
document.getElementById("myP").innerHTML = text;

Element.innerHTML +=
Element.innerHTML;


Element.innerHTML ="MovieList"
Element.href =http//localhost:3000/films

<p 
id="myP">This, element, has ,extra ,spacing ,and, contains ,<span>a ,span ,element</span>

let ,text= document.getElementById("myP") .innerText;
let ,text= document.getElementById("myP").innerHTML;
let ,text= document.getElementById("demo").textContent;

let btn =document.getElementById('btnClick')
let image= document.getElementById('image')

btn.addEventListener('Click',function (){
fetch("http//localhost:3000/films")
.then(res =>res.json())
.then(result =>{
console.log(result)
image.src =result.message
})
.catch(err=>console.log(err))
})

