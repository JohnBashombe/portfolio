import React from 'react';
import Image from 'next/image';

import { IBio } from '../interfaces/Bio';
import { IMetrics } from '../interfaces/Metrics';

import iuea from '../assets/iuea.png';

import { Utils } from './Util';

const { Info, MetricInfo } = Utils;

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
  const Bio: IBio[] = [
    {
      title: 'Biography',
      data: [
        'Work for money and',
        'design for love!',
        "I'm Ntavigwa Bashombe,",
        'an UI/UX Interaction Designer',
        'and Backend Developer',
      ],
    },
    {
      title: 'Contact',
      data: [
        'Kampala, Uganda',
        'ntavigwabashombe@gmail.com',
        '+256 761 077 379',
      ],
    },
    {
      title: 'Services',
      data: ['Backend Development', 'Fronted Development', 'UI/UX Designing'],
    },
  ];

  const MetricData: IMetrics[] = [
    {
      title: 'Years Of Experience',
      value: '3',
    },
    {
      title: 'Satisfaction Clients',
      value: '100%',
    },
    {
      title: 'Client on Worldwide',
      value: '+ 5',
    },
    {
      title: 'Projects Done',
      value: '11',
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-full mx-auto my-10'>
        <div className='flex flex-col justify-center items-center text-center space-y-4 font-serif'>
          <p className='text-6xl font-medium text-gray-800 tracking-normal'>
            Ntavigwa Bashombe
          </p>
          <p className='text-6xl font-medium text-gray-800 tracking-normal'>
            UI/UX Interaction Designer and
          </p>
          <p className='text-6xl font-medium text-gray-800 tracking-normal'>
            Backend Developer
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center justify-items-center my-10'>
        <div className='flex flex-col justify-start items-start space-y-16'>
          {Bio.map((val, index) => (
            <Info title={val.title} data={val.data} key={index} />
          ))}
        </div>
        <div className='w-full'>
          <div className='h-[800px] rounded-b-full rounded-t-full border border-gray-200 p-8'>
            <div className='bg-primary w-full h-full rounded-b-full rounded-t-full'></div>
          </div>
        </div>
        <div>
          {MetricData.map((val, index) => (
            <MetricInfo title={val.title} value={val.value} key={index} />
          ))}
        </div>
      </div>
      <div className='my-16 flex flex-col justify-center items-center w-full'>
        <Image src={iuea} alt='alma mater' className='w-auto h-auto' />
      </div>
    </div>
  );
};

export default Header;
