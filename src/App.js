import React from 'react';
import CardList from './components/CardList';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardList />
    </div>
  );
}

export default App;
