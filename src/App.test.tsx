import React from "react";
import App from "./App";
import { mount, shallow } from "../tests/setup/test-setup";

describe("<App />", () => {
  let wrapper: any;

  it("defines the component", () => {
    wrapper = mount(<App />);
    expect(wrapper).toBeDefined();
  });

  it("renders form component", () => {
    console.log(wrapper.debug());
    expect(wrapper.find("div").hasClass("App")).toBe(true);
  });
});
