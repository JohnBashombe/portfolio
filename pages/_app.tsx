import React from 'react';
import '../styles/globals.css';

import { MyComponents } from '../components';
import Advantages from '../components/Advantages';

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
    <div className='w-10/12 mx-auto h-screen'>
      <TopBar />
      <Header />
      <Separator />
      <Advantages />
    </div>
  );
};

export default App;

const Separator = () => {
  return (
    <div className='border-t-2 border-gray-300 mt-16 w-10/12 mx-auto'></div>
  );
};
