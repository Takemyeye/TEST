import React from 'react';
import { Features } from "./features";
import { Abstract } from './abstract';
import { Reviews } from './reviews';
import { Header } from "./header";
import { Modern } from './modern';
import { Footer } from './footer';
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
        <Abstract/>
    </main>
    <Footer/>
    </>
  )
}

export default Home;
