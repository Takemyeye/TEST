import React from 'react';
import { Features } from "./features";
import { Reviews } from './reviews';
import { Header } from "./header";
import { Modern } from './modern';
import { Block } from "./block";
import { Time } from './time';
import "./styles/home.css"


const Home = () => {
  return (
    <>
    <Header/>
    <main>
      <Features/>
        <Block />
        <Modern/>
        <Time/>
        <Reviews/>
    </main>
    </>
  )
}

export default Home;
