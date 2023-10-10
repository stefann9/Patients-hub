import SpecialityBtn from "../SpecialityBtn/SpecialityBtn";
import { SlIcon } from "@shoelace-style/shoelace/dist/react";
import { SlDetails } from "@shoelace-style/shoelace/dist/react";
import "./FilterSpecialities.css";
const FilterSpecialities = ({ selectedSpeciality, setSelectedSpeciality, departmentData }) => {

  return (
    <div id="filter-specialities">
      <div className="container-title">
        {selectedSpeciality && (
          <h2 id="selected-speciality" className={selectedSpeciality}>
            {selectedSpeciality}{" "}
            <SlIcon onClick={() => setSelectedSpeciality("")} name="x"></SlIcon>
          </h2>
        )}
      </div>

      <SlDetails summary="Choose specialities..." className="collapse">
        <div id="container-specialities">
          {departmentData.map(({name,capacity}, index) => (
            <SpecialityBtn
              key={index}
              isSelected={selectedSpeciality === name}
              name={name}
              setSelectedSpeciality={setSelectedSpeciality}
              capacity={capacity}
            />
          ))}
        </div>
      </SlDetails>
    </div>
  );
};
export default FilterSpecialities;
