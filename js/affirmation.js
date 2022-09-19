//getthing elements by id
const box1 = document.getElementById("box1")
const affirmation = document.getElementById("box2")
const img = document.getElementById("box3")


box1.style.backgroundColor = `#88B9A9`
box2.style.backgroundColor = `#31a77e`
// box1.innerHTML = 'wow'
img.src = "photos/deskimage.png"

//getting affirmation site 
fetch("https://dulce-affirmations-api.herokuapp.com/affirmation/index")
      .then((response) => response.json())
      .then((json) => {
        console.log(json[0].phrase)
        affirmation.innerHTML = json[Math.floor(Math.random()*json.length)].phrase
            } 
        )