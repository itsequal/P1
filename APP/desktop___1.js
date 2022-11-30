getinfo = () => {
  fetch("https://greenhouse7c.azurewebsites.net/api/invernadero", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => (v = response))
    .then(() =>
      v.forEach((element) => {
        console.log(element);
        document.getElementById(
          "humedad"
        ).innerHTML = `${element.HumedadTierra}`;
        document.getElementById("luz").innerHTML = `${element.FotoSensor}`;
        document.getElementById(
          "litros_agua"
        ).innerHTML = `${element.LitrosMinutos}`;
        document.getElementById(
          "temperatura"
        ).innerHTML = `${element.SensorAgua}`;
      })
    );
};

//Loads data on load of page
window.onload = getinfo();

//Loads data every 10 seconds
setInterval(getinfo, 10000);

