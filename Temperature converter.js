Function convertTemperature() {
   Const temperature = document.getElementById(‘temperature’).value;
   Const unit = document.getElementById(‘unit’).value;
   Let result;
 
   If (unit === ‘Celsius’) {
       Result = (temperature * 9/5) + 32;
       Result = `${temperature}° Celsius is equal to ${result.toFixed(2)}° Fahrenheit`;
   } else {
       Result = (temperature – 32) * 5/9;
       Result = `${temperature}° Fahrenheit is equal to ${result.toFixed(2)}° Celsius`;
   }
 
   Document.getElementById(‘result’).innerText = result;
}
 
