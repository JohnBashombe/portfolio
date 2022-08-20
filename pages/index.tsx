import Head from 'next/head';
import React from 'react';

import App from './_app';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the home page
 * @returns {JSX.Element}: JSX Code for Home
 * @license MIT
 * @version 1.0.0
 */
const Home = (): JSX.Element => {
  return (
    <div className='flex bg-gray-50'>
      <Head>
        <title>Ntavigwa Porfolio</title>
        <meta name='description' content='Ntavigwa Porfolio' />
      </Head>
      <App />
    </div>
  );
};

export default Home;
