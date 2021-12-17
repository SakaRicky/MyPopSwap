import React from 'react';
import './App.css';


import {
  Header,
  Hero,
  HowItWorks,
  Faq,
  Footer
} from './components'

function App() {


  return (

    <div className="App">
      
      <Header /> 
      <Hero /> 
      <HowItWorks />
      <Faq />
      <Footer />
      
    </div>
  );
}

export default App;
