document.getElementById("convertBtn").addEventListener("click", function () {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const conversionType = document.getElementById("conversionType").value;
    const result = document.getElementById("result");
  
    // Skryj výsledek, pokud vstup není validní
    if (isNaN(temperature)) {
      result.textContent = "Zadejte platnou číselnou hodnotu.";
      result.style.color = "red";
      result.style.display = "block";
      return;
    }
  
    // Proveď převod a zobraz výsledek
    let convertedValue;
  
    if (conversionType === "cToF") {
      convertedValue = (temperature * 9/5) + 32; // Celsia na Fahrenheita
      result.textContent = `${temperature} °C = ${convertedValue.toFixed(2)} °F`;
    } else if (conversionType === "fToC") {
      convertedValue = (temperature - 32) * 5/9; // Fahrenheita na Celsia
      result.textContent = `${temperature} °F = ${convertedValue.toFixed(2)} °C`;
    }
  
    result.style.color = "white";
    result.style.display = "block"; // Zobraz výsledek
  });
  