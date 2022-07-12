const urlAPi = 'https://jsonplaceholder.typicode.com/users'
fetch(urlAPi)
    .then(res => res.json())
    .then((json) => {
        let content = ""
        for (let i = 0; i < json.length; i++) {
            content += `<tr>
               <td>${json[i].id}</td>
               <td>${json[i].name}</td>
               <td>${json[i].username}</td>
               <td>${json[i].email}</td>
               </tr>`
        }
        document.getElementById('datosJson').innerHTML = content
    })