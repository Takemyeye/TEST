import React from 'react';
import { Features } from "./features";
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
    </main>
    </>
  )
}

export default Home;
