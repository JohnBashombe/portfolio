import React from 'react';
import { IBio } from '../../interfaces/Bio';
import { IMetrics } from '../../interfaces/Metrics';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Show Info on Banner
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
export const Info = ({ title, data }: IBio): JSX.Element => {
  return (
    <div className='flex flex-col space-y-8'>
      <p className='text-gray-400 text-xs uppercase'>{title}</p>
      <p className='text-base text-gray-500 font-medium tracking-wide space-y-2'>
        {data.map((val, index) => (
          <p key={index}>{val}</p>
        ))}
      </p>
    </div>
  );
};

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Show Metrics on Baner
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
export const MetricInfo = ({ title, value }: IMetrics): JSX.Element => {
  return (
    <div className='flex flex-col space-y-5 text-right my-16'>
      <p className='text-gray-400 font-medium text-xs uppercase'>{title}</p>
      <p className='text-5xl text-gray-900 font-normal tracking-wider space-y-2'>
        {value}
      </p>
    </div>
  );
};
