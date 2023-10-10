import { useEffect, useState } from "react";
import { SlButton, SlIconButton } from "@shoelace-style/shoelace/dist/react";

import { UpdateTreatmentDialog } from "./UpdateTreatmentDialog/UpdateTreatmentDialog";
import { AddNewTreatment } from "./AddNewTreatment/AddNewTreatment";
import "./EvolutionTreatment.css";

const EvolutionTreatment = () => {
  const [addNewInfo, setAddNewInfo] = useState(false);
  const [open, setOpen] = useState(false);

  const [treatments, setTreatments] = useState([]);
  const [updateTreatment, setUpdateTreatment] = useState(null);


  useEffect(() => {
    setUpdateTreatment(treatments[0]);
  }, [treatments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(treatments);
  };

  return (
    <>
    
      <UpdateTreatmentDialog
        treatments={treatments}
        setTreatments={setTreatments}
        updateTreatment={updateTreatment}
        setUpdateTreatment={setUpdateTreatment}
        open={open}
        setOpen={setOpen}
      />

      <form
        onSubmit={handleSubmit}
        className="container-details evolution-treatments"
      >

        {treatments.map((treatment, index) => {
          return (
            <div className="container-treatments" key={index}>
              <p className="date-treatment">
                {treatment.date}
                {index === 0 ? (
                  <SlIconButton
                    onClick={() => setOpen(true)}
                    name="pencil"
                    label="Edit"
                    disabled={addNewInfo}
                  />
                ) : null}
              </p>
              <p className="treatment">
                {index === 0 ? updateTreatment?.treatment : treatment.treatment}
              </p>
            </div>
          );
        })}

        <AddNewTreatment
          treatments={treatments}
          setTreatments={setTreatments}
          addNewInfo={addNewInfo}
          setAddNewInfo={setAddNewInfo}
        />

        <SlButton type="submit" className="save-btn" disabled={addNewInfo}>
          Save
        </SlButton>
      </form>
    </>
  );
};
export default EvolutionTreatment;
