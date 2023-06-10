import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import PostLoading from '../components/PostLoading';
import {
  fetchPosts,
  getLoadingPosts,
  getPosts,
  getSelectedSubreddit,
} from '../store/redditSlice';

export default function PostsList() {
  const posts = useSelector(getPosts);
  const selectedSubreddit = useSelector(getSelectedSubreddit);
  const loadingPosts = useSelector(getLoadingPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSubreddit) {
      console.log(selectedSubreddit);
      dispatch(fetchPosts(selectedSubreddit));
    }
  }, [dispatch, selectedSubreddit]);

  return (
    <>
      {loadingPosts ? (
        <div className='w-full columns-2 gap-6'>
          <PostLoading />
          <PostLoading />
          <PostLoading />
        </div>
      ) : posts.length < 1 ? (
        <h1 className='w-full font-poppins text-4xl font-bold'>No subreddit found...</h1>
      ) : (
        <div className='w-full gap-6 lg:columns-2 xl:columns-3'>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
