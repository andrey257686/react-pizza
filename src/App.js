// import logo from './logo.svg';
// import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import React, { useState, useEffect } from 'react';
// import pizzas from './assets/pizzas.json';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://64245a6cd6152a4d480d4cad.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzas(arr);
      });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
