import './style.scss';

import { about } from '../../helpers/constants';
import DivContent from '../../containers/DivContent';
import { FcAbout } from 'react-icons/fc';
import Main from '../../containers/Main';
import React from 'react';
import SimpleList from '../../components/universal/SimpleList';
import Underline from '../../components/universal/Underline';

const About = () => (
  <Main className='about-main-holder'>
    <DivContent className='about-title-holder'>
      <FcAbout />
      <h1>About me</h1>
      <Underline />
    </DivContent>
    {about && about.length ? about.map(aboutItem => (
      <SimpleList
        items={aboutItem.items}
        key={aboutItem.id}
        mainTitle={aboutItem.title}
      />
    ))
      : null
    }
  </Main>
);

export default About;
