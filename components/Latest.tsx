import React from 'react';
import Image from 'next/image';

import { Utils } from './Util';

import placeHolder from '../assets/placeholder.jpg';

import { ILatest } from '../interfaces/Latest';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Latest Experience
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Latest = (): JSX.Element => {
  return (
    <div className='w-10/12 mx-auto mt-16'>
      <div className='flex flex-col justify-center items-center'>
        <Utils.Title title='My Latest Projects' />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <Card category='NODE JS | Web API' title='Do See Africa API' />
          <Card category='React TS | Web App' title='Do See Africa' />
          <Card category='NODE JS | Web API' title='Master Pesa API' />
        </div>
      </div>
      <div className='h-10 my-16 flex flex-row justify-center items-center space-x-3'>
        <p className='w-2 h-2 bg-black/70 rounded-full cursor-pointer'></p>
        <p className='w-2 h-2 bg-gray-300 rounded-full cursor-pointer'></p>
        <p className='w-2 h-2 bg-gray-300 rounded-full cursor-pointer'></p>
        <p className='w-2 h-2 bg-gray-300 rounded-full cursor-pointer'></p>
      </div>
    </div>
  );
};

export default Latest;

const Card = ({ title, category }: ILatest): JSX.Element => {
  return (
    <div>
      <Image src={placeHolder} alt={'placeholder'} className='w-full' />
      <p className='text-sm text-gray-400 my-4'>{category}</p>
      <p className='text-3xl text-gray-900 font-serif font-medium'>{title}</p>
    </div>
  );
};
