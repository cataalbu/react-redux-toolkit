import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const handleIncrement = () => {
    dispatch(actions.increment());
  };
  const handleDecrement = () => {
    dispatch(actions.decrement());
  };
  const handleAddBy = () => {
    dispatch(actions.addBy(value));
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAddBy}>Add by</button>
    </div>
  );
}

export default App;
