var inputTxt = document.querySelector("#input");
var outputTxt = document.querySelector("#output");
var btn = document.querySelector("#btn");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

const configuredURL = (text) => {
  return serverURL + "?text=" + text;
};

const fetchResponse = () => {
  text = inputTxt.value;
  fetch(configuredURL(text))
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error.message);
        Toastify({
          text: data.error.message,
          backgroundColor: "#D63031",
          duration: 4000,
        }).showToast();
      } else {
        var translatedTxt = data.contents.translated;
        outputTxt.innerText = translatedTxt;
      }
    });
};

btn.addEventListener("click", fetchResponse);
