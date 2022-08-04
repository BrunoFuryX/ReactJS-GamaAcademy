import React from 'react';
import Header from './components/header';
import ListAllPokemon from './components/listAllPokemon';
import './style.scss'
function App() {

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <ListAllPokemon limit={12} search={''} />
      </div>
    </div>
  );
}

export default App;
