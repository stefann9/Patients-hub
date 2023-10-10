import { SlCard } from "@shoelace-style/shoelace/dist/react";
import { SlIcon } from "@shoelace-style/shoelace/dist/react";
import "./PacientCard.css";

const PacientCard = (props) => {
  return (
    <SlCard className="patient-card">
      <div className="patient-data">
        <p>{props.speciality}</p>
        <p>
          {props.lastName} {props.firstName}
        </p>
        <div className="date-location">
          <div className="location">
            <SlIcon name="map" />
            <p>ROOM {props.pacient_room}</p>
          </div>
          <div className="date">
            <SlIcon name="calendar-event" />
            <p>{props.date}</p>
          </div>
        </div>
      </div>
    </SlCard>
  );
};
export default PacientCard;
