import React from 'react'

const Email = ({styles, styles_command, mail, setMail}) => {
    const mailChange = (event) => {
        if (event.target.value.length < 50) {
          setMail(event.target.value)
        }
      }
      
  return (
    <div className={`${styles.d_flex_column} ${styles_command.contact_child}`}>
        <label className={styles.text_center}>Email <span className={styles.required}>*</span></label>
        <input type='email' onChange={mailChange} value={mail}/>
    </div>
  )
}

export default Email