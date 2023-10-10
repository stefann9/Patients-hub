import "./SpecialityBtn.css";
const SpecialityBtn = ({
  name,
  setSelectedSpeciality,
  isSelected,
  capacity,
}) => {
  const handleClick = (e) => {
    setSelectedSpeciality(name);
  };
  return (
    <button
      className={`speciality-btn ${isSelected ? "selected" : null}`}
      onClick={handleClick}
    >
      <span className={`icon ${name}`}>{capacity}</span>
      {name}
    </button>
  );
};
export default SpecialityBtn;
