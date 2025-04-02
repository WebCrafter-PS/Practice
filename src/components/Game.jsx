//Build a memory game
//6 images - 12 cards. if 2 consecutive card select then keep Img Open

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
  "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
  "https://images.unsplash.com/photo-1520763185298-1b434c919102",
  "https://images.unsplash.com/photo-1442458017215-285b83f65851",
  "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
  "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
];

//multiply images - concat
//random shuffle - fisher-yates algoritm
//image flipped - gray  - state
//onClick - img show

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    let card = images.concat(images);   
    setCards(card);
  }, []);

  return (
    <div className="cards">
      {cards.map((item, index) => (
        <img src={item} key={index} />
      ))}
    </div>
  );
}
