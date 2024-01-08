import React, { useState } from "react";
import Input from "../inputBox";
import styles from "./clientInfo.module.scss";

  
import Location from "../../assests/marker-pin-01.svg";
import Telephone from "../../assests/phone.png";
import Warning from "../../assests/info-hexagon.svg";
import Address from "../../assests/mail-02.svg";
import Currency from "../../assests/currency-euro.svg"
import Time from "../../assests/clock.svg"
import Route  from "../../assests/route.svg"
import Percent from "../../assests/percent-03.svg"

import TimerInput from "../inputMask";


const ClientInfo = ({ control }) => {


  return (
    <div>
      <div style={{ marginTop: "1rem" }}>
        <Input
          label="Ditta — Ragione sociale"
          type="text"
          required={true}
          name="date"
          control={control}
          placeholder={"Select your date"}
        />
      </div>

      <div className={styles.warning}>
        <img src={Warning} />
        <p className={styles.paragraph}>
          If you’ll modify data here it will only affect current work and will
          not affect registered client’s data
        </p>
      </div>
      <Input
        label="Clients Address"
        src={Location}
        type="text"
        required={true}
        name="location  "
        control={control}
        placeholder={"Select your date"}
      />
      <Input
        label="Telefono"
        src={Telephone}
        type="text"
        required={true}
        name="telephone"
        control={control}
        placeholder={"Enter your telephone"}
      />
      <Input
        src={Address}
        label="Email"
        type="email"
        required={true}
        name="email"
        control={control}
        placeholder={"Enter your Email"}
      />

      <h6 className={styles.shipTitle}>Shipping info</h6>

      <Input
        src={Address}
        label="Contact Person"
        type="text"
        required={true}
        name="contactPerson"
        control={control}
        placeholder={"Enter your Email"}
      />
      <Input
        src={Telephone}
        label="Contact person phone number"
        type="text"
        required={true}
        name="contactNumber"
        control={control}
        placeholder={"Enter your Email"}
      />
      <Input
        src={Address}
        label="Contact person Email"
        type="email"
        required={true}
        name="contactEmail"
        control={control}
        placeholder={"Enter your Email"}
      />
      <Input
        src={Location}
        label="Place of collection"
        type="text"
        required={true}
        name="collection"
        control={control}
        placeholder={"Enter your Email"}
      />

      <div className={styles.checkBox}>
        <input type="checkbox"/>
        <p className={styles.text}>Apply Minimum Order</p>
      </div>

      <div className={styles.firstDiv}>
      <TimerInput
        src={Time}
        label={"ORE"}
        type={'number'}
        name={'ore'}
        control={control}
      />
      <TimerInput
        src={Currency}
        label={"IMPORTO"}
        type={"number"}
        name={'importo'}
        step={0.01}
        control={control}
      />
      <div className={styles.totalDiv}>
        <img className={styles.imgIcon} src={Currency}/>
        <div className={styles.details}>
          <p className={styles.total}>TOTALE</p>
          <span className={styles.value}>40.00</span>
        </div>
      </div>

      </div>
      <div className={styles.firstDiv}>
      <TimerInput
        src={Route}
        label={"KM"}
        type={'number'}
        name={'km'}
        control={control}
      />
      <TimerInput
        src={Currency}
        label={"COSTP PER KM"}
        type={"number"}
        name={'costo'}
        step={0.01}
        control={control}
      />
      <div className={styles.totalDiv}>
        <img className={styles.imgIcon} src={Currency}/>
        <div className={styles.details}>
          <p className={styles.total}>TOTALE</p>
          <span className={styles.value}>183.00</span>
        </div>
      </div>

      </div>
      <div className={styles.firstDiv}>
      <TimerInput
        src={Percent}
        label={"MULTIPLIER"}
        type={'number'}
        name={'multiplier'}
        control={control}
      />
      <TimerInput
        src={Currency}
        label={"TOTALE(ORE + KM)"}
        type={"number"}
        name={'totale'}
        step={0.01}
        control={control}
      />
     

      </div>

    
    </div>
  );
};

export default ClientInfo;
