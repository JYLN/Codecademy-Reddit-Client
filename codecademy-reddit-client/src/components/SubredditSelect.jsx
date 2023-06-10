import { useState } from 'react';
import { RiDownloadLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedSubreddit, getSelectedSubreddit } from '../store/redditSlice';

export default function SubredditSelect() {
  const [subreddit, setSubreddit] = useState('');
  const selectedSubreddit = useSelector(getSelectedSubreddit);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => setSubreddit(target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addSelectedSubreddit(subreddit));
    setSubreddit('');
  };

  return (
    <form className='md:w-90 form-control w-full' onSubmit={handleSubmit}>
      <div className='relative'>
        <input
          className='input-bordered input input-md w-full pr-16'
          type='text'
          placeholder='Enter a subreddit name to read...'
          value={subreddit}
          onChange={handleChange}
        />
        {selectedSubreddit && (
          <label className='label'>
            <span className='label-text-alt'>Now reading: r/{selectedSubreddit}</span>
          </label>
        )}
        <button
          className='btn-secondary btn absolute right-0 top-0 rounded-l-none'
          type='submit'>
          <RiDownloadLine className='h-6 w-6' />
        </button>
      </div>
    </form>
  );
}
