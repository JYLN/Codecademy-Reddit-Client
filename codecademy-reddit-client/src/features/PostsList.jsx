import { useEffect } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import PostLoading from '../components/PostLoading';
import {
  fetchComments,
  fetchPosts,
  getLoadingPosts,
  getLoadingPostsFailed,
  getPosts,
  getSelectedSubreddit,
} from '../store/redditSlice';

export default function PostsList() {
  const posts = useSelector(getPosts);
  const selectedSubreddit = useSelector(getSelectedSubreddit);
  const loadingPosts = useSelector(getLoadingPosts);
  const loadingPostsFailed = useSelector(getLoadingPostsFailed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSubreddit) {
      dispatch(fetchPosts(selectedSubreddit));
    }
  }, [dispatch, selectedSubreddit]);

  const handleClick = index => {
    const getComments = permalink => {
      dispatch(fetchComments(index, permalink));
    };

    return getComments;
  };

  return (
    <>
      {loadingPosts ? (
        <div className='w-full gap-6 lg:columns-2'>
          <PostLoading />
          <PostLoading />
          <PostLoading />
          <PostLoading />
        </div>
      ) : posts.length < 1 ? (
        <div className='w-full'>
          <h1 className='font-poppins text-4xl font-bold'>No subreddit found...</h1>
          {loadingPostsFailed && (
            <div className='alert alert-error my-5'>
              <RiErrorWarningFill className='h-7 w-7' />
              <span>
                Error! Either the subreddit you entered does not exist or there is a typo.
                Please try again...
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className='w-full gap-6 lg:columns-2 xl:columns-3'>
          {posts.map((post, index) => (
            <Post key={post.id} post={post} showComments={handleClick(index)} />
          ))}
        </div>
      )}
    </>
  );
}
