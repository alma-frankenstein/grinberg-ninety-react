import React, { useState, useEffect } from 'react';
import './styles.css';
import './CountButtons';
import CountButtons from './CountButtons';
import Child from './Child';
import Child2 from './Child2';

function App() {
  console.log('App.js rendering');

  let username = "furgus";
  let knuckles = "knuckle tattoos";

  let todos = ['cry', 'drink coffee', knuckles];

  const [counter, setCount] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [rates, setRates] = React.useState({});
  
  useEffect(() => {
    document.title = `${counter} meow`;
  });

  const reset = React.useCallback(() => { setCounter(0); }, []);

  useEffect(() => {
    fetch('https://api.exchangerate.host/latest?base=' + currency).then(result => result.json()).then(
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

    <h4>button with memoization:</h4>
    <Child step={7} setCounter={setCounter} />
    <div>
      <h2>The effect hook</h2>
      <button onClick={setUSD}>USD</button>
      <div>
        <button onClick={setEUR}>EUR</button>
        <h2>{currency} exchange rates</h2>
        {Object.keys(rates).map((currency, index) => <li key={index}>{currency}: {rates[currency]}</li>)}
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
