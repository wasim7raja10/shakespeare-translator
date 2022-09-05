const output = document.getElementById("output");
const input = document.querySelector("textarea");
const form = document.querySelector("form");

const URL = "https://api.funtranslations.com/translate/shakespeare.json";

const getReqUrl = (text) => `${URL}?text=${text}`;

const fetchTranslatedText = () => {
  fetch(getReqUrl(input.value))
    .then((res) => res.json())
    .then((json) => {
      output.innerText = json.contents.translated;
    });
};

const submitHandler = (e) => {
  e.preventDefault();
  if(input.value.trim() === '') input.classList.add('invalid')
  else input.classList.remove('invalid')
  fetchTranslatedText();
};

form.addEventListener("submit", submitHandler);