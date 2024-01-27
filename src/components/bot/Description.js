import React from 'react'

const Description = ({description, setDescription, style, style_bot}) => {

  const descriptionChange = (event) => {
    if (event.target.value.length < 400) {
      setDescription(event.target.value)
    } 
  }


  return (
    <div className={`${style.d_flex_column} ${style_bot.comment}`}>
        <label>Description du bot : </label>
        <textarea rows="5" cols="20" onChange={descriptionChange}>{description}</textarea>
    </div>
  )
}

export default Description