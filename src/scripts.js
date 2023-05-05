import axios from 'axios'
import { createElement } from 'react';

let listaPizzas = null
export class scripts {
    static traerPizzas() {
        axios.get('http://localhost:3001/pizza')
            .then(function (response) {
                console.log(response);
                listaPizzas = response.data;
                let ul = document.getElementById("lista");
                ul.innerHTML = "";
                listaPizzas.forEach(element => {
                    let li = document.createElement("li");
                    li.innerHTML = element.Nombre;
                    ul.appendChild(li);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    static buscarPizzas() {
        //mapPizzas = listaPizzas.filter(i => i.nombre.contains)
    }
}