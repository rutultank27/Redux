import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector((state => state.showCounter));

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };
  const incrementCounterHandler = () => {
    dispatch({type: 'increment'});
  };
  const decrementCounterHandler = () => {
    dispatch({type: 'decrement'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementCounterHandler}>Increment</button>
      <button onClick={decrementCounterHandler}>Decrement</button>
    </main>
  );
};

export default Counter;