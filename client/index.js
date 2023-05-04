// My Starter JavaScript Template

// Journal Entry Form

const entryForm = document.querySelector(`#entryForm`);
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
const getEntryText = document.getElementsByClassName(`entry-text-box`);

const heading = document.createElement(`h2`);
heading.className = `heading-results`;
heading.textContent = `Retro Entries`;
entryResultRow.insertAdjacentElement(`beforebegin`, heading);

function addEntryToDom(event) {
  event.preventDefault();
  const d = new Date();
  const month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  const n = month[d.getMonth()];
  const day = d.getDay();
  const year = d.getFullYear();

  // Adding Div
  const entryDiv = document.createElement(`div`);
  entryDiv.className = `single-entry-div`;
  entryResultRow.appendChild(entryDiv);

  // Adding Div Element h3
  const entryHeading = document.createElement(`h3`);
  entryHeading.className = `single-entry-heading`;
  entryHeading.textContent = getEntryTitle[0].value;
  entryDiv.appendChild(entryHeading);

  // Adding Div Element Date

  const entryDate = document.createElement(`p`);
  entryDate.className = `single-entry-date`;
  entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
  entryDiv.appendChild(entryDate);

  // Adding Div Element paragraph for first text area
  const entryParagraph1 = document.createElement(`p`);
  entryParagraph1.className = `single-entry-text`;
  entryParagraph1.textContent = getEntryText[0].value;
  entryDiv.appendChild(entryParagraph1);

  // Adding Div Element paragraph for second text area
  const entryParagraph2 = document.createElement(`p`);
  entryParagraph2.className = `single-entry-text`;
  entryParagraph2.textContent = getEntryText[1].value;
  entryDiv.appendChild(entryParagraph2);
}

entryForm.addEventListener(`submit`, addEntryToDom);
