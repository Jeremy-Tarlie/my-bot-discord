import React from 'react'
import prefix from "@/app/list_command.json"


const Prefix = ({styles_command, styles}) => {
    
  return (
    <div className={`${styles_command.prefix} ${styles.margin_10}`}>Préfixe : {prefix.prefix}</div>
  )
}

export default Prefix