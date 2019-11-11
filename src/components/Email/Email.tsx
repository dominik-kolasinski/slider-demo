import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import classes from "../../utils/classes";
import "./Email.scss";

const bem = classes("email");

interface EmailProps {
  name?: string;
}

export const Email: React.FC<EmailProps> = () => (
  <div className={bem()}>
    <a href="mailto:webmaster@example.com" className={bem("link")}>
      <FontAwesomeIcon icon={faEnvelope} className={bem("icon")} />
    </a>
  </div>
);
