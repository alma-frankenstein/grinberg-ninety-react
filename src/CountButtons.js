import React from 'react';

function CountButtons({setCount, counter, step}) {
  const upper = () => {setCount(counter + step);};
  const downer = () => {setCount(counter - step);};

  return (
    <React.Fragment>
        <button onClick={upper}>up {step}</button>
        <button onClick={downer}>down {step}</button>
    </React.Fragment>
  )
}

export default CountButtons;