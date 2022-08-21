import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Latest Experience
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Testimony = (): JSX.Element => {
  return (
    <div className='w-10/12 mx-auto my-[150px]'>
      <div className='flex flex-row space-x-16 justify-center items-center'>
        <AiOutlineLeft className='w-10 h-10 md:w-24 md:h-24  text-gray-300 cursor-pointer' />
        <p className='mx-2 text-center text-4xl font-serif text-gray-800'>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ad
          nostrum harum cumque dolorem nesciunt fugit obcaecati, dolore hic
          praesentium. <br /> Cum accusantium iure doloribus expedita maxime
          aspernatur?"
        </p>
        <AiOutlineRight className='w-10 h-10 md:w-24 md:h-24  text-gray-300 cursor-pointer' />
      </div>
    </div>
  );
};

export default Testimony;
