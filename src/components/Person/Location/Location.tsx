import React from "react";
import classes from "../../../utils/classes";
import "./Location.scss";

const bem = classes("location");

interface LocationProps {
  name?: string;
}

export const Location: React.FC<LocationProps> = () => (
  <span className={bem()}>location</span>
);
