import {Controller} from '../controllers/Api.js';

export class Interface {

  static async templateTable (arrayApi) {
    
    const table = document.querySelector('table');

    const tr = document.querySelectorAll("tr");

    if (tr.length > 1) {

      for (let i = 1; i < tr.length; i++) {
        
        tr[i].remove();
      }
    }

    let position = 0;
    
    await arrayApi.forEach(({country, flag_url, id, medal_bronze, medal_gold, medal_silver}) => {
      
      const tr = document.createElement('tr');
     
      position += 1;
      
      tr.innerHTML = `

      <td>${position} °</td>
      <td class="country">
      <img class="flags" src="${flag_url}">
      ${country}
      </td>
      <td>${medal_gold}</td>
      <td>${medal_silver}</td>
      <td>${medal_bronze}</td>
      <td>${medal_bronze + medal_silver + medal_gold}</td>
    
      `
      table.appendChild(tr)
      
    });
  }
}


 