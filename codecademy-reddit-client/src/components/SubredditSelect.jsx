import { RiDownloadLine } from 'react-icons/ri';

export default function SubredditSelect() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className='md:w-90 form-control w-full' onSubmit={handleSubmit}>
      <div className='relative'>
        <input
          className='input-bordered input input-md w-full pr-16'
          type='text'
          placeholder='Enter a subreddit name to read...'
        />
        <button
          className='btn-secondary btn absolute right-0 top-0 rounded-l-none'
          type='submit'>
          <RiDownloadLine className='h-6 w-6' />
        </button>
      </div>
    </form>
  );
}
