import { useCounterContext } from "../store/CounterContext";
function Counter() {
  const { counter, dispatch } = useCounterContext();
  const handleIncrement = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: 'increment' });
  }; 
   const handleIncrement20 = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: 'increment20' });
  };
  const decrement20 = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: 'decrement20' });
  };
  
  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: 'decrement' });
  };
  const Reset = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: 'Reset' });
  };
  return (
    <>
      <div className="ReducerCounter componentBox">
        <h2>Count: {counter}</h2>
        <button onClick={handleIncrement20}>Add(+20)</button>
        <button onClick={decrement20}>sub(-20)</button>
        <button onClick={Reset}>Reset</button>
        


        <button onClick={handleIncrement}>Reducer Increment</button>
        <button onClick={handleDecrement}>Reducer Decrement</button>
      </div>
    </>
  );
}
export default Counter;





















