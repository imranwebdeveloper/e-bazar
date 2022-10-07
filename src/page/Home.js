import React from "react";
import Section from "../components/common/Section";
import JustForYou from "../components/Main/JustForYou";

const Home = () => {
  return (
    <Section addStyle={"grid grid-cols-[300px_1fr] gap-2"}>
      <aside className="bg-white border-2">Aside bar</aside>
      <JustForYou />
    </Section>
  );
};

export default Home;
