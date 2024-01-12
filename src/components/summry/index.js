import React from 'react'
import styles from "./summary.module.scss"

import  Beaker from "../../assests/beaker-01.svg"
import  Currency from "../../assests/currency-euro.svg"
import  Delievery from "../../assests/truck-01.svg"
import  Percent from "../../assests/percent-03.svg"


const Summary = () => {
  return (
    <div className={styles.summary}>

      <div className={styles.box}>
        <div className={styles.container}> 
          <img src={Beaker}/>
          <p>Sample Total</p>
        </div>
        <span className={styles.price}>€ 200.32</span>
      </div>

      <div className={styles.box}>
      <div className={styles.container}>
      <img src={Delievery}/>
          <p>Delievery</p>
      </div>
      <span className={styles.price}>€ 60.50</span>
      </div>

      <div className={styles.box}>
      <div className={styles.container}>
      <img src={Currency}/>
          <p>Totale(IVA escluse)</p>
      </div>
      <span className={styles.price}>€ 60.50</span>
      </div>

      <div className={styles.box}>
      <div className={styles.container}>
      <img src={Percent}/>
          <p>IVA</p>
      </div>
      <span className={styles.price}>22%</span>
      </div>

      <div className={styles.last}>
      <div className={styles.container}>
      <img src={Currency} />
          <p>Totale(IVA inclusa)</p>
      </div>
      <span className={styles.price}>€ 260.82</span>
      </div>

    </div>
  )
}

export default Summary