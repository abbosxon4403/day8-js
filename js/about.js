let currency = prompt("rub-son , yoki usd-som ni kiriting ;")
let money = prompt('nothing')

function convert(currency, money) {
    if (currency, money) {
        if (currency == 'rub-som') {
            return (money * 142);
        } else if (currency == 'usd-som') {
            return (money * 11329);
        }
    }
    return;
}

console.log(convert(currency, money));