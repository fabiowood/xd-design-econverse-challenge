import React from 'react';
import './App.css';

// Component Dependencies:

import Header from './components/header/header.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import HomePage from './pages/home-page/home-page.component';

function App() {
  return (
    <section className="App">
      <Header/>
      <NavigationBar />
      <HomePage />
    </section>
  );
}

export default App;
