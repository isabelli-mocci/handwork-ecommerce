import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className='flex justify-center'>
      <div className='p-6 sm:p-8 lg:p-10 max-w-2xl w-full'>
        <h1 className='font-cardo text-3xl font-black sm:text-3xl mb-8 uppercase'>
          Contact us
        </h1>

        <div className='mb-10'>
          <h2 className='text-md sm:text-xl font-medium mb-4'>
            We are here to help
          </h2>

          <p className=' text-base sm:text-lg mb-2 text-justify'>
            If you'd like to get in contact, please fill in the form below or
            send us an email to hello@mocciandco.com we would love to hear
            from you!
          </p>
        </div>

        <form className='space-y-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Name'
                className='mt-1 block w-full px-4 py-3 border border-text shadow-sm placeholder-text focus:outline-none focus:ring-accent focus:border-accent sm:text-base'
              />
            </div>
            <div>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                className='mt-1 block w-full px-4 py-3 border border-text shadow-sm placeholder-text focus:outline-none focus:ring-accent focus:border-accent sm:text-base'
              />
            </div>
          </div>
          <div>
            <input
              type='tel'
              id='phone'
              name='phone'
              placeholder='Phone number'
              className='mt-1 block w-full px-4 py-3 border border-text shadow-sm placeholder-text focus:outline-none focus:ring-accent focus:border-accent sm:text-base'
            />
          </div>
          <div>
            <textarea
              id='comment'
              name='comment'
              rows={6}
              placeholder='Comment'
              className='mt-1 block w-full px-4 py-3 border border-text shadow-sm placeholder-text focus:outline-none focus:ring-accent focus:border-accent sm:text-base resize-y'
            ></textarea>
          </div>
          <div>
            <button
              type='submit'
              className='w-auto px-8 py-3 bg-primary text-white font-medium  shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-base'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
