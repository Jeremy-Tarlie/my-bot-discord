import React from 'react'


const Precision = ({styles_command, styles}) => {
  return (
    <div className={`${styles.margin_10} ${styles_command.precision}`}>
        <p className={styles_command.margin_bot_5}>Vous pouvez choisir jusqu'à 20 commandes sans augmenter le prix.</p>
        <p className={styles_command.margin_bot_40}>Après 20 commandes, le prix augmentera de 1 € toute les 3 commandes.</p>
        <p  className={styles_command.margin_bot_5}>Les commandes personnalisées sont augmentées au prix de 2 €.</p>
        <p>Un temps supplémentaire pourrait être nécessaire lors de la demande d'une commande personnaliser.</p>
    </div>
  )
}

export default Precision