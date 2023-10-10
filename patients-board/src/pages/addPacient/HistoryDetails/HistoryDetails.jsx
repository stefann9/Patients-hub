import { useState } from "react";
import { SlTextarea, SlButton } from "@shoelace-style/shoelace/dist/react";
import "./HistoryDetails.css";
const HistoryDetails = () => {
  const [antecedents, setAntecedents] = useState("");
  const [livingWorkingConditions, setLivingWorkingConditions] = useState("");
  const [behaviors, setBehaviors] = useState("");
  const [medicationBfHospitalization, setMedicationBfHospitalization] =
    useState("");
  const [diseaseHistory, setDiseaseHistory] = useState("");
  const [clinicExamination, setClinicExamination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const history = {
      antecedents,
      livingWorkingConditions,
      behaviors,
      medicationBfHospitalization,
      diseaseHistory,
      clinicExamination,
    };

    console.log(history);

    setAntecedents("");
    setLivingWorkingConditions("");
    setBehaviors("");
    setMedicationBfHospitalization("");
    setDiseaseHistory("");
    setClinicExamination("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container-details history">
        <SlTextarea
          label="Heredo-collateral antecedents"
          size="small"
          value={antecedents}
          onSlChange={(e) => setAntecedents(e.target.value)}
          required
        />
        <SlTextarea
          label="Living and working conditions"
          size="small"
          value={livingWorkingConditions}
          onSlChange={(e) => setLivingWorkingConditions(e.target.value)}
          required
        />
        <SlTextarea
          label="Behaviors (smoking, alcohol, etc.)"
          size="small"
          value={behaviors}
          onSlChange={(e) => setBehaviors(e.target.value)}
          required
        />
        <SlTextarea
          label="Background medication administered before hospitalization"
          size="small"
          value={medicationBfHospitalization}
          onSlChange={(e) => setMedicationBfHospitalization(e.target.value)}
          required
        />
        <SlTextarea
          label="History of disease"
          size="small"
          value={diseaseHistory}
          onSlChange={(e) => setDiseaseHistory(e.target.value)}
          required
        />
        <SlTextarea
          label="General Clinical Examination"
          size="small"
          value={clinicExamination}
          onSlChange={(e) => setClinicExamination(e.target.value)}
          required
        />
        <SlButton type="submit" className="save-btn">
          Save
        </SlButton>
      </div>
    </form>
  );
};
export default HistoryDetails;
