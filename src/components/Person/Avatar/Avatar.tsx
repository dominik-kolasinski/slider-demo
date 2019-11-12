import React from "react";
import classes from "../../../utils/classes";
import avatar_placeholder from "../../../assets/avatar_placeholder.svg";
import "./Avatar.scss";

const bem = classes("avatar");

interface AvatarProps {
  image?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return (
    <div className={bem()}>
      <img
        className={bem("image")}
        src={image ? image : avatar_placeholder}
        alt="team member avatar"
      ></img>
    </div>
  );
};
