import React from 'react';
import Card from "./components/card/card";

import './App.css';
import './static/Exo.css'
import shadow from './assets/Shadow.png'

function App() {
  return (
    <div className="App">
      <div className="bg-image">
        <img className="bg-image__shadow" src={shadow} alt="shadow"/>
      </div>
      <h1 className="App__title">Ты сегодня покормил кота?</h1>

      <div className="cards">
        <Card
          supTitle = "Сказочное заморское яство"
          title = "Нямушка"
          subTitle = "с фуа-гра"
          portions = "10"
          mouse=""
          kg="0,5"
          color="#1698d9"
        />

        <Card
            supTitle = "Сказочное заморское яство"
            title = "Нямушка"
            subTitle = "с рыбой"
            portions = "40"
            mouse="2 мыши"
            kg="2"
            color="#d91667"
        />

        <Card
            inActive={true}
            supTitle = "Сказочное заморское яство"
            title = "Нямушка"
            subTitle = "с курой"
            portions = "100"
            mouse="5 мышей"
            kg="5"
            color="#b3b3b3"
        />

      </div>

    </div>
  );
}

export default App;
