const monthNameEl = document.getElementById("monthName");
const dayNameEl = document.getElementById("dayName");
const dayNumEl = document.getElementById("dayNumber");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString("en", {
  month: "long",
});

dayNameEl.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();