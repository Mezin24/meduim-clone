import MediumLogo from '@/assets/img/logo.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex justify-between items-center bg-yellow-400 border-b border-black px-5 py-10'>
      <div className='py-10 space-y-5'>
        <h2 className='text-6xl font-serif max-w-xl'>
          <span className='underline decoration-black decoration-4'>
            Medium
          </span>{' '}
          is a place to write, read and connect
        </h2>
        <h3>
          It&apos;s easy and free to post your thinking on any topic and connect
          with millions of readers
        </h3>
      </div>
      <Image
        src={MediumLogo}
        alt='logo'
        className='hidden md:inline-flex h-32 w-32 lg:h-48 lg:w-48'
      />
    </div>
  );
};
export default Hero;
