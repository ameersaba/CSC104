Const exchangeRates = {
   USD: 1,
   JPY: 109.57,
   CAD: 1.26,
   NGN: 410.36,
   GBP: 0.71,
   EUR: 0.82
};
 
Function convertCurrency() {
   Const amount = parseFloat(document.getElementById(‘amount’).value);
   Const fromCurrency = document.getElementById(‘fromCurrency’).value;
   Const toCurrency = document.getElementById(‘toCurrency’).value;
   
   If (isNaN(amount) || amount <= 0) {
       Document.getElementById(‘result’).textContent = ‘Please enter a valid amount’;
       Return;
   }
 
   Const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
   Document.getElementById(‘result’).textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
 
