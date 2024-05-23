import React from 'react'
import styles_nextStep from '@/src/assets/css/nextStep.module.css'
import Link from 'next/link'

const NextStep = ({numberStep, setNumberStep}) => {
  const next = () =>{
    setNumberStep(numberStep+1)
  }

  return (
      <Link href="" onClick={next}>

        <div className={styles_nextStep.nextStep}>
          <div className={styles_nextStep.next}>
              Étape suivante
          </div>
          <div className={styles_nextStep.step}></div>
          <div className={styles_nextStep.arrow}></div>
        </div>
      </Link>

  )
}

export default NextStep