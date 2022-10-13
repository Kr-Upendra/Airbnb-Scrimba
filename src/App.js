// eslint-disable-next-line array-callback-return
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const card = data.map((d) => {
    return <Card key={d.id} {...d} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cardContainer">{card}</section>
    </>
  );
}
