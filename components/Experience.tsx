import React from 'react';

import { ICardExperience, IExperience } from '../interfaces/Experience';

import { Utils } from './Util';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Experience
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Experience = (): JSX.Element => {
  return (
    <div className='flex flex-col justify-center items-center mt-16 w-10/12 mx-auto'>
      <Utils.Title title='Education & Experience' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 w-full mb-16'>
        <Card
          title='2019'
          data={[
            {
              title: 'Bachelor In Computer Science',
              description:
                'International University of East Africa ( GPA: 4.0 )',
            },
          ]}
        />
        <Card
          title='Jan. 2020 - Nov. 2021'
          data={[
            {
              title: 'Software Developer',
              description: 'SKIIYA S.A.R.L',
            },
            {
              title: 'Web App Developer',
              description: 'Freelancer',
            },
            {
              title: 'Mobile App Developer',
              description: 'SKIIYA S.A.R.L',
            },
            {
              title: 'Forex & Algo Trading',
              description: 'Freelancer',
            },
            {
              title: 'Data Compression',
              description: 'Freelancer',
            },
          ]}
        />
        <Card
          title='Dec. 2021 - Present'
          data={[
            {
              title: 'Backend Developer',
              description: 'Umoja Digital Group.',
            },
            {
              title: 'Frontend Developer',
              description: 'Umoja Digital Group.',
            },
            {
              title: 'Tech Articles',
              description: 'Medium',
            },
            {
              title: 'Professional Forex Trading',
              description: 'FTMO Group.',
            },
            {
              title: 'Web 3 Technology',
              description: 'Freelancer.',
            },
            {
              title: 'Mobile Money Wallet',
              description: 'Masterpesa TZ',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Experience;

const Card = ({ title, data }: ICardExperience): JSX.Element => {
  return (
    <div className='flex justify-start items-start flex-col w-full'>
      <p className='text-gray-400 text-sm uppercase mb-6'> {title}</p>
      {data.map((val, index) => (
        <Item title={val.title} description={val.description} key={index} />
      ))}
    </div>
  );
};

const Item = ({ title, description }: IExperience): JSX.Element => {
  return (
    <div className='flex flex-col justify-start items-start mb-5'>
      <p className='text-3xl font-serif font-medium text-gray-900 w-full py-3'>
        {title}
      </p>
      <p className='text-sm text-gray-400 capitalize'>{description}</p>
    </div>
  );
};
