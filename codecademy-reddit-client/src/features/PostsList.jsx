import PostLoading from '../components/PostLoading';

export default function PostsList() {
  return (
    <div className='grid grid-cols-1 gap-10 xl:grid-cols-2'>
      <PostLoading />
      <PostLoading />
      <PostLoading />
    </div>
  );
}
