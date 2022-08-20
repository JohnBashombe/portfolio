import React from 'react';
import '../styles/globals.css';

import { MyComponents } from '../components';

const { TopBar, Header } = MyComponents;

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the main app that imports our styles
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const App = (): JSX.Element => {
  return (
    <div className='w-screen h-screen'>
      <TopBar />
      <Header />
    </div>
  );
};

export default App;
