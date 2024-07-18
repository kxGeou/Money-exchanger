let converter = document.querySelector('.converter');
let buttonExchanger = document.querySelector('.exchanger');
let firstCur = document.querySelector('.firstCurrency');
let secondCur = document.querySelector('.secondCurrency');
let result = document.querySelector('.currencyText');
let buttons = document.querySelectorAll('.currency');
let plnAmount = converter.value;
const exchangeRateEuro = 4.29;

const swapEuro = () => {
    if (secondCur.innerHTML !== 'EUR') {
        secondCur.innerHTML = 'EUR';
        resetStyleButton()
        buttons[0].style.background = 'white';
        buttons[0].style.color = 'black';
    } else {        
        result.innerHTML = 'Używasz już tej waluty!'
    }
}

const swapUsd = () => {
    if (secondCur.innerHTML !== 'USD') {
        secondCur.innerHTML = 'USD';
        resetStyleButton()
        buttons[1].style.background = 'white';
        buttons[1].style.color = 'black';
    } else {        
        result.innerHTML = 'Używasz już tej waluty!'
    }
}

const swapGbp = () => {
    if (secondCur.innerHTML !== 'GBP') {
        secondCur.innerHTML = 'GBP';
        resetStyleButton()
        buttons[2].style.background = 'white';
        buttons[2].style.color = 'black';
    } else {        
        result.innerHTML = 'Używasz już tej waluty!'
    }
}

const swapCzk = () => {
    if (secondCur.innerHTML !== 'CZK') {
        secondCur.innerHTML = 'CZK';
        resetStyleButton()
        buttons[3].style.background = 'white';
        buttons[3].style.color = 'black';
    } else {        
        result.innerHTML = 'Używasz już tej waluty!'
    }
}

const exchanger = () => {
    if (secondCur.innerHTML === 'EUR') {
        let eurAmount = plnAmount / exchangeRateEuro;
        eurAmount.toFixed(2)
        console.log(eurAmount)
    }
}


const resetStyleButton = () => {
  buttons.forEach(button => {
    button.style.background = ''
    button.style.color = ''
  })
}


// converter.addEventListener('keyup', () => { console.log(converter.value);});
buttons[0].addEventListener('click', swapEuro);
buttons[1].addEventListener('click', swapUsd);
buttons[2].addEventListener('click', swapGbp);
buttons[3].addEventListener('click', swapCzk);

/* ZAŁOŻENIA
    - Użytkownik po kliknieciu przelicz dostaje komunikat na boxie 2 o tym ile zl to euro,funt itp
    - Po przeliczeniu input automatycznie się czyści 
    - Tekst na środku (wykrywacz walut) zmienia sie po kliknieciu na daną walutę
    - Po kliknieciu na dana walute przycisk zaczyna sie podswietlac
    - Przy przęłączaniu walut input się nie czyści
*/



