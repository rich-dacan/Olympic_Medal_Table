import { Controller } from    "./controllers/Api.js";
import { Interface }  from    "./models/Interface.js";
import {Filters}      from    "./models/Filters.js"

let countryArray = [];

await Controller.requestApi().then((response) => {

  countryArray = [...response];
  
});


// CAPTURANDO O BOTÃO DE PESQUISA POR NOME;
const btnSearch = document.querySelector('#btn__search');
btnSearch.addEventListener('click', searchCountry);

// CAPTURANDO OS BOTÕES DOS HEADERS DA TABELA;
const btnPosition = document.querySelector('#btn__position');
btnPosition.addEventListener('click', sortTotalMedals);

const btnGold = document.querySelector('#btn__gold');
btnGold.addEventListener('click', sortGold);

const btnSilver = document.querySelector('#btn__silver');
btnSilver.addEventListener('click', sortSilver);

const btnBronze = document.querySelector('#btn__bronze');
btnBronze.addEventListener('click', sortBronze);

// FILTRO POR NOME DOS PAÍSES APENAS COM FIND (POR ENQUANTO);
const search = document.querySelector('#search');
const value = search.value;

function searchCountry () {

  let oneCountry = [];

  const filterCountry =  countryArray.filter((elem) => {

    const {country} = elem;
    const valorTratado = search.value.toLowerCase().trim();
    const countryFormat = country.toLowerCase();
    
    if (countryFormat.includes(valorTratado)) {
      
      oneCountry.push(elem)
  
    }
  })

    Interface.templateTable(oneCountry);
}

// ORDENAÇÃO DE POSIÇÃO POR QUANTIDADE DE MEDALHAS COM MÉTODO SORT();
function sortTotalMedals () {
  
  const sorting = countryArray.sort((a, b) => {

    let totalMedalsA = a.medal_bronze + a.medal_silver + a.medal_gold;
    let totalMedalsB = b.medal_bronze + b.medal_silver + b.medal_gold;
    
    if (totalMedalsB > totalMedalsA) {
      return 1;
    }
    if (totalMedalsB < totalMedalsA) {
      return -1;
    }
    if (totalMedalsA === totalMedalsA) {
      if (a.medal_gold < b.medal_gold) {
        return 1;
      }
      if (a.medal_gold > b.medal_gold) {
        return -1;
      }
      if (a.medal_gold === b.medal_gold) {
        return 0;
      }
    }
    
  });

  Interface.templateTable(sorting);

  return sorting;
}
sortTotalMedals()

function sortGold () {

  const sorting = countryArray.sort((a, b) => {

    if (a.medal_gold < b.medal_gold) {
      return 1;
    }
    if (a.medal_gold > b.medal_gold) {
      return -1;
    }
    if (a.medal_gold === b.medal_gold) {
      return 0;
    }
  });

  Interface.templateTable(sorting);
  return sorting;
}

function sortSilver () {

  const sorting = countryArray.sort((a, b) => {

    if (a.medal_silver < b.medal_silver) {
      return 1;
    }
    if (a.medal_silver > b.medal_silver) {
      return -1;
    }
    if (a.medal_silver === b.medal_silver) {
      return 0;
    }
  });

  Interface.templateTable(sorting);
  return sorting;
}

function sortBronze () {

  const sorting = countryArray.sort((a, b) => {

    if (a.medal_bronze < b.medal_bronze) {
      return 1;
    }
    if (a.medal_bronze > b.medal_bronze) {
      return -1;
    }
    if (a.medal_bronze === b.medal_bronze) {
      return 0;
    }
  });
  
  Interface.templateTable(sorting);
  return sorting;
}