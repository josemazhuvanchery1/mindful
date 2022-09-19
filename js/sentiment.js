console.log('hello world')
let textValue = document.getElementById('text')
const submitBttn = document.getElementById('submit');
submitBttn.addEventListener('click', getSentiment)
 
async function getSentiment(){
const data = textValue.value;
const encodedParams = new URLSearchParams();
encodedParams.append("text", data);

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'c936b82e70msh983293dad2515dap15069ajsncaf8ff6e293c',
		'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
	},
	body: encodedParams
};

let fetchedData = await fetch('https://twinword-sentiment-analysis.p.rapidapi.com/analyze/', options)
	.then(response =>response.json())
	.catch(err => console.error(err));
const score = fetchedData.score;
const tone = fetchedData.type;
console.log(fetchedData)
let imgDiv = document.getElementById('emoji');
if(fetchedData.type === 'positive'){
    imgDiv.src = '../images/happy_face.png'
}
else if(fetchedData.type === 'negative'){
    imgDiv.src = '../images/sad_face.png'
}
else imgDiv.src = '../images/neutral_face.png';


}

let dateBttn = document.getElementById('enterDate')
dateBttn.addEventListener('click', ()=>{
    let date = new Date(document.getElementById( 'dateEntry' ).value);
    //date = new Date (date.toUTCString())
    //let d = new Date( input );
    let dateString2 = date.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
      console.log(dateString2)
    console.log('year', date.getFullYear())
console.log('month', date.getMonth()+1)
console.log('day', date.getDate())

})

