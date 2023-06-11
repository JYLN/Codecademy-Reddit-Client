import moment from 'moment';
import { PropTypes } from 'prop-types';
import { BiCalendar, BiCommentDetail, BiUpvote, BiUser } from 'react-icons/bi';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { getLoadingComments, getPostComments } from '../store/redditSlice';

export default function Post({ post, showComments }) {
  const { id, title, ups, author, num_comments, url, created_utc, selftext, permalink } = post;
  const loadingComments = useSelector(getLoadingComments(id));
  const comments = useSelector(getPostComments(id));

  const handleClick = () => {
    showComments(permalink);
    const modalIdString = `modal_${id}`;
    window[modalIdString].showModal();
  };

  const isUrlImage = () => /.png|.jpg|.webp|.jpeg/.test(url);

  return (
    <>
      <div
        onClick={handleClick}
        className='card mb-8 cursor-pointer break-inside-avoid break-after-avoid border border-neutral bg-base-100 shadow-lg transition-all duration-200 ease-in hover:bg-neutral hover:shadow-2xl'>
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
        <form method='dialog' className='prose modal-box max-w-6xl'>
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
          {selftext && <p className='py-4'>{selftext}</p>}
          <h4 className='font-bold'>Comments</h4>
          <ul>
            {loadingComments ? (
              <p>
                <span className='loading loading-spinner'></span>
              </p>
            ) : comments.length < 1 ? (
              <p>No comments found...</p>
            ) : (
              comments.map(comment => (
                <li key={comment.id} className='flex flex-col gap-1'>
                  <span className='badge badge-outline'>
                    u/{comment.author} | {moment.unix(comment.created_utc).fromNow()}
                  </span>
                  <div>
                    <ReactMarkdown>{comment.body}</ReactMarkdown>
                  </div>
                </li>
              ))
            )}
          </ul>
        </form>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  showComments: PropTypes.func.isRequired,
};
