getinfo = () => {
    fetch('http://localhost:1339/api/invernadero', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => v = response)
    .then(()=>
        v.forEach(element=>{
            console.log(element)
            document.getElementById('headings___h6_ek6').innerHTML=`Temperatura del suelo: ${element.HumedadTierra}`
        })  
    )
}