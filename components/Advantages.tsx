import React from 'react';

import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { ISkills } from '../interfaces/skills';
import { FaFigma, FaNodeJs, FaReact, FaJava } from 'react-icons/fa';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Adavantages
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */

const Advantages = (): JSX.Element => {
  const skills: ISkills[] = [
    {
      title: 'Node JS',
      value: '70%',
      icon: <FaNodeJs className='w-[70px] h-[70px] text-gray-700' />,
    },
    {
      title: 'React JS | TS',
      value: '80%',
      icon: <FaReact className='w-[70px] h-[70px] text-gray-700' />,
    },
    {
      title: 'Next JS',
      value: '55%',
      icon: <TbBrandNextjs className='w-[70px] h-[70px] text-gray-700' />,
    },
    {
      title: 'Figma',
      value: '65%',
      icon: <FaFigma className='w-[70px] h-[70px] text-gray-700' />,
    },
    {
      title: 'Tailwind CSS',
      value: '95%',
      icon: <SiTailwindcss className='w-[70px] h-[70px] text-gray-700' />,
    },
    {
      title: 'Java',
      value: '85%',
      icon: <FaJava className='w-[70px] h-[70px] text-gray-700' />,
    },
  ];

  return (
    <div className='my-16 flex flex-col justify-center items-center pb-16 w-10/12 mx-auto'>
      <p className='text-gray-900 font-serif text-5xl mb-[80px]'>
        My Advantage
      </p>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 xl:grid-cols-6 w-full'>
        {skills.map((val, index) => (
          <Card
            title={val.title}
            value={val.value}
            Icon={val.icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Advantages;

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Single Card
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Card = ({
  Icon,
  value,
  title,
}: {
  Icon: JSX.Element;
  value: string;
  title: string;
}) => {
  return (
    <div className='flex justify-center items-center flex-col space-y-3'>
      <div className='w-full lg:w-10/12 h-60 rounded-t-full rounded-b-full bg-secondary flex flex-col justify-center items-center space-y-8'>
        {Icon}
        <p className='font-serif font-medium text-4xl text-gray-900'>{value}</p>
      </div>
      <p className='text-base font-normal tracking-wide text-gray-800'>
        {title}
      </p>
    </div>
  );
};
