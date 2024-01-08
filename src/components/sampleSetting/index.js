import React, { useState } from 'react'
import styles from './sample.module.scss'

import Edit from '../../assests/edit.svg'
import Delete from '../../assests/delete.svg'
import Beaker from '../../assests/beaker-01.svg'
import Add from '../../assests/plus-circle.svg'
import SampleModal from '../sampleModal'
import { useForm } from 'react-hook-form'

const SampleSetting = () => {
  const { control, handleSubmit, onSubmit } = useForm({
    // onSubmit : (values) => {
    // console.log('click')
    // console.log(values)
    // }
  });

  const [formData, setFormData] = useState(null);
 
  const handleFormSubmit = (data) => {
    console.log("Form data received in parent:", data);
    setFormData(data);
  };

 
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    console.log('click')
    setIsModalVisible(!isModalVisible);
  };

  const handleFullScreenModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <div>
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
          <p className={styles.clientName}>Olio di oliva</p>
          <span className={styles.clientDescription}>Description of the sample here</span>
         </div>

         </div>


         <div className={styles.quantityDiv}>
          <p className={styles.qunatity}>Qunatity:</p>
          <span>1</span>
         </div>


         <div className={styles.priceDiv}>
          <p>Price:</p>
          <p>€5.605,00 (-24%) = <span style={{fontWeight: '600'}}>€4.259,80</span> </p>
         </div>
        </div>

      
      </div>

      <div className={styles.addSample}>
        <p className={styles.addText}>Add New Sample</p>
        <img onClick={handleModal} src={Add}/>
      </div>

      {/* sample modal */}

     
      {isModalVisible && <SampleModal  control={control} isFullScreen={true} onClose={handleModal} />}
    </div>
  )
}

export default SampleSetting