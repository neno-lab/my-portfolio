import './style.scss';

import DivContent from '../../containers/DivContent';
import { FcAbout } from 'react-icons/fc';
import Main from '../../containers/Main';
import React from 'react';
import Underline from '../../components/universal/Underline';

const About = () => (
  <Main className='about-main-holder'>
    <DivContent className='about-title-holder'>
      <FcAbout />
      <h1>About me</h1>
      <Underline />
    </DivContent>
  </Main>
);

export default About;
