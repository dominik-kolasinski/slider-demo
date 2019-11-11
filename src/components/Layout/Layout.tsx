import React from "react";
import classes from "../../utils/classes";
import "./Layout.scss";

const bem = classes("layout");

const Layout: React.FC = ({ children }) => (
  <main className={bem()}>{children}</main>
);

export default Layout;
