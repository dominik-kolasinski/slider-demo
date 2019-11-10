import React from "react";
import classes from "../../utils/classes";
import "./Person.scss";

const bem = classes("person");

interface PersonProps {
  name?: string;
}

const Person: React.FC<PersonProps> = () => <div className={bem()}></div>;

export default Person;
