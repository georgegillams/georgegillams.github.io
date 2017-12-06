import React from 'react';
import {
  HashRouter,
} from 'react-router-dom';
import BpkText from 'bpk-component-text';
import NavLayout from './NavLayout';

import STYLES from './app.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <HashRouter>
    <div>
      <div className={getClassName('app__download-button-container')}>
        <a href="https://dl.dropbox.com/s/smcdcgitd4nog17/George%20Gillams%20CV.pdf?dl=0">
          <BpkText className={getClassName('app__download-button')} textStyle="sm" >Download CV</BpkText>
        </a>
      </div>
      <NavLayout />
    </div>
  </HashRouter>
);

export default App;
