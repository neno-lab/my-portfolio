import './style.scss';

import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import DivContent from '../../containers/DivContent';
import Main from '../../containers/Main';
import { projects } from '../../helpers/constants';
import React from 'react';
import SimpleList from '../../components/universal/SimpleList';
import Underline from '../../components/universal/Underline';

const Projects = () => (
  <Main className='projects-main-holder'>
    <DivContent className='projects-title-holder'>
      <AiOutlineFundProjectionScreen />
      <h1>Projects</h1>
      <Underline />
    </DivContent>
    {projects && projects.length ? projects.map(projectItem => (
      <SimpleList
        items={projectItem.items}
        key={projectItem.id}
        mainTitle={projectItem.title}
      />
    ))
      : null
    }
  </Main>
);

export default Projects;
