//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getHoliday);

function getHoliday() {
  let choice = document.querySelector('#country').value;
  let year = document.querySelector('#year').value;
  let holidayType = document.querySelector('#holidayType').value;
  const url = `https://calendarific.com/api/v2/holidays?&api_key=smVEhfOWxrVJDqAo8wQoJ33zCANrLoMX&country=${choice}&year=${year}&type=${holidayType}`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      let dataArr = data.response.holidays;
      for (let holiday of dataArr) {
        let newLI = document.createElement('li');
        let textNode = document.createTextNode(
          `${holiday.name} - ${holiday.date.datetime.month}/${holiday.date.datetime.day}`
        );
        newLI.appendChild(textNode);
        document.querySelector('#holidayList').appendChild(newLI);
      }
      clearInputs();
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function clearUl() {
  document.getElementById('holidayList').innerHTML = '';
}
document.getElementById('holidayType').addEventListener('change', function () {
  clearUl();
});

function clearInputs() {
  let countryInput = document.querySelector('#country');
  let yearInput = document.querySelector('#year');
  countryInput.value = '';
  yearInput.value = '';
}

// document.querySelector('#testbutton').addEventListener('click', function () {
//   let testText = document.querySelector('#testText').value;
//   document.querySelector('#tester').innerText = testText;
//   let input = document.querySelector('#testText');
//   input.value = '';
// });
