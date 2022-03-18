import React, { useState } from 'react';
import List from './Components/List/List.jsx';
import data from './data.jsx';
function App() {
  const [first, setfirst] = useState(0)
  return <h2>reminder project setup{data} {List}</h2>;
}

export default App;