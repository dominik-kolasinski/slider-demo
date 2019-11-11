import React from "react";
import classes from "../../utils/classes";
import { Person } from "../Person";
import "./Team.scss";

const bem = classes("team");

interface TeamProps {
  name?: string;
}

const team = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Team: React.FC<TeamProps> = () => (
  <div className={bem()}>
    {team.map(person => (
      <Person />
    ))}
  </div>
);

export default Team;
