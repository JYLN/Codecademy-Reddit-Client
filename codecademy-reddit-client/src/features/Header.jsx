import { RiRedditLine } from 'react-icons/ri';
import SubredditSelect from '../components/SubredditSelect';

export default function Header() {
  return (
    <header className='navbar fixed z-10 flex-col border-b border-b-neutral bg-base-100 px-8 py-6 font-poppins transition-all duration-150 ease-in-out md:flex-row xl:px-60'>
      <div className='flex-1'>
        <a className='btn-ghost btn text-2xl normal-case'>
          <RiRedditLine className='h-8 w-8' />
          redditreader
        </a>
      </div>
      <div className='w-full flex-none md:w-auto'>
        <SubredditSelect />
      </div>
    </header>
  );
}
