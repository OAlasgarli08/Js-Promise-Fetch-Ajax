"use strict";





let tBody = document.querySelector("tbody");    


function addDatas(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        let str = "";
        json.forEach(data => {
            str += 
            `
            <tr>
            <th scope="row">${data.id}</th>
            <td>${data.title}</td>
            <td>${data.body}</td>
            <td><button type="button" class="btn btn-primary click" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    View Information
                </button>
            </td>
            </tr>
            `
            
        });

        tBody.innerHTML = str;  

        

    })
}


addDatas();


let modalBtn = document.querySelector(".click");
let modalBody = document.querySelector(".modal-body");

modalBtn.addEventListener("click", function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${json.id}`)
        .then(response => response.json())
        .then(json => {
            let str2 = "";
            console.log(json);
            json.forEach(data =>{
                str2 +=
                `
                <p>ID = ${data.id}</p>
                <p>Title = ${data.title}</p>
                <p>Body = ${data.body}</p>
                `
            });

            modalBody.innerHTML = str2;
        })
        
    })
})