import React from 'react';
import Header from '../components/Header';
import ImgCard from '../components/Cards/ImgCard';
import Gradpic from '../../src/assets/Images/Gradpic.jpg';

function Home() {
  return (
    <>
      <Header heading="About Me" />
      <div className="row">
        <div className="col d-flex justify-content-center">
          <ImgCard
            src={Gradpic}
            alt="some random image"
          />
        </div>
      </div>

    </>
  )
}

export default Home;