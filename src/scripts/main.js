'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const amountOfDays = new Date(year, month, 0).getDate();
  const startDay = new Date(`${year}-${month}-01`).getDay() - 1;

  const table = document.createElement('table');

  table.append(createHeader());
  table.append(createBody(amountOfDays, startDay));

  element.append(table);
}

const createHeader = () => {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const thead = document.createElement('thead');

  days.forEach(day => {
    const th = document.createElement('th');

    th.textContent = day;
    thead.append(th);
  });

  return thead;
};

const createBody = (day, start) => {
  const tbody = document.createElement('tbody');
  let canPopulate = false;
  let counter = start;
  const weeks = Math.ceil((day + start) / 7);

  for (let i = 0; i < weeks; i++) {
    const row = document.createElement('tr');

    tbody.append(row);

    for (let j = 0; j < 7; j++) {
      const td = document.createElement('td');

      if (j === counter) {
        canPopulate = true;
      }

      if (canPopulate) {
        td.innerText = counter - start + 1;
        counter++;
      }

      if (counter - start === day) {
        canPopulate = false;
      }
      row.append(td);
    }
  }

  return tbody;
};

calendarTable(2020, 1, calendar);
