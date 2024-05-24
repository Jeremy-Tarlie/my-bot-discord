import React from 'react'

const Discord = ({styles, styles_command, discord, setDiscord}) => {
    const discordChange = (event) => {
        if (event.target.value.length < 32) {
          setDiscord(event.target.value)
        }
      }
      


  return (
    <div className={`${styles.d_flex_column} ${styles_command.contact_child}`}>
        <label className={styles.text_center}>Discord <span className={styles.required}>*</span></label>
        <input type='text' className='text-black' onChange={discordChange} value={discord}/>
    </div>
  )
}

export default Discord