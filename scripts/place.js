//Agrego la informacion al footer
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
  const data = {
    area: "910,770 km²",
    population: "229,152,217 (2024 est.)",
    capital: "Abuja",
    languages: "English (official)",
    currency: "Nigerian Naira (NGN)",
    timeZone: "WAT (UTC+1)",
    callingCode: "+234",
    internetTLD: ".ng",
    temperature: "27°C",
    conditions: "Partly Cloudy",
    windSpeed: "14 km/h",
  };

  // Función para llenar los datos en el front
  function fillData() {
    for (let key in data) {
      const element = document.getElementById(key);
      if (element) {
        element.textContent = data[key];
      }
    }
  }

  // Llamado a la funcion para llenar los datos en el front
  fillData();

  // Calcula y muestra el factor de sensación térmica
  const temp = parseInt(data.temperature);
  const speed = parseInt(data.windSpeed);

  if (temp <= 10 && speed > 4.8) {
    const windChill =
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16);
    document.getElementById("windChill").textContent =
      windChill.toFixed(1) + "°C";
  } else {
    document.getElementById("windChill").textContent = "N/A";
  }
});
