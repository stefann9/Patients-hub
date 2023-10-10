import { useParams } from "react-router-dom";
import { useState } from "react";

import { SlDetails } from "@shoelace-style/shoelace/dist/react";

import "./PacientView.css";

const PacientView = () => {
  const { id } = useParams();

  const allClosed = [false, false, false, false, false];

  const [openDetails, setOpenDetails] = useState(allClosed);

  const handleOpenDetails = (index) => {
    const newOpenDetails = [...allClosed];

    if (openDetails[index]) return setOpenDetails(newOpenDetails);

    newOpenDetails[index] = !newOpenDetails[index];
    return setOpenDetails(newOpenDetails);
  };

  return (
    <div className="pacient-view">
      <h1 className="pacient-title">{id}</h1>
      <SlDetails
        className={
          openDetails[0]
            ? "pacient-expand active-color"
            : "pacient-expand default-color"
        }
        open={openDetails[0]}
        onClick={() => handleOpenDetails(0)}
      >
        <span className="details-summary" slot="summary">
          <strong className="strong-summary">Pacient details</strong>
          <div className="info-summary">General info about the pacient</div>
        </span>
      </SlDetails>
      <SlDetails
        className={
          openDetails[1]
            ? "pacient-expand active-color"
            : "pacient-expand default-color"
        }
        open={openDetails[1]}
        onClick={() => handleOpenDetails(1)}
      >
        <span className="details-summary" slot="summary">
          <strong className="strong-summary">Diagnosis</strong>
          <div className="info-summary">Pacient's diagnosis</div>
        </span>
      </SlDetails>
      <SlDetails
        className={
          openDetails[2]
            ? "pacient-expand active-color"
            : "pacient-expand default-color"
        }
        open={openDetails[2]}
        onClick={() => handleOpenDetails(2)}
      >
        <span className="details-summary" slot="summary">
          <strong className="strong-summary">Surgery details</strong>
          <div className="info-summary">Surgery details if it is the case</div>
        </span>
      </SlDetails>
      <SlDetails
        className={
          openDetails[3]
            ? "pacient-expand active-color"
            : "pacient-expand default-color"
        }
        open={openDetails[3]}
        onClick={() => handleOpenDetails(3)}
      >
        <span className="details-summary" slot="summary">
          <strong className="strong-summary">History details</strong>
          <div className="info-summary">History of illnesses</div>
        </span>
      </SlDetails>
      <SlDetails
        className={
          openDetails[4]
            ? "pacient-expand active-color"
            : "pacient-expand default-color"
        }
        open={openDetails[4]}
        onClick={() => handleOpenDetails(4)}
      >
        <span className="details-summary" slot="summary">
          <strong className="strong-summary">Evolution and treatment</strong>
          <div className="info-summary">
            Pacient's evolution and recommended treatment
          </div>
        </span>
      </SlDetails>
    </div>
  );
};

export default PacientView;
