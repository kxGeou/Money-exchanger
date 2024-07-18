let converter = document.querySelector(".converter");
let buttonExchanger = document.querySelector(".exchanger");
let firstCur = document.querySelector(".firstCurrency");
let secondCur = document.querySelector(".secondCurrency");
let result = document.querySelector(".currencyText");
let buttons = document.querySelectorAll(".currency");
const exchangeRateEuro = 4.29;
const exchangeRateUSD = 3.94;
const exchangeRateGBP = 5.10;
const exchangeRateCZK = 0.17;

const swapEuro = () => {
  if (secondCur.innerHTML !== "EUR") {
    secondCur.innerHTML = "EUR";
    result.innerHTML = '';
    resetStyleButton();
    buttons[0].style.background = "white";
    buttons[0].style.color = "black";
  } else {
    result.innerHTML = "Używasz już tej waluty";
  }
};

const swapUsd = () => {
  if (secondCur.innerHTML !== "USD") {
    secondCur.innerHTML = "USD";
    result.innerHTML = '';
    resetStyleButton();
    buttons[1].style.background = "white";
    buttons[1].style.color = "black";
  } else {
    result.innerHTML = "Używasz już tej waluty";
  }
};

const swapGbp = () => {
  if (secondCur.innerHTML !== "GBP") {
    secondCur.innerHTML = "GBP";
    result.innerHTML = '';
    resetStyleButton();
    buttons[2].style.background = "white";
    buttons[2].style.color = "black";
  } else {
    result.innerHTML = "Używasz już tej waluty";
  }
};

const swapCzk = () => {
  if (secondCur.innerHTML !== "CZK") {
    secondCur.innerHTML = "CZK";
    result.innerHTML = '';
    resetStyleButton();
    buttons[3].style.background = "white";
    buttons[3].style.color = "black";
  } else {
    result.innerHTML = "Używasz już tej waluty";
  }
};

const exchanger = () => {
  if (converter.value === "") {
    result.innerHTML = "Musisz wpisać ilość zł!";
    converter.classList.add("noDataInput");

  } else if (converter.value === '0') {
    result.innerHTML = "Liczba musi być różna od zera!";

  } else if (secondCur.innerHTML === "???") {
    converter.classList.remove("noDataInput");
    result.innerHTML = "Musisz wybrać walutę do przeliczenia!";
    buttons.forEach((button) => {
      button.classList.add("noDataInput");
    });

  } else {
    converter.classList.remove("noDataInput");
    buttons.forEach((button) => {
      button.classList.remove("noDataInput");
    });

    if (secondCur.innerHTML === "EUR") {
      let eurAmount = (converter.value / exchangeRateEuro).toFixed(2);
      result.innerHTML = `${converter.value} ZŁ to ${eurAmount} €`;
    } else if (secondCur.innerHTML === "USD") {
        let usdAmount = (converter.value / exchangeRateUSD).toFixed(2);
        result.innerHTML = `${converter.value} ZŁ to ${usdAmount} $ `;
    } else if (secondCur.innerHTML === "GBP") {
        let gbpAmount = (converter.value / exchangeRateGBP).toFixed(2);
        result.innerHTML = `${converter.value} ZŁ to ${gbpAmount} £`;
    } else if (secondCur.innerHTML === 'CZK') {
        let czkAmount = (converter.value / exchangeRateCZK).toFixed(2);
        result.innerHTML = `${converter.value} ZŁ to ${czkAmount} Kč`;
    }
  }
};

const resetStyleButton = () => {
  buttons.forEach((button) => {
    button.style.background = "";
    button.style.color = "";
  });
};

// converter.addEventListener('keyup', () => { console.log(converter.value);});
buttons[0].addEventListener("click", swapEuro);
buttons[1].addEventListener("click", swapUsd);
buttons[2].addEventListener("click", swapGbp);
buttons[3].addEventListener("click", swapCzk);
buttonExchanger.addEventListener("click", exchanger);

