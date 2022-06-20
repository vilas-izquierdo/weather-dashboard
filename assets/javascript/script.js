const apiKey = "";
const fiveDay = document.querySelector("#five");
const searchInput = document.querySelector("#input");
const search = document.querySelector("#search");

const submit = function (event) {
  event.preventDefault();

  const submit = search.ariaValueMax.trim();

  if (submit) {
    console.log(submit);

    search.value = "";
  } else {
    alert("enter a city!");
  }
};

function 