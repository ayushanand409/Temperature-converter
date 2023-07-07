const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const convertButton = document.getElementById('convert-btn');
const convertedTemperature = document.getElementById('converted-temperature');
const errorMessage = document.getElementById('error-message');

convertButton.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  // Check if the temperature input is a number
  if (isNaN(temperature)) {
    errorMessage.textContent = 'Please enter a valid temperature';
    convertedTemperature.textContent = '';
    return;
  }

  // Convert temperature to Kelvin if fromUnit is not Kelvin
  let kelvinTemperature;
  switch (fromUnit) {
    case 'celsius':
      kelvinTemperature = temperature + 273.15;
      break;
    case 'fahrenheit':
      kelvinTemperature = (temperature + 459.67) * (5 / 9);
      break;
    default:
      kelvinTemperature = temperature;
  }

  // Convert Kelvin temperature to the desired unit
  let convertedValue;
  switch (toUnit) {
    case 'celsius':
      convertedValue = kelvinTemperature - 273.15;
      break;
    case 'fahrenheit':
      convertedValue = kelvinTemperature * (9 / 5) - 459.67;
      break;
    default:
      convertedValue = kelvinTemperature;
  }

  // Display the converted temperature
  errorMessage.textContent = '';
  convertedTemperature.textContent = convertedValue.toFixed(2) + ' ' + toUnit.toUpperCase();
});
