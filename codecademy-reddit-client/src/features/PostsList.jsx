import Post from '../components/Post';

export default function PostsList() {
  return (
    <div className='container relative top-36 mx-auto grid grid-cols-3 gap-10'>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
