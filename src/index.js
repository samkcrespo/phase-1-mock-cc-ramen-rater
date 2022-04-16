 /* See all ramen images in the `div` with the id of `ramen-menu`. When the page
  loads, request the data from the server to get all the ramen objects. */
   
  const init = () => {
   fetch('http://localhost:3000/ramens')
   .then(res => res.json())
   .then(data => displayRamens(data))
}
/* Create a new ramen after submitting the `new-ramen` form. The new ramen should
  be added to the`#ramen-menu` div. The new ramen does not need to persist; in
  other words, if you refresh the page, it's okay that the new ramen is no
  longer on the page. */
  
const form = document.querySelector('#new-ramen')
form.addEventListener('submit', (e) => {

e.preventDefault()

const ramenObj = {} 

ramenObj.name = document.getElementById('new-name').value;
ramenObj.restaurant = document.getElementById('new-restaurant').value;
ramenObj.image = document.getElementById('new-image').value;
ramenObj.rating = document.getElementById('new-rating').value;
ramenObj.comment = document.getElementById('new-comment').value;

displayRamen(ramenObj)

})

//display the image for each of the ramen using an `img` tag inside the
  //`#ramen-menu` div.

function displayRamens(ramens) {
   ramens.forEach(ramen => {
      displayRamen(ramen);
   })
}
//Click on an image from the `#ramen-menu` div and see all the info about that
 // ramen displayed inside the `#ramen-detail` div and where it says
 // `insert comment here` and `insert rating here`

function displayRamen(ramen){
const ramenMenu = document.getElementById('ramen-menu');
const image = document.createElement('img');
image.src = ramen.image;


 image.addEventListener('click', () => {
 document.querySelector('.detail-image').src = ramen.image;
 document.querySelector('.name').innerHTML = ramen.name;
 document.querySelector('.restaurant').innerHTML = ramen.restaurant;

 document.querySelector('#rating-display').innerHTML = ramen.rating;
 document.querySelector('#comment-display').innerHTML = ramen.comment;


})
ramenMenu.append(image);
}




document.addEventListener('DOMContentLoaded', init)



//make a counter that counts up
//put a p tag in HTML like <p>Times clicked: <span id = 'clicked'>0</span></p>
//button like <button>Click me</button>
//Then in js add listener to button like 

document.querySelector("button").addEventListener("click", () => { 
const spanned = document.querySelector("#clicked")
const times = parseInt(spanned.innerText)
if(times < 10) {
spanned.innerText = times + 1 }
}
)

document.addEventListener('DOMContentLoaded', init)
