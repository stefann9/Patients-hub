import { SlProgressBar } from "@shoelace-style/shoelace/dist/react";
import "./ProgressBar.css";

const ProgressBar = ({ capacity, availability }) => {
  const occupiedPercentage = (availability / capacity) * 100;

  return <SlProgressBar className="progress-bar" value={occupiedPercentage} />;
};

export default ProgressBar;
