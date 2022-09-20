let nav = 0;
let clicked = null;
const query = name => document.querySelector(`${name}`)
//let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let date2 = new Date();
const day2 = date2.getDate();
const month2 = date2.getMonth()+1;
const year2 = date2.getFullYear()

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';
   
  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');
    let divImg = document.createElement('img');
    if (i > paddingDays) {
      let newDate = new Date(year2, month2-1+nav, i-paddingDays)
      let newDateString = newDate.toLocaleDateString('en-us', {
        //weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    // console.log(newDateString);
    let toneStored = localStorage.getItem(newDateString)
    console.log(toneStored)

    if(localStorage.getItem(newDateString)){
      //debugger
      // let toneString = JSON.stringify(toneStored);
      // let toneParsed = JSON.parse(toneString)
      if(toneStored === 'positive'){
        divImg.src = '../images/happy_face.png'
        //debugger
        //console.log(toneParsed)
      }
      else if(toneStored === 'negative'){
        divImg.src = '../images/sad_face.png'
        //daySquare.appendChild(divImg)
       
       //console.log(toneParsed)
      }
      else{
        divImg.src ='../images/neutral_face.png';
       //console.log(toneParsed)
      }

    }
      daySquare.innerText = i - paddingDays;

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }

      daySquare.addEventListener('click', () => console.log(toneStored.split(',')[1]));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);    
    daySquare.appendChild(divImg)
  }
}


function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });
}

initButtons();
load();