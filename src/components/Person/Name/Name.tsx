import React from "react";
import classes from "../../../utils/classes";
import "./Name.scss";

const bem = classes("name");

interface NameProps {
  name?: string;
}

export const Name: React.FC<NameProps> = () => (
  <span className={bem()}>Basia Sołtysińska</span>
);
