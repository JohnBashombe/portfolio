import React from 'react';
import '../styles/globals.css';

import { MyComponents } from '../components';

const {
  TopBar,
  Header,
  Advantages,
  Latest,
  Experience,
  Testimony,
  Footer,
  Contact,
} = MyComponents;

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
      <Separator />
      <Experience />
      <Separator />
      <Latest />
      <Separator />
      <Testimony />
      <Separator />
      <Contact />
      <Separator />
      <Footer />
    </div>
  );
};

export default App;

const Separator = () => {
  return (
    <div className='border-t-[1px] border-gray-300 mt-16 w-10/12 mx-auto'></div>
  );
};
