import React from 'react';
import styles_card from '@/src/assets/css/card.module.css';

const Card = ({ title, description, number }) => {
  const getCardStyle = () => {
    switch (number) {
      case 1:
        return styles_card.card_one;

      case 2:
        return styles_card.card_two;

      case 3:
        return styles_card.card_three;

      default:
        break;
    }
  };

  const getImgSource = () => {
    switch (number) {
      case 1:
        return '/Bot_dream.png';

      case 2:
        return '/Bot_personnality.png';

      case 3:
        return '/Bot_result.png';

      default:
        break;
    }
  };

  return (
    <div className={`${styles_card.card} ${getCardStyle()}`}>
      <img className={styles_card.card_image} src={getImgSource()} alt={`card ${number} image`} />
      <div className={styles_card.title_card}>
        <h2 className={styles_card.title}>{title}</h2>
        <p className={styles_card.description_card}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
