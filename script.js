/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const button = document.getElementById('btn')
const output =  document.getElementById('output')
let userCard = ''


button.addEventListener('click',() => {
fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => data.forEach((item) => {
    userCard += `
    <div> ${item.login} </div>
    <img src=${item.avatar_url}alt="Girl in a jacket" width="130" height="150">
    `    
    output.innerHTML = userCard
  }));

})