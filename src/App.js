import './App.css';
import {scripts} from './scripts'
import bootstrap from 'bootstrap'

function App() {
  return (
    <div>
      <button onClick={scripts.traerPizzas}>Traer pizzas</button>
      <input type="text" id="input" onKeyUp={scripts.buscarPizzas}></input>

      <ul id="lista"></ul>
    </div>
  );
}

export default App;
