import {
  SlTextarea,
  SlInput,
  SlButton,
} from "@shoelace-style/shoelace/dist/react";
import { useState } from "react";

export const AddNewTreatment = ({ treatments, setTreatments, addNewInfo, setAddNewInfo }) => {
  const [treatment, setTreatment] = useState(null);
  const [fromDateTreatment, setFromDateTreatment] = useState(null);
  const [toDateTreatment, setToDateTreatment] = useState(null);
  const handleAddNewTreatment = () => {
    
    if (treatment && fromDateTreatment && toDateTreatment) {
      const newTreatment = {
        date: `${fromDateTreatment} - ${toDateTreatment}`,
        treatment: treatment,
      };

      setTreatments([newTreatment, ...treatments]);

      setFromDateTreatment(null);
      setToDateTreatment(null);
      setTreatment(null);
      setAddNewInfo(!addNewInfo);
    }
  };
  return addNewInfo ? (
    <div className="container-add-new-info">
      <SlTextarea
        label="Evolution and treatment"
        size="medium"
        value={treatment}
        onSlChange={(e) => setTreatment(e.target.value)}
        required
      />
      <div className="container-dates-from-to">
        <SlInput
          label="From"
          type="date"
          placeholder="Date"
          value={fromDateTreatment}
          onSlChange={(e) => setFromDateTreatment(e.target.value)}
          required
        />
        <SlInput
          label="To"
          type="date"
          placeholder="Date"
          value={toDateTreatment}
          onSlChange={(e) => setToDateTreatment(e.target.value)}
          required
        />
      </div>

      <div className="container-add-dismiss">
        <SlButton variant="primary" onClick={handleAddNewTreatment}>
          Add evolution and treatment info
        </SlButton>
        <SlButton
          variant="primary"
          outline
          onClick={() => setAddNewInfo(!addNewInfo)}
        >
          Dismiss
        </SlButton>
      </div>
    </div>
  ) : (
    <>
      <SlButton
        className="add-treatment-btn"
        onClick={() => setAddNewInfo(!addNewInfo)}
      >
        Add new evolution and treatment info
      </SlButton>
    </>
  );
};
