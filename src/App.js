import React, { useState, useEffect } from 'react';
import './styles.css';
import './CountButtons';
import CountButtons from './CountButtons';

function App() {
  let username = "furgus";
  let knuckles = "knuckle tattoos";

  let todos = ['cry', 'drink coffee', knuckles];

  const [counter, setCount] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [rates, setRates] = React.useState({});
  
  useEffect(() => {
    document.title = `${counter} meow`;
  });

  useEffect(() => {
    fetch('https://api.ratesapi.io/api/latest?base=' + currency).then(result => result.json()).then(
      data => {setRates(data.rates);
      });    
  }, [currency]);

  const setUSD = () => setCurrency('USD');
  const setEUR = () => setCurrency('EUR');

  return (
    <React.Fragment>
    <div className="App">
        <p>
          dalia
        </p>
        {username ?
          <p>hello, {username}!</p>
        :
          <p>hello, catFace!</p>
        }

        <ul>
          {todos.map((todo, index) => <li key={index}>{todo} </li>)}
        </ul>
    </div>

    <p>clicked! {counter} times</p>
    <div>
    <CountButtons counter={counter} setCount={setCount} step={1}/>
    </div>
    <CountButtons counter={counter} setCount={setCount} step={3} />

    <div>
      <h2>The effect hook</h2>
      <button onClick={setUSD}>USD</button>
      <div>
        <button onClick={setEUR}>EUR</button>
      </div>
    </div>
    </React.Fragment>

  );
}

export default App;