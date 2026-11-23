const API_URL = 'http://localhost:4000/api/';

function createIncidents(events) {
    e.preventDefault();
    
    const form = document.getElementById('reportForm');
    const formdata = new FormData(form);
    formdata.append('status', 'New')
    formdata.append('severity', 'High')
    formdata.append('reporter_code', '561283')
    const data = Object.fromEntries(formdata.entries());

    console.log(data);

    fetch(API_URL+'incidents', 
        {method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
    .then(response=>response.json())
    .then(response=>{
        window.alert('Records Created')
    })
    .catch(e=>{
        console.log()
    })
}

function updateIncidents(id) {
    fetch(API_URL+'incidents'+id, 
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

function deleteIncidents(id) {
    fetch(API_URL+'incidents'+id, 
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

function getIncidents(params) {
    fetch(API_URL+'incidents')
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
        const listbox =document.getElementById('IncidentList')
        listbox.innerHTML='';

        response.array.forEach(data=> {
            items.append(<div class="class col-4">
                <a href="incident.html" class="card incident-card h100 text-decoration-none text-reset">
                    <img src="images/kdere-spill.webp" class="card-img-top" alt="Oil on the surface of K-Dere creek">
                    <div class="card-body">
                    <span class="badge text-bg-danger">New</span>
                    <p class="card-type small fw-semibold uppercase mt-2 mb-1">Oil Spill</p>
                    <h3 class="h6 fw-bold mb-1">Crude oil spill at K-Dere creek</h3>
                    <p class="small text-muted mb-0">K-Dere, Gokana. 31st August 2026.</p>
                    </div>
                </a>
            </div>

    })
    .catch(e=>{
        console.log(e)
    })
}