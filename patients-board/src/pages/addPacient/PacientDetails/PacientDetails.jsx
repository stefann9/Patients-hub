import { useState } from "react";
import {
  SlButton,
  SlInput,
  SlRadio,
  SlRadioGroup,
  SlTree,
  SlTreeItem,
} from "@shoelace-style/shoelace/dist/react";
import "./PacientDetails.css";
import RoomPicker from "../../../components/FreeRooms/RoomPicker";

const PacientDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [personalNumericId, setPersonalNumericId] = useState("");
  const [idSeriesAndNumber, setIdSeriesAndNumber] = useState("");
  const [typeOfInsurance, setTypeOfInsurance] = useState("");
  const [insuredStatus, setInsuredStatus] = useState("");
  const [admissionType, setAdmissionType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");

  const roomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const takenRooms = [2, 5, 7, 9];
  const insuranceTypes = [
    "salariat",
    "pensionar",
    "copil < 18 ani",
    "elev/student 18-26 ani",
    "gravida",
    "handicap",
    "ajutor social",
    "somaj",
    "altele",
  ];
  const admissionTypes = [
    "urgenta",
    "trimitere medic de familie",
    "trimitere ambulatoriu",
    "la cerere",
    "altele",
  ];
  const insuredStatusList = [
    "urgenta",
    "diagnostic",
    "tratament",
    "nedeplasabil",
    "epidemiologic",
    "altele",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const pacient_details = {
      firstName,
      lastName,
      gender,
      birthDate,
      address,
      personalNumericId,
      idSeriesAndNumber,
      typeOfInsurance,
      insuredStatus,
      admissionType,
      roomNumber,
    };

    console.log(pacient_details);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="details-form">
        <div className="personal-info">
          <SlInput
            label="First name"
            type="text"
            value={firstName}
            onSlChange={(e) => setFirstName(e.target.value)}
            required
          />
          <SlInput
            label="Last name"
            type="text"
            value={lastName}
            onSlChange={(e) => setLastname(e.target.value)}
            required
          />
          <div className="gender">
            <SlRadioGroup
              required
              onSlChange={(e) => setGender(e.target.value)}
            >
              <SlRadio value="Female">Female</SlRadio>
              <SlRadio value="Male">Male</SlRadio>
            </SlRadioGroup>
          </div>
          <SlInput
            label="Date of Birth"
            type="date"
            value={birthDate}
            onSlChange={(e) => setBirthDate(e.target.value)}
            required
          />
          <SlInput
            label="Address"
            type="text"
            value={address}
            onSlChange={(e) => setAddress(e.target.value)}
            required
          />
          <SlInput
            label="Personal Numeric Code"
            type="text"
            value={personalNumericId}
            onSlChange={(e) => setPersonalNumericId(e.target.value)}
            required
          />
        </div>
        <div className="general-info">
          <SlInput
            label="ID: Series and number"
            type="text"
            value={idSeriesAndNumber}
            onSlChange={(e) => setIdSeriesAndNumber(e.target.value)}
            required
          />
          <SlTree>
            <SlTreeItem>
              {typeOfInsurance ? typeOfInsurance : "Type of insurance"}
              {insuranceTypes.map((insurance) => (
                 <SlTreeItem 
                   onClick={() => {
                   setTypeOfInsurance(insurance);
                 }}
               >
                 {insurance}
               </SlTreeItem>
              ))}
            </SlTreeItem>
          </SlTree>
          <SlTree>
          <SlTreeItem>
              {insuredStatus ? insuredStatus : "Status of the insured"}
              {insuredStatusList.map((status) => (
                 <SlTreeItem 
                   onClick={() => {
                   setInsuredStatus(status);
                 }}
               >
                 {status}
               </SlTreeItem>
              ))}
            </SlTreeItem>
          </SlTree>
          <SlTree>
          <SlTreeItem>
              {admissionType ? admissionType : "Type of admission"}
              {admissionTypes.map((admission) => (
                 <SlTreeItem 
                   onClick={() => {
                   setAdmissionType(admission);
                 }}
               >
                 {admission}
               </SlTreeItem>
              ))}
            </SlTreeItem>
          </SlTree>
          <RoomPicker roomNumbers={roomNumbers} takenRooms={takenRooms} />
        </div>
      </div>
      <SlButton className="save-button" variant="primary" type="submit">
        Save
      </SlButton>
    </form>
  );
};

export default PacientDetails;
