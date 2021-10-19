import React from 'react';
import './App.css';
import Header from './components/shared/header/header';
import Footer from './components/shared/footer/footer';
import Home from './pages/Home/Home';
import View from './pages/View/View';
import Add from './pages/Add/Add';
import Edit from './pages/Edit/Edit';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app">
        <Header />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/view/:id" component={View} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
