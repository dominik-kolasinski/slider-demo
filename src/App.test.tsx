import React from "react";
import App from "./App";
import { mount, shallow } from "../tests/setup/test-setup";

describe("<App />", () => {
  let wrapper: any;

  it("defines the component", () => {
    wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

  it("renders App component", () => {
    expect(wrapper.find("div").hasClass("app")).toBe(true);
    expect(wrapper.find("Layout").length).toBe(1);
    expect(wrapper.find("Section").length).toBe(1);
    expect(wrapper.find("Team").length).toBe(1);
  });
});
