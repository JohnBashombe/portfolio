import React from 'react';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary title of section
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */

export const Title = ({ title }: { title: string }) => {
  return <p className='text-gray-900 font-serif text-5xl mb-[80px]'>{title}</p>;
};
