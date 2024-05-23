"use client"
import React from 'react'


const Time_estimate = ({delay, setDelay, styles_command, styles}) => {

  return (
    <div className={`${styles_command.delay} ${styles.margin_10}`}>Délai de la commande du bot : {delay/10 <= 0 ? 0 + "jour" : Math.ceil(delay/10) + "jours"} </div>
  )
}

export default Time_estimate