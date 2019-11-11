import React from "react";
import classes from "../../utils/classes";
import "./Person.scss";
import { Email } from "../Email";
import { Avatar } from "./Avatar";
import { Name, Position, Location } from "../Person";

const bem = classes("person");

interface PersonProps {
  name?: string;
}

export const Person: React.FC<PersonProps> = () => (
  <div className={bem()}>
    <Email />
    <Avatar />
    <div className={bem("details")}>
      <Name />
      <Position />
      <Location />
    </div>
  </div>
);
