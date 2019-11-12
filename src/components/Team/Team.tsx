import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSliderVisibility,
  setCurrentSlide
} from "../../redux/actions/slider/slider";
import { TeamMember } from "../../redux/types";
import { Person } from "../Person";
import Slider from "../Slider/Slider";
import classes from "../../utils/classes";
import "./Team.scss";

const bem = classes("team");

interface TeamProps {
  name?: string;
}

const Team: React.FC<TeamProps> = () => {
  const dispatch = useDispatch();
  const teamMembers = useSelector((state: any) => state.team.data);

  return (
    <>
      <div className={bem()}>
        {teamMembers.map((teamMember: TeamMember, index: number) => (
          <div
            onClick={e => {
              let temp = e.target as HTMLElement;
              if (temp.classList.contains("avatar")) {
                dispatch(setCurrentSlide(index));
                dispatch(setSliderVisibility(true));
              }
              return;
            }}
            key={teamMember.uid}
          >
            <Person personData={teamMember} key={teamMember.uid} />
          </div>
        ))}
      </div>
      <Slider />
    </>
  );
};

export default Team;
