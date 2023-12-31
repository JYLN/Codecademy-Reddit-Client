import { RiCloseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPreviousSelectedSubreddit,
  removePreviousSelectedSubreddit,
  setSelectedSubreddit,
} from '../store/redditSlice';

export default function SubredditList() {
  const previousSelectedSubreddit = useSelector(getPreviousSelectedSubreddit);
  const dispatch = useDispatch();

  const handleClick = subreddit => {
    dispatch(setSelectedSubreddit(subreddit));
  };

  const handleDelete = e => {
    const subreddit = e.target.closest('li').dataset.subreddit;
    dispatch(removePreviousSelectedSubreddit(subreddit));
  };

  return (
    <aside className='card w-full self-start border border-neutral bg-base-100 shadow-lg md:w-1/4'>
      <div className='card-body'>
        <h2 className='card-title font-poppins'>Recent Subreddits</h2>
        <ul className='menu rounded-box menu-vertical menu-lg'>
          {previousSelectedSubreddit.length < 1 ? (
            <li>
              <a>No Subreddits Yet....</a>
            </li>
          ) : (
            previousSelectedSubreddit.map(subreddit => (
              <li
                key={subreddit}
                data-subreddit={subreddit}
                onClick={() => handleClick(subreddit)}>
                <a className='justify-between'>
                  r/{subreddit}
                  <button onClick={handleDelete} className='btn-outline btn-square btn-xs btn'>
                    <RiCloseFill className='h-6 w-6' />
                  </button>
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </aside>
  );
}
