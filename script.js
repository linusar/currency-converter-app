const currencyFirstEl = document.getElementById ("Currency-first");

const worthFirstEl = document.getElementById ("worth-first");

const currencySecondEl = document.getElementById ("Currency-second");

const worthSecondEl = document.getElementById ("worth-second");

const exchangeRateEl = document.getElementById ("exchange-rate");

updateRate()

function updateRate(){ 
fetch(`https://v6.exchangerate-api.com/v6/a07f62d979de895d95fca981/latest/${currencyFirstEl.value}`).then(response => response.json())
.then(data => {const rate = data.conversion_rates
    [currencySecondEl.value]; console.log(rate); exchangeRateEl.innerText
    = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;

    worthSecondEl.value = (worthFirstEl.value * rate)
}); 
}

currencyFirstEl.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate) 