import { useEffect, useState } from "react";
import FilterSpecialities from "../../components/FilterSpecialities/FilterSpecialities";
import { pacientsData, departmentData } from "../../mocks/data";
import "./Dashboard.css";
import PacientCard from "../../components/PacientCard/PacientCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Link } from "react-router-dom";
import AddCardBtn from "../../components/AddCardBtn/AddCardBtn";

const Dashboard = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [pacients, setPacients] = useState([]);
  const [filterPacients, setFilterPacients] = useState(pacients);
  const [departments, setDepartments] = useState([]);
  const [departmentCapacity, setDepartmentCapacity] = useState(100);

  useEffect(() => {
    setPacients(pacientsData);
    setDepartments(departmentData);
  }, []);

  useEffect(() => {
    let newFilterPacients = selectedSpeciality
      ? pacients.filter((pacient) => pacient.speciality === selectedSpeciality)
      : pacients;

    setFilterPacients(newFilterPacients);

    const departmentCapacity = departments.find(
      (department) => department.name === selectedSpeciality
    );
    if (departmentCapacity) {
      setDepartmentCapacity(departmentCapacity.capacity);
    }
  }, [pacients, selectedSpeciality, departments]);

  return (
    <div className="dashboard">
      <h1 id="title">HOSPITAL X</h1>
      <FilterSpecialities
        selectedSpeciality={selectedSpeciality}
        setSelectedSpeciality={setSelectedSpeciality}
        departmentData={departmentData}
      />

      {selectedSpeciality ? (
        <ProgressBar
          capacity={departmentCapacity}
          availability={filterPacients.length}
        />
      ) : null}

      <div className="patient-card-container">
        {filterPacients.map((pacient) => (
          <Link to={`/pacient/${pacient.pacientID}`} key={pacient.pacientID}>
            <PacientCard
              firstName={pacient.firstName}
              lastName={pacient.lastName}
              speciality={pacient.speciality}
              pacient_room={pacient.pacient_room}
              date={pacient.date}
            />
          </Link>
        ))}
        <div className="add-card">
          <Link to={`/add-pacient`}>
            {selectedSpeciality && <AddCardBtn />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;