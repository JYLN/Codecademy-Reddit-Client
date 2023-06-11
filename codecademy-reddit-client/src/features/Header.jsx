import { RiRedditLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { clearPosts } from '../store/redditSlice';
import SubredditSelect from './SubredditSelect';

export default function Header() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearPosts());
  };

  return (
    <header className='navbar fixed z-10 flex-col border-b border-b-neutral bg-base-100 px-8 py-6 font-poppins transition-all duration-150 ease-in-out md:flex-row xl:px-60'>
      <div className='flex-1'>
        <a className='btn-ghost btn text-2xl normal-case' onClick={handleClick}>
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
