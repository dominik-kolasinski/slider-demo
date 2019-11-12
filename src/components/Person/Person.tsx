import React from "react";
import classes from "../../utils/classes";
import { TeamMember } from "../../redux/types";
import { Email } from "../Email";
import { Avatar } from "./Avatar";
import { Name, Position, Location } from "../Person";
import "./Person.scss";

const bem = classes("person");

interface PersonProps {
  personData: TeamMember;
}

export const Person: React.FC<PersonProps> = ({ personData }) => {
  const avatarImage =
    personData.email === undefined
      ? ""
      : `https://i.pravatar.cc/180?u=${personData.email}${Math.random()}`;
  return (
    <div className={bem()}>
      {personData.email && <Email email={personData.email} />}
      <Avatar image={avatarImage} />
      <div className={bem("details")}>
        <Name
          name={{ first: personData.firstName, last: personData.lastName }}
        />
        <Position position={personData.position} />
        <Location location={personData.location} />
      </div>
    </div>
  );
};
