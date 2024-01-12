import React from 'react'
import styles from './sampleCard.module.scss'

import Edit from '../../assests/edit.svg'
import Delete from '../../assests/delete.svg'
import Beaker from '../../assests/beaker-01.svg'

const SampleCard = ({sample}) => {
  console.log(sample)
  return (
    <div >
          <div className={styles.sample}>
          <div className={styles.box}>
          <p className={styles.title}>22P00664-01</p>
            <div className={styles.editComponent}>
            <img src={Edit}/>
            <img src={Delete}/>
            </div>
          </div>

          <div className={styles.details }>
            <img className={styles.beakerImg} src={Beaker}/>
          
          <div className={styles.infoDiv}>
            <p className={styles.clientName}>{sample?.sample}</p>
            <span className={styles.clientDescription}>{sample?.description}</span>
          </div>

          </div>


          <div className={styles.quantityDiv}>
            <p className={styles.qunatity}>Qunatity:</p>
            <span>{sample?.quantity}</span>
          </div>


          <div className={styles.priceDiv}>
            <p>Price:</p>
            <p>€ {sample?.original}(-{sample?.discount}) = <span style={{fontWeight: '600'}}>€ {sample?.final}</span> </p>
          </div>
          </div>

        
        </div>

  )
}

export default SampleCard