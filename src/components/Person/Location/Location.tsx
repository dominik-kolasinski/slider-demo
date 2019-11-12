import React from "react";
import classes from "../../../utils/classes";
import "./Location.scss";

const bem = classes("location");

interface LocationProps {
  location: string;
}

export const Location: React.FC<LocationProps> = ({ location }) => (
  <span className={bem()}>{location}</span>
);
