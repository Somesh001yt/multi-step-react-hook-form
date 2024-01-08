import React, { useState } from "react";
import styles from "./sample.module.scss";
import Input from "../inputBox";
import TimerInput from "../inputMask";
import { useForm, Controller } from "react-hook-form";

import Close from "../../assests/x.svg";
import Time from "../../assests/clock.svg";
import Plus from "../../assests/plus-circle2.svg";
import Minus from "../../assests/minus-circle.svg";
import Package from "../../assests/package-x.svg";
import Percentage from "../../assests/percent-03.svg";
import Tag from "../../assests/tag-01.svg";
import ButtonBox from "../button";
import Select from "react-select";

const SampleModal = ({  isFullScreen, onClose }) => {
  const [counter, setCounter] = useState(0);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
   
  });


  const onSubmit = async (data) => {
    console.log(data)
  }

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
         <form
        onSubmit={handleSubmit(onSubmit)}
        > 
          <div className={styles.box}>
            <h4 className={styles.text}>Add a Sample</h4>
            <button  className={styles.sampleBtn}>
              Add Sample
            </button>
          </div>

          {/* <div className={styles.firstBox}>
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
              src={Time}
              label={"DELIVERY COUNTDOWN"}
              type={"number"}
              name={"delievery"}
              control={control}
            />
          </div> */}

          {/* <div style={{ display: "flex", gap: "10px" }}>
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
              width={"665px"}
            />
            </div>
          </div> */}

          {/* <Input
            label={"Finalità di analisi"}
            type={"text"}
            name={"finalita"}
            required={true}
            control={control}
          /> */}
        </form>

        {/* <div className={styles.container}>
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
            <label className={styles.text}>ORIGINAL PRICE</label>
            <div className={styles.box}>
              <div className={styles.content}>
                <span>0.00 €</span>
              </div>
            </div>
          </div>

          <div className={styles.quantity}>
            <label className={styles.text}>DISCOUNT</label>
            <div className={styles.box}>
              <div className={styles.content}>
                <img className={styles.icon} src={Percentage} />
                <span>22%</span>
              </div>
            </div>
          </div>
          <div className={styles.finalPrice}>
            <label className={styles.text}>FINAL PRICE</label>
            <div className={styles.box}>
              <div className={styles.content}>
                <img className={styles.icon} src={Tag} />
                <span>0.00 €</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.analysisDiv}>
          <div className={styles.heading}>
            <h4 className={styles.text}>Added Analysis</h4>

            {/* <ButtonBox label="Add Pakage" /> */}
          </div>

          <div className={styles.content}>
            <div className={styles.imgDiv}>
              <img src={Package} />
            </div>
            <h4 className={styles.heading}>No Package selected</h4>
            <p className={styles.text}>
              Select packages with Analysis’s to add a sample{" "}
            </p>
            {/* <ButtonBox class={styles.full} primary label="Add Package" /> */}
          </div>
        </div>
        {/* </Form> */}
      </div>
    </div>
  );
};

export default SampleModal;
