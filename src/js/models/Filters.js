import { Controller } from  "../controllers/Api.js";
import { Interface }  from  "./Interface.js";

export class Filters {

  constructor (name, idTable, data) {
    this._name     = name,
    this._idTable  = document.querySelector('#table'),
    this._data     = data

  }

  get name () {
    return this._name;
  }
  set name (newName) {
    this._name = newName;
  }

  get data () {
    return this._data;
  }
  set data (newData) {
    this._data = newData;
  }

  /******************* TENTATIVA DE INSTANCIAR A PARTIR DE FILTERS ***************/
  // static async searchCountry (searchValue) {

  //   const data = await Controller.requestApi();

  //   const {country}  = await data

  //   let oneCountry = [];
    
  //   // console.log(searchValue)
    
  //   if (searchValue === "") {
  //     Interface.templateTable(await data);
      
  //   } else {
      
  //     oneCountry.push(
        
  //       await data.find((elem) => {
          
  //         if (elem === searchValue) {
  //           console.log(data)
  //           // console.log(country)
  
  //           return elem;
  //         }
          
  //       })

  //     );
  
  //     await Interface.templateTable(oneCountry);
  //   }
  // }


  /******************* TENTATIVA 1 ***************/
  // static async searchNameCountry (searchValue, data) {

  //   let countryFound = [];

  //   // FILTRO NOS PAÍSES;
  //   // VERIFICAR SE O PAÍS === SEARCH-VALUE;
  //   // RETURN ARRAY COM ID DO PAÍS FILTRADO;
  //   // const data = await Controller.requestApi();
    
  //   const {country, id} = data;
    
  //   await data.filter((searchValue) => {
      
  //     if (searchValue === '') {
  //       console.log('oi')
  //       Interface.templateTable(data);
        
  //     } else {
        
  //       countryFound.push(
  //         data.find(({country, id}) => {

  //           if (country === searchValue) {

  //             console.log(country)
  //             return country;
  //           }
  //         })
  //       )
  //         Interface.templateTable(countryFound);
  //     }

  //     // console.log(searchValue)
  //   });



  // }
}