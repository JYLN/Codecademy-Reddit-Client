import PostLoading from '../components/PostLoading';

export default function PostsList() {
  return (
    <div className='container relative top-36 mx-auto grid grid-cols-3 gap-10'>
      <PostLoading />
      <PostLoading />
      <PostLoading />
    </div>
  );
}
