import React from "react";
import classes from "../../utils/classes";
import "./Section.scss";

const bem = classes("section");

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className={bem()}>
    <h1 className={bem("title")}>{title}</h1>
    {children}
  </section>
);

export default Section;
