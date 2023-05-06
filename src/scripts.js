import axios from "axios";
import { createElement } from "react";

let listaPizzas = null;
export class scripts {
  static traerPizzas() {
    axios
      .get("http://localhost:3001/pizza")
      .then(function (response) {
        console.log(response);
        listaPizzas = response.data;
        this.renderizarLista(listaPizzas);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  static buscarPizzas() {
    let inputVal = document.getElementById("input").value;
    console.log(inputVal);
    let mapPizzas = listaPizzas.filter((i) => i.nombre.contains(inputVal));
    this.renderizarLista(mapPizzas);
}
  static renderizarLista(listaPizzas) {
    let ul = document.getElementById("lista");
    ul.innerHTML = "";
    listaPizzas.forEach((element) => {
      let li = document.createElement("li");
      li.innerHTML = element.Nombre;
      ul.appendChild(li);
    });
  }
}
