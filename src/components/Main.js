import React from 'react';
import Card from './Card';
import Header from './Header';
import Data from '../data/Data';

export default function Main() {
  const renderData = Data.map((character) => {
    return (
      <Card
        key={character.id}
        img={character.img}
        name={character.name}
        alterEgo={character.alterEgo}
        actor={character.actor}
        isChrome={character.isChrome}
      />
    );
  });

  return (
    <main className="padded">
      <Header />
      <br />
      <div className="flex flex-gap center">{renderData}</div>
    </main>
  );
}
