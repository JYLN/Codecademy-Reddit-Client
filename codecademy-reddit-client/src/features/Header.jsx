import { RiRedditLine } from 'react-icons/ri';
import SubredditSelect from '../components/SubredditSelect';

export default function Header() {
  return (
    <header className='navbar font-poppins bg-base-100 fixed px-8 border-b border-b-neutral py-6 transition-all ease-in-out duration-150 flex-col xl:px-60 md:flex-row'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-2xl'>
          <RiRedditLine className='w-8 h-8' />
          redditreader
        </a>
      </div>
      <div className='flex-none w-full md:w-auto'>
        <SubredditSelect />
      </div>
    </header>
  );
}
