import React from "react";
import classes from "../../../utils/classes";
import "./Name.scss";

const bem = classes("name");

interface NameData {
  first: string;
  last: string;
  middle?: string;
}

interface NameProps {
  name: NameData;
}

export const Name: React.FC<NameProps> = ({ name }) => (
  <span className={bem()}>
    {name.first} {name.last}
  </span>
);
