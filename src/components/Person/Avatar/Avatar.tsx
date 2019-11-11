import React from "react";
import classes from "../../../utils/classes";
import "./Avatar.scss";

const bem = classes("avatar");

interface AvatarProps {
  name?: string;
}

export const Avatar: React.FC<AvatarProps> = () => (
  <div className={bem()}>
    <img
      className={bem("image")}
      src="https://i.pravatar.cc/180"
      alt="team member avatar"
    ></img>
  </div>
);
