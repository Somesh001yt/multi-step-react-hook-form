import React, { useEffect, useState } from "react";
import Input from "../inputBox";
import styles from "./clientInfo.module.scss";

import Location from "../../assests/marker-pin-01.svg";
import Telephone from "../../assests/phone.png";
import Warning from "../../assests/info-hexagon.svg";
import Address from "../../assests/mail-02.svg";
import Building from "../../assests/building-07.svg";
import Currency from "../../assests/currency-euro.svg";
import Time from "../../assests/clock.svg";
import Route from "../../assests/route.svg";
import Percent from "../../assests/percent-03.svg";
import User from "../../assests/user-01.svg";

import TimerInput from "../inputMask";
import { useWatch } from "react-hook-form";

const ClientInfo = ({ control , watch, setValue , getValue}) => {

  const [totalOre, setTotalOre] = useState(0);
  const [totalKm, setTotalKm] = useState(0);
  const [totalOreAndKm, setTotalOreAndKm] = useState(0);


   const oreValue = watch("ore", 0);
   const importoValue = watch("importo", 0);
   const kmValue = watch("km", 0);
   const costKmValue = watch("costo", 0);
   const TotalOreValue = watch("totalOre", 0);
   const TotalKmValue = watch("totalKm", 0);

   const calculatedTotalOreAndKm = () => {
    const calculatedTotalOreKm = TotalOreValue + TotalKmValue;
    setTotalOreAndKm(calculatedTotalOreKm)
    setValue("totale", calculatedTotalOreKm);
   }

   const calculatedFinalKm = () => {
    const calculatedTotalKm = kmValue * costKmValue;
    setTotalKm(calculatedTotalKm);
    setValue("totalKm", calculatedTotalKm);
   }


  const calculateTotalOre = () => {
    const calculatedTotalOre = oreValue * importoValue;
    setTotalOre(calculatedTotalOre);
    setValue("totalOre", calculatedTotalOre);
  };

  
  useEffect(() => {
    calculateTotalOre();
  }, [oreValue, importoValue]);
  
  useEffect(() => {
    calculatedFinalKm();
  }, [kmValue, costKmValue]);
  
  useEffect(() => {
    calculatedTotalOreAndKm();
  }, [TotalOreValue, TotalKmValue]);
    
 
  return (
    <div>
      <div style={{ marginTop: "1rem" }}>
        <Input
          src={Building}
          label="Ditta — Ragione sociale"
          type="text"
          required={true}
          name="companyName"
          control={control}
          placeholder={"Enter Your Company Name"}
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
        name="clientAddress"
        control={control}
        placeholder={"Enter Client Address"}
      />
      <Input
        label="Telefono"
        src={Telephone}
        type="text"
        required={true}
        name="telephone"
        control={control}
        placeholder={"Enter your Contact Number"}
      />
      <Input
        src={Address}
        label="Email"
        type="email"
        required={true}
        name="email"
        control={control}
        placeholder={"Enter Your Email Address"}
      />

      <h6 className={styles.shipTitle}>Shipping info</h6>

      <Input
        src={User}
        label="Contact Person"
        type="text"
        required={true}
        name="contactPerson"
        control={control}
        placeholder={"Enter Contact Person Name"}
      />
      <Input
        src={Telephone}
        label="Contact person phone number"
        type="text"
        required={true}
        name="contactNumber"
        control={control}
        placeholder={"Enter Contact Person Phone Number"}
      />
      <Input
        src={Address}
        label="Contact person Email"
        type="email"
        required={true}
        name="contactEmail"
        control={control}
        placeholder={"Enter Contact Person Email Address"}
      />
      <Input
        src={Location}
        label="Place of collection"
        type="text"
        required={true}
        name="contactLocation"
        control={control}
        placeholder={"Enter Contact Persom Loaction"}
      />

      <div className={styles.checkBox}>
        <input type="checkbox" />
        <p className={styles.text}>Apply Minimum Order</p>
      </div>

      <div className={styles.firstDiv}>
        <TimerInput
          src={Time}
          label={"ORE"}
          type={"number"}
          name={"ore"}
          control={control}
          handleChange={calculateTotalOre}
        />
        <TimerInput
          src={Currency}
          label={"IMPORTO"}
          type={"number"}
          name={"importo"}
          step={0.01}
          control={control}
          handleChange={calculateTotalOre}
        />
        <div className={styles.totalDiv}>
          <TimerInput
            src={Currency}
            type={"number"}
            name={"totalOre"}
            control={control}
            
            value={totalOre}
            readOnly
          />
        </div>
      </div>
      <div className={styles.firstDiv}>
        <TimerInput
          src={Route}
          label={"KM"}
          type={"number"}
          name={"km"}
          control={control}
        />
        <TimerInput
          src={Currency}
          label={"COSTP PER KM"}
          type={"number"}
          name={"costo"}
          step={0.01}
          control={control}
        />
        <div className={styles.totalDiv}>
          <TimerInput
            src={Currency}
            type={"number"}
            name={"totalKm"}
            control={control}
            value={totalKm}
            readOnly
            // showCurrencyMask={true}
          />
        </div>
      </div>
      <div className={styles.firstDiv}>
        <TimerInput
          src={Percent}
          label={"MULTIPLIER"}
          type={"number"}
          name={"multiplier"}
          control={control}
        />
        <TimerInput
          src={Currency}
          label={"TOTALE(ORE + KM)"}
          type={"number"}
          name={"totale"}
          step={0.01}
          value={totalOreAndKm}
          control={control}
        />
      </div>
    </div>
  );
};

export default ClientInfo;
