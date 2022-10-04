getinfo = () => {
    fetch('http://localhost:1339/api/invernadero', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
}