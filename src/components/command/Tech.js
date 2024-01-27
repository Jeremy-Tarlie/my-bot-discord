import React from 'react'
import tech from "@/app/list_command.json"


const Tech = ({styles_command, styles}) => {
  return (
    <div className={`${styles_command.tech} ${styles.margin_10}`}>Technologie utilisée : {tech.tech}</div>
  )
}

export default Tech