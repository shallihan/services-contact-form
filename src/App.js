import React from 'react';
import "./styles/app.scss";
import ellipse from './images/ellipse.svg';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <img src={ellipse} className="svg"/>
      <Contact />
    </div>
  );
}

export default App;
