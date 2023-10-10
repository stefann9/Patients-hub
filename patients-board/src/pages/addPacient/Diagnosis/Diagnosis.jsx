import { useState } from "react";
import { SlButton, SlInput, SlTextarea } from "@shoelace-style/shoelace/dist/react";
import "./Diagnosis.css";

const Diagnosis = () => {
  const [initial_diagnosis, setInitialDiagnosis] = useState("");
  const [three_days_diagnosis, setThreeDaysDiagnosis] = useState("");
  const [final_diagnosis, setFinalDiagnosis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const diagnosis = {
      initial_diagnosis,
      three_days_diagnosis,
      final_diagnosis,
    };

    console.log(diagnosis);
  };

  return (
      <form onSubmit={handleSubmit} className="diagnosis-form">
        <SlTextarea
          id="initial_diagnosis"
          label="Initial diagnosis"
          type="text"
          value={initial_diagnosis}
          onSlChange={(e) => setInitialDiagnosis(e.target.value)}
          size="large"
          required
        />
        <SlTextarea
          id="three_days_diagnosis"
          label="72-hour Diagnosis"
          type="text"
          value={three_days_diagnosis}
          onSlChange={(e) => setThreeDaysDiagnosis(e.target.value)}
          size="large"
          required
        />
        <SlTextarea
          className="test-diag"
          id="final_diagnosis"
          label="Final diagnosis"
          type="text"
          value={final_diagnosis}
          onSlChange={(e) => setFinalDiagnosis(e.target.value)}
          size="large"
          required
        />
        <SlButton
          className="save-btn"
          variant="primary"
          type="submit"
        >
          Save
        </SlButton>
      </form>
  );
};

export default Diagnosis;
