import './style.scss';

import Button from '../../components/universal/Button';
import Main from '../../containers/Main';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = ({ history }) => (
  <Main className='home-main-holder'>
    <h3>Hi my name is</h3>
    <h1>Neno Židić</h1>
    <p>´´A Frontend Developer with 2 years of industrial experience. When it comes to work, I´m very emotional, ambitious and passionate. I would describe myself as success-driven and a team player. I will gladly accept constructive criticism that will help me make further progress not only as a developer, but also as a person.
    Regarding my free time, I try to work on expanding my knowledge by reading books and watching videos on various technologies.

    Also, I consider myself as a gadget maniac 😎.´´</p>
    <Button onClick={() => history.push('/projects')}>Check out my projects!</Button>
  </Main>
);

Home.propTypes = {
  history: PropTypes.object
};

export default withRouter(Home);
