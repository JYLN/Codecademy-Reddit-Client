import moment from 'moment';
import { PropTypes } from 'prop-types';
import { BiCalendar, BiCommentDetail, BiUpvote, BiUser } from 'react-icons/bi';

export default function Post({ post }) {
  const { id, title, ups, author, num_comments, url, created_utc, selftext } = post;

  const handleClick = () => {
    const modalIdString = `modal_${id}`;
    window[modalIdString].showModal();
  };

  const isUrlImage = () => {
    const urlMatch = /.png|.jpg|.webp|.jpeg/.test(url);
    return urlMatch;
  };

  return (
    <>
      <div
        onClick={handleClick}
        className='card mb-10 border border-neutral bg-base-100 shadow-lg'>
        {isUrlImage() && (
          <figure>
            <img src={url} />
          </figure>
        )}
        <div className='card-body gap-4'>
          <h2 className='card-title'>{title}</h2>
          <div className='card-actions items-center justify-end'>
            <div className='badge badge-outline badge-md'>
              <BiUser /> u/{author}
            </div>
            <div className='badge badge-outline badge-md'>
              <BiCalendar /> {moment.unix(created_utc).fromNow()}
            </div>
            <div className='badge badge-outline badge-md'>
              <BiUpvote /> {ups}
            </div>
            <div className='badge badge-outline badge-md'>
              <BiCommentDetail /> {num_comments}
            </div>
          </div>
        </div>
      </div>

      <dialog id={`modal_${id}`} className='modal'>
        <form method='dialog' className='prose modal-box'>
          <button
            htmlFor={`modal_${id}`}
            className='btn-ghost btn-sm btn-circle btn absolute right-2 top-2'>
            x
          </button>
          <h3 className='text-lg font-bold'>{title}</h3>
          <div className='card-actions'>
            <div className='badge badge-outline badge-md'>
              <BiUser /> u/{author}
            </div>
            <div className='badge badge-outline badge-md'>
              <BiCalendar /> {moment.unix(created_utc).fromNow()}
            </div>
            <div className='badge badge-outline badge-md'>
              <BiUpvote /> {ups}
            </div>
          </div>
          {isUrlImage() && (
            <figure>
              <img src={url} />
            </figure>
          )}
          {selftext && <p>{selftext}</p>}
        </form>
      </dialog>
    </>
  );
}

Post.propTypes = {
  post: {
    title: PropTypes.string,
    ups: PropTypes.number,
    author: PropTypes.string,
    num_comments: PropTypes.number,
    url: PropTypes.string,
    created_utc: PropTypes.number,
  },
};
