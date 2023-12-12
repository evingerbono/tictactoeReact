import { useState } from 'react';
import './App.css';
import Jatekter from './Komponens/Jatekter.js';
import TModel from './Model/Tmodel.js';

const tmodel=new TModel();

function App() {
  const [lista, setLista] = useState(tmodel.getList());
  function kattintas(index) {
    console.log(index);
    tmodel.setAllapot(index);
    setLista(tmodel.getList());
    console.log(lista);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tictactoe</h1>


      </header>
      <article className='jatekter'>
        <Jatekter lista={lista} kattintas={kattintas} />
      </article>
    </div>
  );
}

export default App;
