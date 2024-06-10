Function calculateInterest() {
   Const principal = parseFloat(document.getElementById(‘principal’).value);
   Const rate = parseFloat(document.getElementById(‘rate’).value) / 100;
   Const timesCompounded = parseInt(document.getElementById(‘timesCompounded’).value);
   Const years = parseInt(document.getElementById(‘years’).value);
 
   If (isNaN(principal) || isNaN(rate) || isNaN(timesCompounded) || isNaN(years)) {
       Document.getElementById(‘result’).innerText = “Please enter valid numbers.”;
       Return;
   }
 
   Const amount = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
   Const interest = amount – principal;
 
   Document.getElementById(‘result’).innerText = `Future Value: $${amount.toFixed(2)} \nTotal Interest Earned: $${interest.toFixed(2)}`;
