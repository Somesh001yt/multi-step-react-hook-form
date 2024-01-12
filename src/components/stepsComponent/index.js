import React, { useEffect, useState } from 'react';
import styles from './steps.module.scss';
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


import Suitcase from '../../assests/briefcase-02.svg';
import SampleImg from "../../assests/beaker-02.svg"
import SummaryImg from "../../assests/calculator.svg"
import ClientImg from "../../assests/building7.svg"
import GeneralInfo from '../generalInfo';
import ButtonBox from '../button';
import ClientInfo from '../clientInfo';
import SampleSetting from '../sampleSetting';
import Summary from '../summry';
import ProgressBarComponent from '../progressBar';



const ContentBox = ({ title, text, content, activeStep }) => {

  return (
    <div className={styles.over}>
      {title && <h2 className={styles.over__title}>{title}</h2>}
      <ProgressBarComponent  page={activeStep}/>
      {text && <p className={styles.over__text}>{text}</p>}
      {content}
    </div>
  );
};


const generalSchema = yup.object().shape({
  dateTime: yup
    .date()
    .nullable()
    .required("Date is required.")
    .typeError("Please enter a valid date."),
});


const clientSchema = yup.object().shape({
  companyName: yup.string().required("Company Name is required."),
  clientAddress: yup.string().required("Client's Address is required."),
  telephone: yup.string().required("Telephone is required."),
  email: yup.string().email("please enter valid email format.").required("Email is required."),
  contactPerson: yup.string().required("Contact Person is required."),
  contactNumber: yup.string().required("Contact Person Phone Number is required."),
  contactEmail: yup.string().email("Invalid email format.").required("Contact Person Email is required."),
  contactLocation: yup.string().required("Place of collection is required."),
});



const sampleSchema = yup.object().shape({
 
});

const summarySchema = yup.object().shape({
 
});



const StepsComponent = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [sampleData , setSampleData] = useState({})
  const [dataSamples, setDataSamples] = useState([]);
  const [formData , setFormData] = useState({})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // const handleSampleData = (data) => {
  //   setSampleData(data);
  // };



  console.log(sampleData)

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    register,
    setValue,
    getValues,
    formState: { errors },
    watch,
  } = useForm({
    resolver : yupResolver(
      activeStep === 0 ?
      generalSchema : 
      activeStep === 1 ?
      clientSchema :
      activeStep === 2 ?
      sampleSchema : summarySchema
    )
  });




 console.log(errors, 'dsds')

 const steps = ['General Info', 'Client Info', 'Sample Settings', 'Summary'];

 


 const nextStep = (e) => {
  console.log('Next Step clicked');
  if (activeStep < 3) {
    setActiveStep(activeStep + 1);
  }
};

const prevStep = () => {
  console.log('Previous Step clicked');
  if (activeStep > 0) {
    setActiveStep(activeStep - 1);
  }
};


const updateSampleData = (data, ) => {
  
  console.log(data, 'ttt')
  setDataSamples((prevDataSample) => [...prevDataSample, data]);
 
 }

 console.log(dataSamples, 'ttt')

const onSubmit = async (data) => {
  if (activeStep === 0 || activeStep === 1) {
    console.log(data, 'dsds');
    setFormData(data);
     if(!data.sampleData){
      const newData = {
        ...data,
        sampleData: dataSamples
      };

     setFormData(newData)

     }
    nextStep();
  } else if (activeStep === 2 ) {
    console.log(data, 'dsds');
    const newData = {
      ...data,
      sampleData: dataSamples
    };
     setFormData(newData);
     nextStep();
     setIsFormSubmitted(true)

  } else {
    console.log(data);
  }
};





console.log(formData, 'dsds')

// const onSubmit = async (data) => {
//   if (activeStep === 0 || activeStep === 1) {
//     console.log(data, 'dsds');
//     stepsData[data] = data; 
//     nextStep();
//   } else if (activeStep === 2) {
//     console.log(data, 'dsds');
//     stepsData[data] = sampleData; 
//     nextStep();
//   } else {
//     console.log(data);
//   }
// };



  const isLastStep = activeStep === 3;

  return (
    <div className={styles.steps}>
      <div className={styles.left}>
        <form   onSubmit={handleSubmit(onSubmit)}>
          {activeStep === 0 && (
            <ContentBox
              title="General info"
              text="Work info"
              content={
                <FormProvider>
                  <GeneralInfo  control={control} />
                </FormProvider>
              }
              activeStep={activeStep}
              totalSteps={steps.length}
            />
          )}
          {activeStep === 1 && (
            <ContentBox
              title="Client info"
              text="Client info"
              content={
                <FormProvider>
                  <ClientInfo control={control} setValue={setValue}  getValue={getValues}  watch={watch}/>
                </FormProvider>
              }
              activeStep={activeStep}
            />
          )}
          {activeStep === 2 && (
            <ContentBox
              title="Sample settings"
              text="Samples setting"
              content={
                <FormProvider>
                  <SampleSetting   control={control}formData={formData} isFormSubmitted={isFormSubmitted}   sampleData={sampleData} setSampleData={setSampleData} nextStep={nextStep}   updateSampleData={updateSampleData}/>
                </FormProvider>
              }
              activeStep={activeStep}
            />
          )}
          {activeStep === 3 && (
            <ContentBox
              title="Summary"
              text=""
              content={
                <FormProvider>
                  <Summary />
                </FormProvider>
              }
              activeStep={activeStep}
            />
          )}
          <div className={styles.cta}>
  {activeStep > 0 &&  (
    <ButtonBox label="Previous Step" click={() => prevStep()} />
  )}
  {(activeStep < 3 && !isLastStep) && (
    <ButtonBox
      primary
      label="Next Step"
      type="submit"
      // click={(e) => {
      //   nextStep(e)
      // }}
      class={activeStep === 0 && styles.full}
    />
  )}
  {activeStep === 3 && (
    <ButtonBox
      primary
      label="Submit"
      type="submit"
      
    />
  )}
</div>

        </form>
      </div>

      <div className={styles.right}>
        <div className={styles.imageDiv}>
          <img  src={
        activeStep === 0
          ? Suitcase
          : activeStep === 1
          ? ClientImg
          : activeStep === 2
          ? SampleImg
          : SummaryImg
      } alt="suitcase" />
        </div>

        <div className={styles.info}>
          <p>
            Step <span>{activeStep + 1} :</span>
          </p>
          <p>
            {activeStep === 0
              ? 'General info'
              : activeStep === 1
              ? 'Client info'
              : activeStep === 2
              ? 'Sample settings'
              : 'Summary'}
          </p>
        </div>

        <p className={styles.text}>
          Please, fill in the work info to proceed to the next step
        </p>
      </div>
    </div>
  );
};

export default StepsComponent;
