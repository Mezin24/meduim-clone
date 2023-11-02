import Link from 'next/link';
import MediumLogo from '@/assets/img/medium.png';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='p-5 max-w-7xl mx-auto flex justify-between items-center'>
      <div className='flex items-center space-x-5'>
        <Link href='/'>
          <Image
            src={MediumLogo}
            alt='medium logo'
            className='w-44 object-cover'
          />
        </Link>
        <div className='hidden md:inline-flex space-x-4 md:items-center'>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className='text-white bg-green-600 py-1 px-4 rounded-full'>
            Follow
          </h3>
        </div>
      </div>
      <div className='flex items-center space-x-5 text-green-600'>
        <h3 className='capitalize'>sign In</h3>
        <h3 className='capitalize border border-green-600 px-4 py-1 rounded-full cursor-pointer'>
          get started
        </h3>
      </div>
    </div>
  );
};
export default Header;
