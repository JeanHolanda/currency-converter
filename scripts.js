const button = document.querySelector('button')
const currencySelect = document.querySelector('.currency-select')
const currencySelectToConvert = document.querySelector('.currency-select-to-convert')

async function convertValues() {
    const inputValue = document.querySelector('input').value
    const valueToConvert = document.querySelector('.currency-value-to-convert')
    const valueConverted = document.querySelector('.currency-value-converted')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL").then(response => response.json())
    console.log(data)

    const values = {
    realToday: 1,
    dolarToday: data.USDBRL.ask,
    euroToday: data.EURBRL.ask,
    libraToday: data.GBPBRL.ask,
    bitcoinToday: data.BTCBRL.ask
    }

    const origin = currencySelect.value
    const destination = currencySelectToConvert.value

    const originKey = origin + 'Today'
    const destinationKey = destination + 'Today'

    const originQuote = values[originKey]
    const destinationQuote = values[destinationKey]

    const conversionResult = (inputValue * originQuote) / destinationQuote

    if (currencySelect.value == 'real') {
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValue)
    }
    if (currencySelect.value == 'dolar') {
        valueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue)
    }
    if (currencySelect.value == 'euro') {
        valueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue)
    }
    if (currencySelect.value == 'libra') {
        valueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue)
    }
    if (currencySelect.value == 'bitcoin') {
        valueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputValue)
    }


    if (currencySelectToConvert.value == 'dolar') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(conversionResult)
    }
    if (currencySelectToConvert.value == 'real') {
        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(conversionResult)
    }
    if (currencySelectToConvert.value == 'euro') {
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(conversionResult)
    }
    if (currencySelectToConvert.value == 'libra') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(conversionResult)
    }
    if (currencySelectToConvert.value == 'bitcoin') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(conversionResult)
    }

}

function changeCurrency() {
    const currencyNameToConvert = document.querySelector('.currency-name-to-convert')
    const currencyFlagToConvert = document.querySelector('.currency-flag-to-convert')

    if (currencySelect.value == 'real') {
        currencyNameToConvert.innerHTML = 'Real'
        currencyFlagToConvert.src = './assets/real.png'
    }
    if (currencySelect.value == 'dolar') {
        currencyNameToConvert.innerHTML = 'Dólar americano'
        currencyFlagToConvert.src = './assets/dolar.png'
    }
    if (currencySelect.value == 'euro') {
        currencyNameToConvert.innerHTML = 'Euro'
        currencyFlagToConvert.src = './assets/euro.png'
    }
    if (currencySelect.value == 'libra') {
        currencyNameToConvert.innerHTML = 'Libra'
        currencyFlagToConvert.src = './assets/libra.png'
    }
    if (currencySelect.value == 'bitcoin') {
        currencyNameToConvert.innerHTML = 'Bitcoin'
        currencyFlagToConvert.src = './assets/bitcoin.png'
    }

    convertValues()

}

function changeCurrencyToConvert() {
    const currencyNameConverted = document.querySelector('.currency-name-converted')
    const currencyFlagConverted = document.querySelector('.currency-flag-converted')

    if (currencySelectToConvert.value == 'dolar') {
        currencyNameConverted.innerHTML = 'Dólar americano'
        currencyFlagConverted.src = './assets/dolar.png'
    }
    if (currencySelectToConvert.value == 'real') {
        currencyNameConverted.innerHTML = 'Real'
        currencyFlagConverted.src = './assets/real.png'
    }
    if (currencySelectToConvert.value == 'euro') {
        currencyNameConverted.innerHTML = 'Euro'
        currencyFlagConverted.src = './assets/euro.png'
    }
    if (currencySelectToConvert.value == 'libra') {
        currencyNameConverted.innerHTML = 'Libra'
        currencyFlagConverted.src = './assets/libra.png'
    }
    if (currencySelectToConvert.value == 'bitcoin') {
        currencyNameConverted.innerHTML = 'Bitcoin'
        currencyFlagConverted.src = './assets/bitcoin.png'
    }


    convertValues()
}

button.addEventListener('click', convertValues)
currencySelect.addEventListener('change', changeCurrency)
currencySelectToConvert.addEventListener('change', changeCurrencyToConvert)