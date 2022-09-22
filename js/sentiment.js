//export { videoSearch }
console.log('hello world')
let textValue = document.getElementById('text')
const submitBttn = document.getElementById('submit');
submitBttn.addEventListener('click', getSentiment)

let postivePercentage = 0;
let negativePercentage = 0;
let neutralPercentage = 0;



async function getSentiment() {
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
        .then(response => response.json())
        .catch(err => console.error(err));
    const score = fetchedData.score;
    const tone = fetchedData.type;
    console.log(fetchedData)
    getpercentage(fetchedData)
    let imgDiv = document.getElementById('emoji');

    if (fetchedData.type === 'positive') {
        imgDiv.src = '../images/cowboy-hat-face.png'
    }
    else if (fetchedData.type === 'negative') {
        imgDiv.src = '../images/persevering-face.png'
        let videoSearch = 'negative'
    }
    else imgDiv.src = '../images/diagnol-face.png';

    let date = new Date(document.getElementById('dateEntry').value);

    let dateString2 = date.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    let obj = {
        toneVal: tone,
        dataVal: data
    }
    localStorage.setItem(dateString2, JSON.stringify(obj));
    //document.getElementById('exampleModalCenter').modal('show')
    document.getElementById('exampleModalLabel').innerText = dateString2
    document.getElementById('modalBody').innerText = `Your journal is ${Math.floor(postivePercentage)}% positive, ${Math.floor(negativePercentage)}% negative, and ${Math.floor(neutralPercentage)}% neutral`
}

function getpercentage(fetchedData) {
    let posCount = 0;
    let negCount = 0;
    let neutCount = 0;
    let keywords = fetchedData.keywords;
    for (let i = 0; i < keywords.length; i++) {

        let score = keywords[i].score
        if (score > 0.3) {
            posCount++;
        }
        else if (score < - 0.3) {
            negCount++
        }
        else neutCount++
    }
    postivePercentage = posCount / keywords.length * 100;
    negativePercentage = negCount / keywords.length * 100;
    neutralPercentage = neutCount / keywords.length * 100;
}

$(".sidebar ul li").on('click', function(){
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
})
$('.open-btn').on('click', function(){
    $('.sidebar').addClass('active')
})
$('.close-btn').on('click', function(){
    $('.sidebar').removeClass('active')
})