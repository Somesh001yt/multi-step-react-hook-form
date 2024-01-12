import React, { useEffect, useState } from "react";
import styles from "./sample.module.scss";

import Add from "../../assests/plus-circle.svg";
import SampleModal from "../sampleModal";
import { useForm } from "react-hook-form";
import SampleCard from "../sampleCard";

const SampleSetting = ({
  control,
  nextStep,
  updateSampleData,
  handleSampleData,
  setSampleData,
  sampleData,
  formData,
  isFormSubmitted,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sampleDataList, setSampleDataList] = useState([]);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleCloseModal = (dataFromModal) => {
    setSampleDataList((prevSampleDataList) => [
      ...prevSampleDataList,
      dataFromModal,
    ]);
    setIsModalVisible(false);
  };

  useEffect(() => {
    // Update sampleDataList when formData changes
    setSampleDataList(formData?.sampleData || []);
  }, [formData]);

  return (
    <div>
      <div>
        {sampleDataList.map((sample, index) => (
          <SampleCard key={index} sample={sample} />
        ))}
      </div>

      <div className={styles.addSample}>
        <p className={styles.addText}>Add New Sample</p>
        <img onClick={handleModal} src={Add} alt="Add" />
      </div>

      {/* sample modal */}
      {isModalVisible && (
        <SampleModal
          control={control}
          isFullScreen={true}
          onClose={handleModal}
          modalData={handleCloseModal}
          updateSampleData={updateSampleData}
        />
      )}
    </div>
  );
};

export default SampleSetting;
