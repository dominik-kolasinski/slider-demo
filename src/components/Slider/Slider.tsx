import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  setSliderVisibility,
  setCurrentSlide
} from "../../redux/actions/slider/slider";
import classes from "../../utils/classes";
import "./Slider.scss";
import { TeamMember } from "../../redux/types";

const bem = classes("slider");

const Slider: React.FC = () => {
  const dispatch = useDispatch();
  const teamMembers = useSelector((state: any) => state.team.data);
  const sliderVisible = useSelector((state: any) => state.slider.visible);
  const currentSlide = useSelector(
    (state: any) => state.slider.currentSlideIndex
  );
  const [style, setStyle] = useState({});
  const slidesCount = teamMembers.length;

  useEffect(() => {
    setStyle({
      transform: currentSlide
        ? `translateX(-${(100 * currentSlide) / slidesCount}%)`
        : "",
      width: `${100 * slidesCount}%`
    });
  }, [currentSlide, slidesCount]);

  const previous = () => {
    const desired = currentSlide - 1;
    const shift = (100 * desired) / slidesCount;
    setStyle({ ...style, transform: `translateX(-${shift}%)` });
    dispatch(setCurrentSlide(desired));
  };

  const next = () => {
    const desired = currentSlide + 1;
    const shift = (100 * desired) / slidesCount;
    setStyle({ ...style, transform: `translateX(-${shift}%)` });
    dispatch(setCurrentSlide(desired));
  };

  return (
    <div className={bem()}>
      {sliderVisible && (
        <>
          {currentSlide > 0 && (
            <FontAwesomeIcon
              icon={faAngleLeft}
              className={bem("previous-icon")}
              onClick={previous}
            />
          )}
          <div
            className={bem("content")}
            style={currentSlide !== undefined ? style : {}}
          >
            {teamMembers.map((teamMember: TeamMember, index: number) => (
              <div className={bem("item")} key={teamMember.uid}>
                <div className={bem("details")}>
                  <span className={bem("position")}>{teamMember.position}</span>
                  <div className={bem("names")}>
                    <span className={bem("name")}>{teamMember.firstName}</span>
                    {teamMember.middleName && (
                      <span className={bem("name")}>
                        &nbsp;{teamMember.middleName}
                      </span>
                    )}
                    <span className={bem("name")}>
                      &nbsp;{teamMember.lastName}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {currentSlide < slidesCount - 1 && (
            <FontAwesomeIcon
              icon={faAngleRight}
              className={bem("next-icon")}
              onClick={next}
            />
          )}
          <FontAwesomeIcon
            icon={faTimes}
            className={bem("close-icon")}
            onClick={() => dispatch(setSliderVisibility(false))}
          />
        </>
      )}
    </div>
  );
};

export default Slider;
