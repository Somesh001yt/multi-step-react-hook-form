import React, { useState } from 'react';
import styles from './steps.module.scss';
import { FormProvider, useForm } from "react-hook-form";

import Suitcase from '../../assests/briefcase-02.svg';
import GeneralInfo from '../generalInfo';
import ButtonBox from '../button';
import ClientInfo from '../clientInfo';
import SampleSetting from '../sampleSetting';
import Summary from '../summry';

const ContentBox = ({ title, text, content }) => {
  return (
    <div className={styles.over}>
      {title && <h2 className={styles.over__title}>{title}</h2>}
      {text && <p className={styles.over__text}>{text}</p>}
      {content}
    </div>
  );
};

const StepsComponent = () => {

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
  });


  const [activeStep, setActiveStep] = useState(0);

  const nextStep = (e) => {
    e.preventDefault(); // Prevent form submission
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    }
  };
  
  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const isLastStep = activeStep === 3;

  return (
    <div className={styles.steps}>
      <div className={styles.left}>
        <form>
          {activeStep === 0 && (
            <ContentBox
              title="General info"
              text="Work info"
              content={
                <FormProvider>
                  <GeneralInfo  control={control} />
                </FormProvider>
              }
            />
          )}
          {activeStep === 1 && (
            <ContentBox
              title="Client info"
              text="Client info"
              content={
                <FormProvider>
                  <ClientInfo control={control}/>
                </FormProvider>
              }
            />
          )}
          {activeStep === 2 && (
            <ContentBox
              title="Sample settings"
              text="Samples setting"
              content={
                <FormProvider>
                  <SampleSetting />
                </FormProvider>
              }
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
            />
          )}
          <div className={styles.cta}>
  {activeStep > 0 && !isLastStep && (
    <ButtonBox label="Previous Step" click={() => prevStep()} />
  )}
  {(activeStep < 3 && !isLastStep) && (
    <ButtonBox
      primary
      label="Next Step"
      type="submit"
      click={(e) => nextStep(e)}
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
          <img src={Suitcase} alt="suitcase" />
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
