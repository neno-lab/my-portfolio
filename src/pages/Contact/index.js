import './style.scss';

import DivContent from '../../containers/DivContent';
import Main from '../../containers/Main';
import React from 'react';
import { TiContacts } from 'react-icons/ti';
import Underline from '../../components/universal/Underline';

const Contact = () => (
  <Main className='contact-main-holder'>
    <DivContent className='contact-title-holder'>
      <TiContacts />
      <h1>Contact</h1>
      <Underline />
    </DivContent>
  </Main>
);

export default Contact;
