import { RiDownloadLine } from 'react-icons/ri';

export default function SubredditSelect() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className='form-control w-full md:w-90' onSubmit={handleSubmit}>
      <div className='relative'>
        <input
          className='input input-bordered input-md w-full pr-16'
          type='text'
          placeholder='Enter a subreddit name to read...'
        />
        <button
          className='btn btn-secondary absolute top-0 right-0 rounded-l-none'
          type='submit'>
          <RiDownloadLine className='w-6 h-6' />
        </button>
      </div>
    </form>
  );
}
