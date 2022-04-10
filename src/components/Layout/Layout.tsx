import React, {MouseEvent, useState} from 'react';
import Card from '../Card/Card';
import styles from './layout.module.scss';
import {shuffle} from "../../functions/shuffle";
import {randomString} from "../../functions/randomString";

interface ICardObject {
  id: string;
  value: number;
  isShown: boolean;
  activated: boolean;
}

const allCards: Array<ICardObject> = [
  { id: randomString(), value: 1, isShown: false, activated: false},
  { id: randomString(), value: 1, isShown: false, activated: false},
  { id: randomString(), value: 2, isShown: false, activated: false},
  { id: randomString(), value: 2, isShown: false, activated: false},
  { id: randomString(), value: 3, isShown: false, activated: false},
  { id: randomString(), value: 3, isShown: false, activated: false},
  { id: randomString(), value: 4, isShown: false, activated: false},
  { id: randomString(), value: 4, isShown: false, activated: false},
  { id: randomString(), value: 5, isShown: false, activated: false},
  { id: randomString(), value: 5, isShown: false, activated: false},
  { id: randomString(), value: 6, isShown: false, activated: false},
  { id: randomString(), value: 6, isShown: false, activated: false},
  { id: randomString(), value: 7, isShown: false, activated: false},
  { id: randomString(), value: 7, isShown: false, activated: false},
  { id: randomString(), value: 8, isShown: false, activated: false},
  { id: randomString(), value: 8, isShown: false, activated: false}
];

const clickedArray: Array<ICardObject> = [];

function Layout() {
  const shuffledCards: Array<ICardObject> = shuffle(allCards);

  const [cards, updateCards] = useState(shuffledCards);

  const checkCards = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    const id: string = target.id;

    const clickedObject = cards.find(function(card: { id: string, value: number, isShown: boolean }) {
      return card.id === id;
    });

    clickedObject!.isShown = true;
    clickedArray.push(clickedObject!);

    if (clickedArray.length === 2) {
      const [firstCard, secondCard] = clickedArray;

      if (firstCard.activated || firstCard.activated) return clickedArray.length = 0;

      if (firstCard.value === secondCard.value && firstCard.id !== secondCard.id) {
        clickedArray.length = 0;
        firstCard.activated = true;
        secondCard.activated = true;
        updateCards([...cards]);
      } else {
        clickedArray.length = 0;
        setTimeout(() => {
          firstCard.isShown = false;
          secondCard.isShown = false;
          updateCards([...cards]);
        }, 500);
      }
    }

    updateCards([...cards]);

    if (cards.every(card => card.activated)) {
      alert('Вы выйграли!');
      window.location.reload();
    }
  }

  return (
    <ul className={styles.list}>
      { cards.map((card) => <Card id={card.id} isShown={card.isShown} value={card.value} key={card.id} click={(e) => checkCards(e)} />) }
    </ul>
  );
}

export default Layout;