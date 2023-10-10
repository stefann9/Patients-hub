import { useState } from "react";
import {
  SlTextarea,
  SlInput,
  SlButton,
} from "@shoelace-style/shoelace/dist/react";
import "../addPacient.css";
const SurgeryDetails = () => {
  const [teamMedics, setTeamMedics] = useState("");
  const [surgeryDetails, setSurgeryDetails] = useState("");
  const [surgeryDate, setSurgeryDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const surgery = {
      details: { teamMedics, surgeryDetails },
      date: surgeryDate,
    };

    console.log(surgery);

    setTeamMedics("");
    setSurgeryDetails("");
    setSurgeryDate("");
  };
  return (
    <form className="container-details surgery" onSubmit={handleSubmit}>
      <SlTextarea
        label="Team of medics"
        size="medium"
        value={teamMedics}
        onSlChange={(e) => setTeamMedics(e.target.value)}
        required
      />
      <SlTextarea
        label="Details"
        size="large"
        value={surgeryDetails}
        onSlChange={(e) => setSurgeryDetails(e.target.value)}
        required
      />
      <SlInput
        label="Date"
        type="date"
        placeholder="Date"
        value={surgeryDate}
        onSlChange={(e) => setSurgeryDate(e.target.value)}
        required
      />
      <SlButton type="submit" className="save-btn">
        Save
      </SlButton>
    </form>
  );
};
export default SurgeryDetails;
