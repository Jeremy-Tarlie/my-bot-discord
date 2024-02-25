import React from 'react'


const Title_bot = ({name, setName, style, style_bot}) => {

  const nameChange = (event) => {
    if (event.target.value.length < 32) {
      setName(event.target.value)
    }
  }
  

  return (
    <div  className={`${style.d_flex_column} ${style_bot.width_40}`}>
      <label>Le nom du bot : <span className={style.required}>*</span></label>
      <input type="text" onChange={nameChange} value={name}/>
    </div>
  )
}

export default Title_bot