import React from 'react';

export default function Child({step, setCounter}) {
  const inc = () => { setCounter(x => x + step); };
  const dec = () => { setCounter(x => x + step); };
}