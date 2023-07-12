
(
    function () {
        let URL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';
        fetch( URL )
        .then(response => response.json())
        .then(data => {
        console.log(data);
        plot(data)
        loadInocar();
      })
    .catch(console.error);
   
    }
  )();
  
  let plot = (data) => {  
  
    const ctx = document.getElementById('myChart');
    const dataset = {
      labels: data.hourly.time, /* ETIQUETA DE DATOS */
      datasets: [{
          label: 'Temperatura semanal', /* ETIQUETA DEL GRÁFICO */
          data: data.hourly.temperature_2m, /* ARREGLO DE DATOS */
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
      }]
  };
  
  let loadInocar = () => { 
    let URL_proxy = 'https://cors-anywhere.herokuapp.com/' // Coloque el URL de acuerdo con la opción de proxy
    let URL = URL_proxy + 'https://www.inocar.mil.ec/mareas/consultan.php';
    fetch(url)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "text/html");
      console.log(xml);
      let contenedorMareas = xml.getElementsByTagName('div')[0];
      let contenedorHTML = document.getElementById('table-container');
      contenedorHTML.innerHTML = contenedorMareas.innerHTML;
    })
    
    .catch(console.error);
  }
  
  
    const config = {
      type: 'line',
      data: dataset,
    };
    const chart = new Chart(ctx, config)
  
  }