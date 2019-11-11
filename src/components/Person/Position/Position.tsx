import React from "react";
import classes from "../../../utils/classes";
import "./Position.scss";

const bem = classes("position");

interface PositionProps {
  name?: string;
}

export const Position: React.FC<PositionProps> = () => (
  <span className={bem()}>position</span>
);
