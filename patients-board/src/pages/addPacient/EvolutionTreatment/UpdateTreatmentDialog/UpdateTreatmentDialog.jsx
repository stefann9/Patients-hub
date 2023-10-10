import {
  SlTextarea,
  SlInput,
  SlButton,
  SlDialog,
} from "@shoelace-style/shoelace/dist/react";
export const UpdateTreatmentDialog = ({
  treatments,
  setTreatments,
  updateTreatment,
  setUpdateTreatment,
  setOpen,
  open,
}) => {
  const handleUpdateTreatment = (e) => {
    e.preventDefault();

    const treatment = e.target.children[0].value;
    const [inputDateFrom, inputDateTo] = e.target.children[1].children;
    const date = `${inputDateFrom.value} - ${inputDateTo.value}`;

    setUpdateTreatment({ date, treatment });
    const newList = [...treatments];
    newList.splice(0, 1, { date, treatment });
    setTreatments(newList);
  };

  return (
    <SlDialog
      label="Edit treatment"
      open={open}
      onSlAfterHide={() => setOpen(false)}
      style={{ "--width": "80vw" }}
    >
      <form
        onSubmit={handleUpdateTreatment}
        className="container-details evolution-treatments"
      >
        <SlTextarea value={updateTreatment?.treatment} size="large" />
        <div className="container-dates-from-to">
          <SlInput
            label="From"
            type="date"
            placeholder="Date"
            value={updateTreatment?.date.split(" ")[0]}
            required
          />
          <SlInput
            label="To"
            type="date"
            placeholder="Date"
            value={updateTreatment?.date.split(" ")[2]}
            required
          />
        </div>
        <SlButton
          className="save-btn"
          type="submit"
          onClick={() => setOpen(false)}
        >
          Save
        </SlButton>
      </form>
    </SlDialog>
  );
};
