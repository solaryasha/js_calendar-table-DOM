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
  const tableHeader = document.createElement('thead');

  days.forEach(day => {
    const tableHeadings = document.createElement('th');

    tableHeadings.textContent = day;
    tableHeader.append(tableHeadings);
  });

  return tableHeader;
};

const createBody = (daysInMonth, startOfMonth) => {
  const tableBody = document.createElement('tbody');
  let canPopulate = false;
  let dayCounter = startOfMonth;
  const weeks = Math.ceil((daysInMonth + startOfMonth) / 7);

  for (let i = 0; i < weeks; i++) {
    const row = document.createElement('tr');

    tableBody.append(row);

    for (let j = 0; j < 7; j++) {
      const tableData = document.createElement('td');

      if (j === dayCounter) {
        canPopulate = true;
      }

      if (canPopulate) {
        tableData.innerText = dayCounter - startOfMonth + 1;
        dayCounter++;
      }

      if (dayCounter - startOfMonth === daysInMonth) {
        canPopulate = false;
      }
      row.append(tableData);
    }
  }

  return tableBody;
};

calendarTable(2020, 6, calendar);
