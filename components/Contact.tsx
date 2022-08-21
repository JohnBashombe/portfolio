import React from 'react';

import { Utils } from './Util';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Contact
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Contact = () => {
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='w-10/12 mx-auto my-20'>
      <div className='flex flex-col justify-center items-center'>
        <Utils.Title title='Want To Hire Me?' />
        <p className='text-sm text-gray-400'>
          Leave a message and I will respond to you shortly.
        </p>
        <form onSubmit={(e) => sendMessage(e)}>
          <div className='flex space-x-4 mt-8'>
            <div>
              <label htmlFor='firstname' className='text-xs text-gray-400'>
                First Name
              </label>
              <input
                type='text'
                id='firstname'
                placeholder='First Name'
                className='w-full border-[1px] bg-white focus:border-gray-200 rounded text-sm focus:outline-none h-10 px-4 placeholder:text-xs placeholder:capitalize'
              />
            </div>
            <div>
              <label htmlFor='lastname' className='text-xs text-gray-400'>
                Last Name
              </label>
              <input
                type='text'
                id='lastname'
                placeholder='Last Name'
                className='w-full border-[1px] bg-white focus:border-gray-200 text-sm focus:outline-none h-10 px-4 placeholder:text-xs placeholder:capitalize'
              />
            </div>
          </div>

          <div className='mt-5'>
            <label htmlFor='email' className='text-xs text-gray-400'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              placeholder='Email Address'
              className='w-full border-[1px] bg-white focus:border-gray-200 text-sm focus:outline-none h-10 px-4 placeholder:text-xs placeholder:capitalize'
            />
          </div>

          <div className='mt-5'>
            <label htmlFor='message' className='text-xs text-gray-400'>
              Message
            </label>
            <textarea
              id='message'
              rows={5}
              placeholder='Message'
              className='w-full border-[1px] bg-white focus:border-gray-200 text-sm focus:outline-none p-4 placeholder:text-xs placeholder:capitalize'
            />
          </div>

          <div className='mt-5'>
            <button
              type='submit'
              className='w-full border-[1px] bg-secondary focus:border-gray-200 text-sm focus:outline-none p-4 placeholder:text-xs uppercase'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
