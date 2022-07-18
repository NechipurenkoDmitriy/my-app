import React, { useState } from 'react';
import Counter from './counter';

const CounterList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь', price: '200' },
    { id: 1, value: 4, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (id) => {
    const newCounters = [...counters];
    newCounters.forEach((c) => { 
      if (c.id === id) {
        c.value += 1;
      }
    });
     // лучеше тогда, но это вопрос производительности, и в нашем варианте не заметишь разницу 
    const newCounters = counters.map((c) => { 
      if (c.id === id) {
        c.value += 1;
      }
  });
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const newCounters = [...counters]; // тоже самое 
    newCounters.forEach((c) => {
      if (c.id === id) {
        c.value -= 1;
      }
    });
    setCounters(newCounters);
  };

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CounterList;
