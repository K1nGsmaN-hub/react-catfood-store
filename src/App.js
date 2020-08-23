import React from 'react';
import Card from "./components/card/card";

import './App.sass';
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
          descr= {(
              <>
                Чего сидишь? Порадуй котэ
                <a> купи.</a>
              </>
          )}
        />

        <Card
            supTitle = "Сказочное заморское яство"
            title = "Нямушка"
            subTitle = "с рыбой"
            portions = "40"
            mouse="2 мыши"
            kg="2"
            color="#d91667"
            descr="Головы щучьи с чесноком да свежайшая сёмгушка."
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
