let btn1=document.querySelector("button");
let con=0;

table=document.querySelector("table");

btn1.addEventListener("click",()=>{
    let name=document.querySelector("#name").value;
    let classs=document.querySelector("#classs").value;
    let age=document.querySelector("#age").value;


    let add=`
        <tr class="row">
            <td>${name}</td>
            <td>${classs}</td>
            <td>${age}</td>
            <th><button onclick="remove()">Remove</button></th>
        </tr>`;

    table.innerHTML+=add;
    con++;
});


function remove(){
    document.getElementsByTagName("tr")[1].remove();

};
