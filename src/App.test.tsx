import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount, shallow } from "../tests/setup/test-setup";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe("<App />", () => {
  let wrapper: any;

  it("defines the component", () => {
    wrapper = mount(<App />);
    expect(wrapper).toBeDefined();
  });

  it("renders form component", () => {
    console.log(wrapper.debug());
    expect(wrapper.find("div").hasClass("App")).toBe(true);
    // expect(wrapper.find('[form="user"]').first()).toHaveLength(1);
  });
});
