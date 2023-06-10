import { RiCloseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPreviousSelectedSubreddit,
  removePreviousSelectedSubreddit,
} from '../store/redditSlice';

export default function SubredditList() {
  const previousSelectedSubreddit = useSelector(getPreviousSelectedSubreddit);
  const dispatch = useDispatch();

  const handleDelete = e => {
    const subreddit = e.target.closest('li').dataset.subreddit;
    dispatch(removePreviousSelectedSubreddit(subreddit));
  };

  return (
    <aside className='card row-start-1 self-start border border-neutral bg-base-100 shadow-lg md:col-span-2 md:row-start-auto'>
      <div className='card-body'>
        <h2 className='card-title font-poppins'>Recent Subreddits</h2>
        <ul className='menu rounded-box menu-vertical menu-lg'>
          {previousSelectedSubreddit.length < 1 ? (
            <li>
              <a>No Subreddits Yet....</a>
            </li>
          ) : (
            previousSelectedSubreddit.map(subreddit => (
              <li key={subreddit} data-subreddit={subreddit}>
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
