import React from 'react';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the top bar of the web app
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Header = (): JSX.Element => {
  return (
    <div>
      <div className='w-full lg:w-8/12 mx-auto my-10'>
        <div className='flex flex-col justify-center items-center text-center space-y-4 font-serif'>
          <p className='text-7xl font-medium text-gray-800 tracking-normal'>
            Ntavigwa Bashombe
          </p>
          <p className='text-7xl font-medium text-gray-800 tracking-normal'>
            UI/UX Interaction Designer and
          </p>
          <p className='text-7xl font-medium text-gray-800 tracking-normal'>
            Backed Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
