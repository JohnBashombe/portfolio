import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Footer
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Footer = () => {
  return (
    <div className='flex flex-col'>
      <div className='mt-16 flex flex-row justify-between items-center w-10/12 mx-auto text-sm text-gray-800'>
        <div className='flex justify-center items-center space-x-2'>
          <AiOutlineCopyright className='w-3 h-3' />
          <p className='text-gray-400'>
            {new Date().getFullYear()} Ntavigwa. <b>ALL RIGHTS RESERVED.</b>
          </p>
        </div>
        <p className='text-gray-400'>ntavigwabashombe@gmail.com</p>
      </div>
      <div className='mb-28'></div>
    </div>
  );
};

export default Footer;
