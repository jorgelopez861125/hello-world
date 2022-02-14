
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [msj, setMsj] = useState ('');
  
    useEffect(() => {
      setMsj('¡Hello World! 😄');
    })

  return (
    <div className='container'>
      <h1 className='mensaje1'>Hello World App</h1>
      <p className='mensaje2'>{msj}</p>
    </div>
  );
}

export default App;
