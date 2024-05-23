import React from 'react'

const Price = ({price, setPrice}) => {
  return (
    <div>{price.now} € {price.mounth > 0 ? "+ "+price.mounth+"€/mois" : ""}</div>
  )
}

export default Price