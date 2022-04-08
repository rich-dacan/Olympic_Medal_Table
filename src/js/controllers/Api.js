export class Controller {
  constructor (data) {
    this._data = data
  }
  get data () {
    return this._data;
  }
  set data (newData) {
    this._data = newData;
  }

  static async requestApi () {

    const request = await fetch ('https://kenzie-olympics.herokuapp.com/paises')
      .then((response) => response.json());

    return request;
  }
}

