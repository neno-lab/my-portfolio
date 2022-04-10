import './style.scss';

import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import DivContent from '../../containers/DivContent';
import Main from '../../containers/Main';
import React from 'react';
import Underline from '../../components/universal/Underline';

const Projects = () => (
  <Main className='projects-main-holder'>
    <DivContent className='projects-title-holder'>
      <AiOutlineFundProjectionScreen />
      <h1>Projects</h1>
      <Underline />
    </DivContent>
  </Main>
);

export default Projects;
