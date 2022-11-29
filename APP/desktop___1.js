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
        ).innerHTML = `${element.LitrosMinuto}`;
        document.getElementById(
          "temperatura"
        ).innerHTML = `${element.SensorAgua}`;
      })
    );
};
