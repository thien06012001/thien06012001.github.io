import type { NextPage } from "next";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Banner from "../components/HomePage/Banner";
import Feed from "../components/HomePage/Feed";
import Feed2 from "../components/HomePage/Feed2";
import HowWeWork from "../components/HomePage/HowWeWork";
import FoodDemo from "../components/HomePage/FoodDemo";
import PeopleSay from "../components/HomePage/PeopleSay";
import Subscribe from "../components/HomePage/Subscribe";
import Contact from "../components/Contact";
import { sanityClient } from "../sanity";
import { OverWeight, UnderWeight, NormalWeight, Obese } from "../typings";
import type { GetStaticProps } from "next";
import Icon from "../public/assets/Logo.png";
import Head from "next/head";
type Props = {
  overweights: OverWeight[];
  normalweights: NormalWeight[];
  underweights: UnderWeight[];
  obeses: Obese[];
};
const Home = ({ overweights, underweights, normalweights, obeses }: Props) => {
  // const [text, count] = useTypewriter({
  //   words: [
  //     `Hi!`,
  //     "Welcome to our website",
  //     "This is a website for everyone health",
  //     'From group 12:30 AM'
  //   ],
  //   loop: true,
  //   delaySpeed:2000,
  // })
  return (
    <div className="bg-lime-50">
      <Head>
        <title>Healthy Food</title>
        <link rel="icon" href={Icon.src} />
      </Head>
      <Navbar />
      <main className="w-screen mx-auto">
        <Banner />

        <Feed />
        <Feed2 />
        <HowWeWork />
        <FoodDemo />
      </main>
      <main className="w-screen h-[674px] mx-auto mt-[100px] bg-gradient-to-b from-[#A1C94C] to-[#FFF8ED80]">
        <PeopleSay />
      </main>
      <main className="bg-[#A1C94CE5] rounded-3xl max-w-screen-xl h-[550px] mt-[150px] mx-auto">
        <Subscribe />
      </main>
      <main>
        <Contact />
      </main>
    </div>
  );
};

export default Home;
export const getStaticProps: GetStaticProps<Props> = async () => {
  const query1 = `
  *[_type == "normalweight"] 
  `;

  const query2 = `
  *[_type == "overweight"] 
  `;

  const query3 = `
  *[_type == "underweight"] 
  `;

  const query4 = `
  *[_type == "obese"] 
  `;
  const overweights: OverWeight[] = await sanityClient.fetch(query2);
  const normalweights: NormalWeight[] = await sanityClient.fetch(query1);
  const obeses: Obese[] = await sanityClient.fetch(query4);
  const underweights: UnderWeight[] = await sanityClient.fetch(query3);
  return {
    props: {
      overweights,
      normalweights,
      underweights,
      obeses,
    },
    revalidate: 10,
  };
};
