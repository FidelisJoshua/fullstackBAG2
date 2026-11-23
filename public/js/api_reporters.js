const API_URL = 'http://localhost:4000/api/';

function createReporters(e) {
    e.preventDefault();
    const form = document.getElementById('signUpForm');
    const formData = new formData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(API_URL+'reporters/signup', 
        {method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
    .then(response=>response.json())
    .then(response=>{
        window.alert('Records Created')
    })
    .catch(e=>{
        console.log(e)
    })
}

function updateReporter(id) {
    fetch(API_URL+'reporters'+id, 
        {method:'PUT',
            headers:{'Content-Type': 'application/json'},
            body:{}
        })
    .then(response=>response.json())
    .then(response=>{
        window.alert('Records Created')
    })
    .catch(e=>{
        console.log(e)
    })
}

function deleteReporter(id) {
    fetch(API_URL+'reporters'/+id, 
        {method:'DELETE',
            headers:{'Content-Type': 'application/json'},
            body:{}
        })
    .then(response=>response.json())
    .then(response=>{
        window.alert('Records Created')
    })
    .catch(e=>{
        console.log(e)
    })
}

function getReporters() {
    fetch(API_URL+'reporters')
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
        const tblist = document.getElementById('tblist')
        tblist.innerHTML = ''
        let newlist = ''
        response.forEach((item, idx)=>{
            newlist += `<tr>
            <td>${idx+1}</td>
            <td>${item.name}</td>
            <td>${item.code}</td>
            <td>${item.phone}</td>
            <td>${item.community}</td>
            <td><button class = "btn btn-danger" onClick = "deleteReporter(${item.id})">Delete</button></td>
            </tr>`
        })
    })
    .catch(e=>{
        console.log(e)
    })
}