let nav = 0;
let clicked = null;
const query = name => document.querySelector(`${name}`)
//let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let date2 = new Date();
const day2 = date2.getDate();
const month2 = date2.getMonth() + 1;
const year2 = date2.getFullYear()

// let newDateString = '';

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

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');
    let divImg = document.createElement('img');
    
    if (i > paddingDays) {
      let newDate = new Date(year2, month2 - 1 + nav, i - paddingDays)
      let newDateString = newDate.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
      let toneStored = localStorage.getItem(newDateString)
      let toneParsed = JSON.parse(toneStored)

      if (localStorage.getItem(newDateString)) {
        divImg.setAttribute('id', 'toneEmoji');
        if (toneParsed.toneVal === 'positive') {
          divImg.src = '../images/cowboy-hat-face-min.png'
          console.log(toneParsed.toneVal)
        }
        else if (toneParsed.toneVal === 'negative') {
          divImg.src = '../images/persevering-face-min.png'
          console.log(toneParsed.toneVal)
        }
        else {
          divImg.src = '../images/diagnol-face-min.png';
          console.log(toneParsed.toneVal)
        }
        daySquare.addEventListener('click', () => {
          $('#exampleModalLong').modal("show")
          document.getElementById('exampleModalLongTitle').innerText = newDateString;
          document.getElementById('modalBody').innerText = toneParsed.dataVal
        });
      }
      daySquare.innerText = i - paddingDays;

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }

      //daySquare.addEventListener('click', () => /*console.log(toneParsed.dataVal)*/ $('#exampleModalLong').modal("show"));
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