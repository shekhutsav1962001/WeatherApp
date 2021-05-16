import React from 'react'
import Temperature from './components/Temperature';


function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <Temperature />
  );
}

export default App;
