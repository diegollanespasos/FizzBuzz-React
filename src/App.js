import { useEffect, useState } from 'react';
import './App.css';
import FizzBuzz from './components/FizzBuzz/FizzBuzz';

function App() {
  let [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => (count > 99) ? 1 : count+=1);
    }, 1000);

    return () => clearInterval(interval);
  },[])

  return (
    <div className="App">
      <FizzBuzz count={count}/>
    </div>
  );
}

export default App;