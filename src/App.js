import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Component Dependencies:

import Header from './components/header/header.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import HomePage from './pages/home-page/home-page.component';
import InstitutionalSection from './components/institutional-section/institutional.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <section>
      <Header />
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={ HomePage } />
      </Switch>
      <InstitutionalSection />
      <Footer />
    </section>
  );
}

export default App;
