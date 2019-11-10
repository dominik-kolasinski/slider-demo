import React from "react";
import Layout from "./components/Layout/Layout";
import Section from "./components/Section/Section";
import Team from "./components/Team/Team";

const App: React.FC = () => {
  return (
    <div>
      {/* <header>header</header> */}
      <Layout>
        <Section title={"Meet our team"}>
          <Team />
        </Section>
      </Layout>
    </div>
  );
};

export default App;
