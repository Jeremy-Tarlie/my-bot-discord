import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'


const Delivery = ({styles_command,styles, captcha, setCaptcha}) => {
  return (
    <div className={`${styles.d_flex_column} ${styles.margin_10}`}>
      <ReCAPTCHA sitekey={process.env.PUBLIC_KEY_RECAPTCHA} onChange={setCaptcha} className={styles_command.recaptcha} />
      <button className={styles_command.delivery}>Commander</button>
    </div>
  )
}

export default Delivery