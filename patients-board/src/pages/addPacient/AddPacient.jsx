import {
  SlTab,
  SlTabGroup,
  SlTabPanel,
} from "@shoelace-style/shoelace/dist/react";
import SurgeryDetails from "./SurgeryDetails/SurgeryDetails";
import EvolutionTreatment from "./EvolutionTreatment/EvolutionTreatment";
import HistoryDetails from "./HistoryDetails/HistoryDetails";
import "./AddPacient.css";
import Diagnosis from "./Diagnosis/Diagnosis";
import PacientDetails from "./PacientDetails/PacientDetails";

const AddPacient = () => {
  return (
    <SlTabGroup>
      <SlTab slot="nav" panel="pacient-details">
        PACIENT DETAILS
      </SlTab>
      <SlTab slot="nav" panel="diagnosis">
        DIAGNOSIS
      </SlTab>
      <SlTab slot="nav" panel="surgery-details">
        SURGERY DETAILS
      </SlTab>
      <SlTab slot="nav" panel="history-details">
        HISTORY DETAILS
      </SlTab>
      <SlTab slot="nav" panel="evolution-treatment">
        EVOLUTION AND TREATMENT
      </SlTab>

      <SlTabPanel name="pacient-details">
        <PacientDetails />
      </SlTabPanel>
      <SlTabPanel name="diagnosis">
        <Diagnosis />
      </SlTabPanel>
      <SlTabPanel name="surgery-details">
        <SurgeryDetails />
      </SlTabPanel>
      <SlTabPanel name="history-details">
        <HistoryDetails />
      </SlTabPanel>
      <SlTabPanel name="evolution-treatment">
        <EvolutionTreatment />
      </SlTabPanel>
    </SlTabGroup>
  );
};

export default AddPacient;
