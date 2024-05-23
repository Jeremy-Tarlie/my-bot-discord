import React from 'react'
import styles_previousStep from '@/src/assets/css/previousStep.module.css'
import Link from 'next/link'

const PreviousStep = ({numberStep, setNumberStep}) => {
  const previous = () =>{
    setNumberStep(numberStep-1)
  }

  return (
      <Link href="" onClick={previous}>

        <div className={styles_previousStep.previousStep}>
          <div className={styles_previousStep.previous}>
              Étape précédente
          </div>
          <div className={styles_previousStep.step}></div>
          <div className={styles_previousStep.arrow}></div>
        </div>
      </Link>

  )
}

export default PreviousStep