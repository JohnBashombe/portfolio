import React from 'react';

import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGitlab,
} from 'react-icons/ai';

import { FiGlobe } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the top bar of the web app
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const TopBar = (): JSX.Element => {
  return (
    <div className='flex flex-row justify-between items-center mx-auto py-16 w-10/12'>
      <div className='flex space-x-4 '>
        <p className='text-gray-900 text-sm uppercase font-bold'>Works</p>
        <p className='text-gray-900 text-sm uppercase font-bold'>Contact</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <BsShieldCheck className='w-10 h-10 my-2 text-gray-800' />
        <p className='text-sm uppercase m-0 font-bold text-gray-900 '>
          Ntavigwa
        </p>
        <p className='text-sm uppercase m-0 font-bold text-gray-900 '>
          Bashombe
        </p>
      </div>
      <div className='flex flex-row space-x-4'>
        <AiOutlineTwitter className='w-5 h-5 text-gray-900 cursor-pointer hover:text-gray-700' />
        <AiOutlineGithub className='w-5 h-5 text-gray-900 cursor-pointer hover:text-gray-700' />
        <AiOutlineGitlab className='w-5 h-5 text-gray-900 cursor-pointer hover:text-gray-700' />
        <FaFacebookF className='w-4 h-4 text-gray-900 cursor-pointer hover:text-gray-700' />
        <FiGlobe className='w-4 h-4 text-gray-900 cursor-pointer hover:text-gray-700' />
      </div>
    </div>
  );
};

export default TopBar;
