import React from "react";
import classes from "../../../utils/classes";
import "./Position.scss";

const bem = classes("position");

interface PositionProps {
  position: string;
}

export const Position: React.FC<PositionProps> = ({ position }) => (
  <span className={bem()}>{position}</span>
);
