import React, { useEffect, useState } from "react";
import styles from "./sample.module.scss";
import Input from "../inputBox";
import TimerInput from "../inputMask";
import { useForm, Controller, FormProvider, useWatch } from "react-hook-form";
import Select from "react-select";

import Close from "../../assests/x.svg";
import Time from "../../assests/clock.svg";
import Plus from "../../assests/plus-circle2.svg";
import Minus from "../../assests/minus-circle.svg";
import Package from "../../assests/package-x.svg";
import Percentage from "../../assests/percent-03.svg";
import Tag from "../../assests/tag-01.svg";
import ButtonBox from "../button";
import CurrencyInput from "react-currency-input-field";

const SampleModal = ({
  isFullScreen,
  onClose,
  modalData,
  finalitaOption,
  handleChange,
  updateSampleData,
  setSampleData
}) => {

  
  const {
    handleSubmit,
    getValues,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({});


  const [counter, setCounter] = useState(0);
  const originalValue = useWatch({ control, name: 'original' });
  const discountValue = useWatch({ control, name: 'discount' });
 
  const [finalPrice, setFinalPrice] = useState(0);
  const [sampleModalData, setSampleModalData] = useState(null);


  useEffect(() => {
    const originalPrice = parseFloat(originalValue || 0);
    const discount = parseFloat(discountValue || 0);
    const calculatedFinalPrice = parseFloat((originalPrice * counter) * (1 - discount / 100));
   console.log(calculatedFinalPrice)
    setFinalPrice(calculatedFinalPrice);
    setValue("final" ,calculatedFinalPrice)

  }, [counter, originalValue, discountValue]);

console.log(finalPrice)


  const handleFormSubmit = async (data) => {
    try {
      const quantity = counter;
      const final = finalPrice

      const formData = {
        ...data,
        quantity,
        final
      };
      console.log(formData);
      // setSampleData(formData)
      modalData(formData);
       updateSampleData(formData)
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const modalClassName = isFullScreen
    ? `${styles.modal} ${styles.fullScreen}`
    : styles.modal;

  return (
    <div className={styles.modalBackdrop}>
      <div onClick={onClose} className={styles.hexagon}>
        <img src={Close} />
      </div>

      <div className={modalClassName}>
        <form>
          <div className={styles.box}>
            <h4 className={styles.text}>Add a Sample</h4>
            <ButtonBox
              // type="submit"
              label="Add Sample"
              style={{
                borderRadius: "50px",
                fontSize: "14px",
                height: "3rem",
                fontWeight: 600,
              }}
              primary
              click={handleSubmit(handleFormSubmit)}
            />
          </div>

          <div className={styles.firstBox}>
            <div className={styles.input}>
              <Input
                label="NAME OF SAMPLE"
                type="text"
                name={"sample"}
                control={control}
                required={true}
                placeholder="Enter Your Sample"
              />
            </div>

            <div className={styles.input}>
              <Input
                label={"DESCRIPTION"}
                type={"text"}
                name={"description"}
                required={true}
                control={control}
                placeholder="Enter Your Description"
              />
            </div>

            <TimerInput
              label={"DELIVERY COUNTDOWN"}
              type={"time"}
              name={"delievery"}
              control={control}
            />
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <div className={styles.inputField}>
              <Input
                label="Codice EER"
                type="text"
                name={"codice"}
                control={control}
                required={true}
              />
            </div>
            <div className={styles.inputField}>
              <Input
                label={"Modalità di campionamento"}
                type={"text"}
                name={"campion"}
                required={true}
                control={control}
              />
            </div>
          </div>

          <Input
            label={"Finalità di analisi"}
            type={"text"}
            name={"finalita"}
            required={true}
            control={control}
          />

          <div className={styles.container}>
            <div className={styles.quantity}>
              <label className={styles.text}>Quantity</label>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img
                    onClick={decrementCounter}
                    className={styles.icon}
                    src={Minus}
                  />
                  <span>{counter}</span>
                  <img
                    onClick={incrementCounter}
                    className={styles.icon}
                    src={Plus}
                  />
                </div>
              </div>
            </div>

            <div className={styles.quantity}>
              <TimerInput
                label={"Original Price"}
                type={"number"}
                style={{ width: "120px", backgroundColor: "transparent" }}
                name={"original"}
                control={control}
              />
            </div>

            <div className={styles.quantity}>
              <TimerInput
                src={Percentage}
                type={"text"}
                label={"DISCOUNT"}
                style={{ width: "120px" }}
                name={"discount"}
                control={control}
              />
            </div>
            <div className={styles.finalPrice}>
              <TimerInput
                src={Tag}
                type={"number"}
                label={"FINAL PRICE"}
                style={{ width: "150px" }}
                name={"final"}
                control={control}
                value={finalPrice}
              />
            </div>
          </div>
        </form>
        <div className={styles.analysisDiv}>
          <div className={styles.heading}>
            <h4 className={styles.text}>Added Analysis</h4>

            <ButtonBox type="submit" label="Add Pakage" />
          </div>

          <div className={styles.content}>
            <div className={styles.imgDiv}>
              <img src={Package} />
            </div>
            <h4 className={styles.heading}>No Package selected</h4>
            <p className={styles.text}>
              Select packages with Analysis’s to add a sample{" "}
            </p>
            <ButtonBox class={styles.full} primary label="Add Package" />
          </div>
        </div>
        {/* </Form> */}
      </div>
    </div>
  );
};

export default SampleModal;
